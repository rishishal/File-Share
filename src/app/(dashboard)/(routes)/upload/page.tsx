"use client";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import UploadForm from "./_components/UploadForm";
import { app } from "@/firebaseConfig";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { useUser } from "@clerk/nextjs";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";
import CompleteMark from "./_components/CompleteMark";

const Upload = () => {
  const { user } = useUser();
  const [progress, setProgress] = useState<number | null>();
  const [uploadCompleted, setUploadCompleted] = useState<boolean>(false);
  const [fileDocId, setFileDocId] = useState<string>();
  const router = useRouter();
  const storage = getStorage(app);
  const db = getFirestore(app);

  const uploadFile = (file: File) => {
    const metadata = {
      contentType: file.type,
    };
    const storageRef = ref(storage, "file-upload/" + file?.name);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);

    uploadTask.on("state_changed", (snapshot) => {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
      setProgress(progress);

      // Upload completed successfully, now we can get the download URL
      progress == 100 &&
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          toast.success("File upload completed!");
          saveInfo(file, downloadURL);
        });
    });
  };

  const saveInfo = async (file: File, downloadURL: String) => {
    const docId = uuidv4();

    // Add a new document in collection "cities"
    await setDoc(doc(db, "uploadedFile", docId), {
      id: docId,
      filename: file.name,
      fileSize: file.size,
      fileType: file.type,
      fileUrl: downloadURL,
      userEmail: user?.primaryEmailAddress?.emailAddress,
      userNamer: user?.fullName,
      password: "",
      shortUrl: process.env.NEXT_PUBLIC_BASE_URL + docId,
    });
    setFileDocId(docId);
  };

  useEffect(() => {
    console.log("Trigger");

    progress === 100 &&
      setTimeout(() => {
        setUploadCompleted(true);
      }, 2000);
  }, [progress]);

  useEffect(() => {
    uploadCompleted &&
      setTimeout(() => {
        router.push("/file-preview/" + fileDocId);
        setUploadCompleted(false);
      }, 2500);
  }, [fileDocId, router, uploadCompleted]);

  return (
    <div className='p-5 px-8 md:px28'>
      {!uploadCompleted ? (
        <div>
          <h2 className='text-[20px] text-center m-5'>
            Start <strong className='text-primary'> Uploading</strong> File and
            <strong className='text-primary'> Share </strong> it
          </h2>
          <UploadForm
            uploadBtnClick={(file: File) => uploadFile(file)}
            progress={progress!}
          />
        </div>
      ) : (
        <CompleteMark />
      )}

      <Toaster position='top-right' reverseOrder={false} />
    </div>
  );
};
export default Upload;
