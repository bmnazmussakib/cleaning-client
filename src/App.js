import './App.css';
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Home from './components/Home/Home/Home';
import NotFound from './components/NotFound/NotFound';
import ServiceBooking from './components/Order/ServiceBooking/ServiceBooking';
import ServiceBookingList from './components/Order/ServiceBookingList/ServiceBookingList';
import Review from './components/Order/Review/Review';
import OrderList from './components/Admin/OrderList/OrderList';
import MakeAdmin from './components/Admin/MakeAdmin/MakeAdmin';
import ManageServices from './components/Admin/ManageServices/ManageServices';
import AddService from './components/Admin/AddService/AddService';
import Login from './components/Auth/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './components/Auth/PrivateRoute/PrivateRoute';
import AdminLogin from './components/Auth/AdminLogin/AdminLogin';
import PrivateRouteAdmin from './components/Auth/PrivateRouteAdmin/PrivateRouteAdmin';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const UserContext = createContext();
export const AdminContext = createContext();



function App() {

  const [loggedInUser, setLoggedInUser] = useState({});
  const [loggedInAdmin, setLoggedInAdmin] = useState({});


  const providerValue = { login: [loggedInUser, setLoggedInUser], admin: [loggedInAdmin, setLoggedInAdmin] }

  return (
    <UserContext.Provider value={providerValue}>
      <div className="App">

        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" />} />

          {/* ===============User================= */}
          <Route path="review" element={<Review />} />
          {/* <Route path="service-booking" element={<ServiceBooking />} /> */}
          <Route path="service-booking" element={<PrivateRoute><ServiceBooking /></PrivateRoute>} />
          <Route path="service-booking/:service_id" element={<PrivateRoute><ServiceBooking /></PrivateRoute>} />
          <Route path="service-booking-list" element={<ServiceBookingList />} />


          {/* =============Admin============= */}
          <Route path="order-list" element={<OrderList />} />
          <Route path="add-service" element={<PrivateRouteAdmin><AddService /></PrivateRouteAdmin>} />
          <Route path="manage-services/update-service/:id" element={<AddService />} />
          <Route path="make-admin" element={<MakeAdmin />} />
          <Route path="manage-services" element={<ManageServices />} />


          {/* ============= Auth ============= */}
          <Route path="login" element={<Login />} />
          <Route path="admin-login" element={<AdminLogin />} />


          {/* =========Not Found========== */}
          <Route path="*" element={<NotFound />} />

        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
