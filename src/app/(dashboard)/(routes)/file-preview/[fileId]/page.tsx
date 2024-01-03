"use client";

import { app } from "@/firebaseConfig";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { File } from "@/utils/Interface";
import { ArrowLeftSquare } from "lucide-react";
import FileInfo from "./_components/FileInfo";
import Link from "next/link";
import FileShareForm from "./_components/FileShareForm";

interface FilePreProps {
  params: { fileId: string };
}

const FilePreview: React.FC<FilePreProps> = ({ params }) => {
  const db = getFirestore(app);
  const id = params.fileId;

  const [file, setFile] = useState<File | null>();

  useEffect(() => {
    console.log(id);
    id && getFileInfo();
  }, [id]);

  const getFileInfo = async () => {
    const docRef = doc(db, "uploadedFile", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setFile(docSnap.data() as File);
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  const onPasswordSave = async (password: string) => {
    const docRef = doc(db, "uploadedFile", id);
    await updateDoc(docRef, {
      password: password,
    });
  };

  return (
    <div className='py-10 px-20'>
      <Link href='/upload' className='flex gap-3'>
        <ArrowLeftSquare /> Go to Upload
      </Link>
      <div className='grid grid-cols-1 md:grid-cols-2 mt-5'>
        <FileInfo file={file!} />
        <FileShareForm
          file={file!}
          onPasswordSave={(password) => onPasswordSave(password)}
        />
      </div>
    </div>
  );
};
export default FilePreview;
