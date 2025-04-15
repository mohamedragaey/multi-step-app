import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../features/theme/themeSlice';
import { RootState } from '../store/store';

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.mode);

  // Toggle the theme
  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className="flex items-center mb-4">
      <span className="mr-2 text-sm text-gray-600 dark:text-gray-300">
        {theme === 'light' ? 'Light Mode' : 'Dark Mode'}
      </span>
      <div
        onClick={handleThemeToggle}
        className="relative inline-block w-12 h-6 bg-gray-300 dark:bg-gray-700 rounded-full cursor-pointer"
      >
        <span
          className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ease-in-out transform ${theme === 'light' ? 'translate-x-0' : 'translate-x-6'
            }`}
        />
      </div>
    </div>
  );
};

export default ThemeToggle;
