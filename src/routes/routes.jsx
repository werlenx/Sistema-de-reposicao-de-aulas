// Routes.js
import { Route, Routes } from 'react-router-dom'
import Login from '../views/login';
import Home from '../views/home'; 

export default function AppRoutes(){
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
    </Routes>
  );
};
