import ProgressBar from '@/components/ProgressBar';
import ThemeToggle from '@/components/ThemeToggle';
import AppRoutes from '@/routes/AppRoutes';
import { RootState } from '@/store/store';
import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  const theme = useSelector((state: RootState) => state.theme.mode);

  // Apply theme class to the body
  React.useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),
    );
  }, [theme]);

  return (
    <Router>
      <section className='w-full max-w-xl mx-auto p-4'>
        <header>
          <ThemeToggle />
        </header>
        <main>
          <ProgressBar />
          <div className=" bg-white dark:bg-shark-100 shadow-md p-6 rounded-xl flex flex-col gap-6">
            <AppRoutes />
          </div>
        </main>
      </section>

    </Router>
  );
};

export default App;
