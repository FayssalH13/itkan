import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserHome from './user/pages/UserHome';
import AdminHome from './admin/pages/AdminHome';
import logo from './logo.svg';
import './App.css';


function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/admin" element={<AdminHome />} />
      <Route path="/*" element={<UserHome />} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
