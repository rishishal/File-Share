"use client";
import { app } from "@/firebaseConfig";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import FileItems from "./_components/FileItems";
import Link from "next/link";
import Image from "next/image";
import { File } from "@/utils/Interface";

interface FilePreProps {
  params: { fileId: string };
  file: File;
}

const FileView: React.FC<FilePreProps> = ({ params }) => {
  const db = getFirestore(app);

  const id = params.fileId;

  const [file, setFile] = useState<File | null>();

  useEffect(() => {
    id && getFileInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const getFileInfo = async () => {
    const docRef = doc(db, "uploadedFile", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // console.log("Document data:", docSnap.data());
      setFile(docSnap.data() as File);
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  return (
    <div className='bg-gray-100 h-screen w-full flex justify-center items-center flex-col gap-4'>
      <Link href='/'>
        <Image src='/logo.svg' alt='LOGO' width={60} height={60} />
      </Link>
      <FileItems file={file!} />
    </div>
  );
};
export default FileView;
