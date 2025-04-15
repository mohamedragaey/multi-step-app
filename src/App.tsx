import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import ProgressBar from './components/ProgressBar';
import ThemeToggle from './components/ThemeToggle';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';

const App = () => {
  const theme = useSelector((state: RootState) => state.theme.mode);

  // Apply theme class to the body
  React.useEffect(() => {
    document.body.className = theme;  // 'light' or 'dark'
  }, [theme]);

  return (
    <Router>
      <div className="max-w-xl mx-auto bg-white shadow-md p-6 rounded-xl">
        <ThemeToggle />
        <ProgressBar />
        <AppRoutes />
      </div>
    </Router>
  );
};

export default App;
