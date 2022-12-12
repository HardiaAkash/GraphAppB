import logo from './logo.svg';
import './App.css';
import { GraphA } from './Component/GraphA';
import { BrowserRouter as Router, Route, Routes, Outlet, useLocation } from 'react-router-dom';
import Navbar from './Component/Navbar';
import { GraphB } from './Component/GraphB';
import { GraphC } from './Component/GraphC';
import { GraphD } from './Component/GraphD';
import { GraphE } from './Component/GraphE';
import { GraphF } from './Component/GraphF';
function App() {
  return (
   <>
   <Navbar/>
   <Routes>
    <Route path='/' element={<GraphA/>}/>
    <Route path='/graphB' element={<GraphB/>}/>
    <Route path='/graphC' element={<GraphC/>}/>
    <Route path='/graphD' element={<GraphD/>}/>
    <Route path='/graphE' element={<GraphE/>}/>
    <Route path='/graphF' element={<GraphF/>}/>
   </Routes>
   
   </>
  );
}

export default App;
