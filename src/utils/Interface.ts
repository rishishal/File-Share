export interface File {
  fileSize: number;
  fileType: string;
  fileUrl: string;
  filename: string;
  id: string;
  password: string;
  shortUrl: string;
  userEmail: string;
  userNamer: string;
}

export interface SendEmailProps {
  data: {
    emailToSend: string;
    userName: string;
    fileName: string;
    fileSize: number;
    fileType: string;
    shortUrl: string;
  };
}
