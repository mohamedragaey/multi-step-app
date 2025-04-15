import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const ProgressBar = () => {
  const step = useSelector((state: RootState) => state.form.step);
  const totalSteps = 3; // We have 3 steps

  const progress = ((step) / totalSteps) * 100;

  return (
    <div className="relative pt-2">
      <div className="h-2 bg-gray-300 rounded-full">
        <div
          style={{ width: `${progress}%` }}
          className="h-2 bg-blue-500 rounded-full transition-all duration-300"
        ></div>
      </div>
      <div className="absolute top-0 right-0 text-sm font-medium text-gray-600">
        {step}/{totalSteps}
      </div>
    </div>
  );
};

export default ProgressBar;
