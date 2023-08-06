import './App.css';
import Navbar from './components/Navbar.js';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { AuthContextProvider } from './context/AuthContext';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Account from './pages/Account';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <>
      <AuthContextProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
          <Route path='/account' element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          } />
          
        </Routes>
        <ToastContainer/>
      </AuthContextProvider>
    </>
  );
}

export default App;
