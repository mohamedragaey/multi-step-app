import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 p-4">
        <div className="max-w-xl mx-auto bg-white shadow-md p-6 rounded-xl">
          <AppRoutes />
        </div>
      </div>
    </Router>
  );
};

export default App;
