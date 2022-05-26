import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/Login/SignUp';
import Purchase from './pages/Purchase/Purchase';
import Navbar from './pages/Shared/Navbar';
import ProtractedRoute from './pages/Shared/ProtractedRoute';
import MyOrders from './pages/Dashboard/MyOrders';
import AddReview from './pages/Dashboard/AddReview';
import MyProfile from './pages/Dashboard/MyProfile';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFound from './pages/Shared/NotFound';
import MyPortfolio from './pages/MyPortfolio/MyPortfolio';
import Blogs from './pages/Blogs/Blogs';
import UpdateProfile from './pages/Dashboard/UpdateProfile';
import ManageAllOrders from './pages/Dashboard/ManageAllOrders';
import AddAProduct from './pages/Dashboard/AddAProduct';
import MakeAdmin from './pages/Dashboard/MakeAdmin';
import ManageProducts from './pages/Dashboard/ManageProducts';


function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/blogs' element={<Blogs></Blogs>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/signup' element={<SignUp></SignUp>}></Route>
       <Route path='/updateProfile' element={<UpdateProfile></UpdateProfile>}></Route>
       <Route path='/myprotfolio' element={<MyPortfolio></MyPortfolio>}></Route>
       <Route path='/purchase' element={<ProtractedRoute><Purchase></Purchase></ProtractedRoute>}></Route>
       <Route path='/dashboard' element={<ProtractedRoute><Dashboard></Dashboard></ProtractedRoute>}>
         <Route index element={<MyOrders></MyOrders>}></Route>
         <Route path='review' element={<AddReview></AddReview>}></Route>
         <Route path='profile' element={<MyProfile></MyProfile>}></Route>
         <Route path='manageAllOrders' element={<ManageAllOrders></ManageAllOrders>}></Route>
         <Route path='addAProduct' element={<AddAProduct></AddAProduct>}></Route>
         <Route path='makeAdmin' element={<MakeAdmin></MakeAdmin>}></Route>
         <Route path='manageProducts' element={<ManageProducts></ManageProducts>}></Route>
       </Route>
       <Route path='*' element={<NotFound></NotFound>}></Route>
     </Routes>
     <ToastContainer />
    </div>
  );
}

export default App;
