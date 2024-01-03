import { Copy, CopyIcon } from "lucide-react";
import { useState } from "react";
import { File } from "@/utils/Interface";
interface FileShareFormProps {
  file: File;
  onPasswordSave: (password: string) => void;
}

const FileShareForm: React.FC<FileShareFormProps> = ({
  file,
  onPasswordSave,
}) => {
  const [isPasswordEnable, setIsEnablePassword] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  return (
    file && (
      <div className='flex flex-col gap-2'>
        <div>
          <label htmlFor='' className='text-[14px] text-gray-500'>
            Show Url
          </label>
          <div className='flex gap-5 p-2 border rounded-md justify-between'>
            <input
              type='text'
              value={file.shortUrl}
              disabled
              className='disabled:text-gray-500 bg-transparent outline-none w-full'
            />
            <Copy className='text-gray-400 hover:text-gray-600 cursor-pointer' />
          </div>
        </div>
        <div className='gap-3 flex mt-5'>
          <input type='checkbox' onChange={(e) => setIsEnablePassword(true)} />
          <label>Enable Password?</label>
        </div>

        {isPasswordEnable ? (
          <div className='flex gap-3 items-center'>
            <div className='border rounded-md w-full p-2'>
              <input
                type='password'
                className='disabled:text-gray-500 bg-transparent outline-none'
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className='p-2 bg-primary text-white rounded-md disabled:bg-gray-300 hover:bg-blue-600'
              disabled={password?.length < 3}
              onClick={() => onPasswordSave(password)}
            >
              Save
            </button>
          </div>
        ) : null}
        <div className='border rounded-md p-3 mt-5'>
          <label className='text-[14px] text-gray-500'>Send Email</label>
          <div className='border rounded-md p-2'>
            <input
              type='email'
              placeholder='example@gmail.com'
              className='bg-transparent outline-none'
            />
          </div>
          <button className='p-2 disabled:bg-gray-300 bg-primary text-white hover:bg-blue-600 w-full mt-2 rounded-md'>
            Send Email
          </button>
        </div>
      </div>
    )
  );
};
export default FileShareForm;
