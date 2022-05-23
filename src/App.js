import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/Login/SignUp';
import Purchase from './pages/Purchase/Purchase';
import Navbar from './pages/Shared/Navbar';
import ProtractedRoute from './pages/Shared/ProtractedRoute';

function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/signup' element={<SignUp></SignUp>}></Route>
       <Route path='/purchase' element={<ProtractedRoute><Purchase></Purchase></ProtractedRoute>}></Route>
     </Routes>
    </div>
  );
}

export default App;
