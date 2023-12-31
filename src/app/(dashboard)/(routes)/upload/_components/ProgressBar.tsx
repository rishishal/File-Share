interface Progressrops {
  progress: number;
}

const ProgressBar: React.FC<Progressrops> = ({ progress = 40 }) => {
  return (
    <div className='bg-gray-400 w-full h-4 mt-3 rounded-full '>
      <div
        className='bg-primary rounded-full h-4 text-[10px] text-white transition-all duration-150'
        style={{ width: `${progress}%` }}
      >
        {`${Number(progress).toFixed(0)}%`}
      </div>
    </div>
  );
};
export default ProgressBar;
