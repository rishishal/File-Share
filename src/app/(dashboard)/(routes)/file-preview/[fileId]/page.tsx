"use client";

import { useEffect } from "react";

interface FilePreProps {
  params: { fileId: string };
}

const FilePreview: React.FC<FilePreProps> = ({ params }) => {
  useEffect(() => {
    console.log(params?.fileId);
  }, [params?.fileId]);
  return <div>FilePreview</div>;
};
export default FilePreview;
