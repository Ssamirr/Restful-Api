import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <>
    <ToastContainer autoClose={2000} />
      <Home />
    </>
  );
}

export default App;
