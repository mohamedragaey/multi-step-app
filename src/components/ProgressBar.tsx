import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const ProgressBar = () => {
  const step = useSelector((state: RootState) => state.form.step);
  const totalSteps = 3; // We have 3 steps

  const progress = ((step - 1) / totalSteps) * 100;

  return (
    <div className="relative pt-2 mb-4">
      <div className="h-2 bg-gray-300 rounded-full">
        <div
          style={{ width: `${progress}%` }}
          className="h-2 bg-blue-500 rounded-full transition-all duration-300"
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
