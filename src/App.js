import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home/Home/Home';

import NotFound from './components/NotFound/NotFound';


import ServiceBooking from './components/Order/ServiceBooking/ServiceBooking';
import ServiceBookingList from './components/Order/ServiceBookingList/ServiceBookingList';
import Review from './components/Order/Review/Review';


import OrderList from './components/Admin/OrderList/OrderList';
import MakeAdmin from './components/Admin/MakeAdmin/MakeAdmin';
import ManageServices from './components/Admin/ManageServices/ManageServices';
import AddService from './components/Admin/AddService/AddService';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />

        {/* ===============User================= */}
        <Route path="review" element={<Review />} />
        <Route path="service-booking" element={<ServiceBooking />} />
        <Route path="service-booking-list" element={<ServiceBookingList />} />


        {/* =============Admin============= */}
        <Route path="order-list" element={<OrderList />} />
        <Route path="add-service" element={<AddService />} />
        <Route path="make-admin" element={<MakeAdmin />} />
        <Route path="manage-services" element={<ManageServices />} />


        {/* =========Not Found========== */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
