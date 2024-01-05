import Image from "next/image";
import { useEffect, useState } from "react";
import { File } from "@/utils/Interface";

const FileInfo = ({ file }: { file: File }) => {
  const [fileType, setFileType] = useState<string | undefined>();
  useEffect(() => {
    file && setFileType(file?.fileType.split("/")[0]);
    console.log(fileType);
  }, [file, fileType]);

  return (
    file && (
      <div className='text-center border flex justify-center m-4 flex-col items-center p-2 rounded-md border-blue-200'>
        <Image
          src={fileType == "image" ? file?.fileUrl : "/file.png"}
          alt='file-Logo'
          width={200}
          height={200}
          className='h-[200px] rounded-md object-contain'
        />
        <div>
          <h2>{file.filename}</h2>
          <h2 className='text-gray-400 text-[13px]'>{file.fileSize}</h2>
        </div>
      </div>
    )
  );
};
export default FileInfo;
