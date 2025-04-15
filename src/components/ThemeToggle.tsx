import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { toggleTheme } from '../features/theme/themeSlice';

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.mode);

  // Toggle the theme
  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <button
      onClick={handleThemeToggle}
      className="mb-4 p-2 bg-blue-500 text-white rounded"
    >
      Toggle Theme ({theme === 'light' ? 'Light' : 'Dark'} Mode)
    </button>
  );
};

export default ThemeToggle;
