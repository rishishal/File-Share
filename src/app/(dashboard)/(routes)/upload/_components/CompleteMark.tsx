import Lottie from "lottie-react";
import Animation from "@/asset/Animation.json";

const CompleteMark = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <Lottie animationData={Animation} />
      <h2 className='text-[25px] text-center m-3'>
        File <strong className='text-primary'>Uploaded</strong>Successfully
      </h2>
    </div>
  );
};
export default CompleteMark;
