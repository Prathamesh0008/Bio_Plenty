import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  LoginPage,
  SignupPage,
  ActivationPage,
  HomePage,
  ProductsPage,
  BestSellingPage,
  EventsPage,
  CheckoutPage,
  PaymentPage,
  OrderSuccessPage,
  ProductDetailsPage,
  ProfilePage,
  ShopCreatePage,
  SellerActivationPage,
  ShopLoginPage,
  OrderDetailsPage,
  TrackOrderPage,
} from "./routes/Routes.js";
import {
  ShopDashboardPage,
  ShopCreateProduct,
  ShopAllProducts,
  ShopCreateEvents,
  ShopAllEvents,
  ShopAllCoupouns,
  ShopPreviewPage,
  ShopAllOrders,
  ShopOrderDetails,
  ShopAllRefunds,
  ShopSettingsPage,
  ShopWithDrawMoneyPage,
  ShopInboxPage,
} from "./routes/ShopRoutes";
import {
  AdminDashboardPage,
  AdminDashboardUsers,
  AdminDashboardSellers,
  AdminDashboardOrders,
  AdminDashboardProducts,
  AdminDashboardEvents,
  AdminDashboardWithdraw,
} from "./routes/AdminRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Store from "./redux/store";
import { loadSeller, loadUser } from "./redux/actions/user";
import ProtectedRoute from "./routes/ProtectedRoute";
import ProtectedAdminRoute from "./routes/ProtectedAdminRoute";
import { ShopHomePage } from "./ShopRoutes.js";
import SellerProtectedRoute from "./routes/SellerProtectedRoute";
import { getAllProducts } from "./redux/actions/product";
import { getAllEvents } from "./redux/actions/event";
import axios from "axios";
import { server } from "./server";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Peptideinfo from "./pages/Peptideinfo/Peptideinfo.jsx";
import Intropeptide from "./pages/Peptideinfo/Intropeptide.jsx";
import Reconstitution from "./pages/Peptideinfo/Reconstitution.jsx";
import Pepstorage from "./pages/Peptideinfo/Pepstorage.jsx";
import Indiampeptide from "./pages/Peptideinfo/Indiampeptide.jsx";
import Peptidebond from "./pages/Peptideinfo/Peptidebond.jsx";
import Intropurity from "./pages/Peptideinfo/Intropurity.jsx";
import Peptpurification from "./pages/Peptideinfo/Peptpurification.jsx";
import Peptidesolubility from "./pages/Peptideinfo/Peptidesolubility.jsx";
import Peptideprotiens from "./pages/Peptideinfo/Peptideprotiens.jsx";
import Peptidesynthesis from "./pages/Peptideinfo/Peptidesynthesis.jsx";
import Peptideresearch from "./pages/Peptideinfo/Peptideresearch.jsx";
import Blog from "./pages/Blogs/Blog.jsx";
import Footer from "./components/Layout/Footer.jsx";
import Notfound from "./pages/Notfound.jsx";
import { ScrollToTopOnMount } from "./pages/Bottomtotop.js";
import Ourcompany from "./pages/Ourcompany/Ourcompany.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Privacypolicy from "./components/Route/Legal/Privacypolicy.jsx";
import Customer from "./components/Route/Legal/Customer.jsx";
import Refunds from "./components/Route/Legal/Refunds.jsx";
import Terms from "./components/Route/Legal/Terms.jsx";
import AllContacts from "./components/Admin/AllContact.jsx";
import AllContact from "./components/Shop/AllContact.jsx";
import AllLatestoffers from "./components/Admin/AllLatestoffers.jsx";
import ReactGA from "react-ga4";
import ShopUpdateProduct from "./pages/Shop/ShopUpdateProduct.jsx";
import ForgotPassword from "./pages/Forgetpassword.js";
import ResetPassword from "./pages/ResetPassword.js";

ReactGA.initialize("G-K9L63MVDTQ");

ReactGA.send({ 
  hitType: "pageview", 
  page: window.location.pathname, 
});
const App = () => {
  const [stripeApikey, setStripeApiKey] = useState("");

  async function getStripeApikey() {
    const { data } = await axios.get(`${server}/payment/stripeapikey`);
    setStripeApiKey(data.stripeApikey);
  }
  useEffect(() => {
    Store.dispatch(loadUser());
    Store.dispatch(loadSeller());
    Store.dispatch(getAllProducts());
    Store.dispatch(getAllEvents());
    getStripeApikey();
  }, []);

  return (
    <BrowserRouter>
      {stripeApikey && (
        <Elements stripe={loadStripe(stripeApikey)}>
          <Routes>
            <Route
              path="/payment"
              element={
                <ProtectedRoute>
                  <PaymentPage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Elements>
      )}
      <ScrollToTopOnMount />
      {/* Navbar Header */}
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route
          path="/activation/:activation_token"
          element={<ActivationPage />}
        />
        <Route
          path="/seller/activation/:activation_token"
          element={<SellerActivationPage />}
        />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="/best-selling" element={<BestSellingPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <CheckoutPage />
            </ProtectedRoute>
          }
        />
        <Route path="/order/success" element={<OrderSuccessPage />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user/order/:id"
          element={
            <ProtectedRoute>
              <OrderDetailsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user/track/order/:id"
          element={
            <ProtectedRoute>
              <TrackOrderPage />
            </ProtectedRoute>
          }
        />
        <Route path="/shop/preview/:id" element={<ShopPreviewPage />} />
        {/* shop Routes */}
        <Route path="/staff-id-create-form" element={<ShopCreatePage />} />
        <Route path="/staff-login" element={<ShopLoginPage />} />
        <Route
          path="/shop/:id"
          element={
            <SellerProtectedRoute>
              <ShopHomePage />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <SellerProtectedRoute>
              <ShopSettingsPage />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <SellerProtectedRoute>
              <ShopDashboardPage />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/dashboard-create-product"
          element={
            <SellerProtectedRoute>
              <ShopCreateProduct />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/dashboard-update-product/:id"
          element={
            <SellerProtectedRoute>
              <ShopUpdateProduct />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/dashboard-orders"
          element={
            <SellerProtectedRoute>
              <ShopAllOrders />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/dashboard-refunds"
          element={
            <SellerProtectedRoute>
              <ShopAllRefunds />
            </SellerProtectedRoute>
          }
        />

        <Route
          path="/order/:id"
          element={
            <SellerProtectedRoute>
              <ShopOrderDetails />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/dashboard-products"
          element={
            <SellerProtectedRoute>
              <ShopAllProducts />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/dashboard-create-event"
          element={
            <SellerProtectedRoute>
              <ShopCreateEvents />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/dashboard-events"
          element={
            <SellerProtectedRoute>
              <ShopAllEvents />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/dashboard-coupouns"
          element={
            <SellerProtectedRoute>
              <ShopAllCoupouns />
            </SellerProtectedRoute>
          }
        />
        {/* <Route
          path="/dashboard-withdraw-money"
          element={
            <SellerProtectedRoute>
              <ShopWithDrawMoneyPage />
            </SellerProtectedRoute>
          }
        /> */}
        <Route
          path="/dashboard-Allcontact"
          element={
            <SellerProtectedRoute>
              <AllContact />
            </SellerProtectedRoute>
          }
        />
        {/* <Route
          path="/dashboard-messages"
          element={
            <SellerProtectedRoute>
              <ShopInboxPage />
            </SellerProtectedRoute>
          }
        /> */}

        {/* Admin Routes */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedAdminRoute>
              <AdminDashboardPage />
            </ProtectedAdminRoute>
          }
        />
        <Route
          path="/admin-users"
          element={
            <ProtectedAdminRoute>
              <AdminDashboardUsers />
            </ProtectedAdminRoute>
          }
        />
        {/* <Route
          path="/admin-sellers"
          element={
            <ProtectedAdminRoute>
              <AdminDashboardSellers />
            </ProtectedAdminRoute>
          }
        /> */}
        <Route
          path="/admin-orders"
          element={
            <ProtectedAdminRoute>
              <AdminDashboardOrders />
            </ProtectedAdminRoute>
          }
        />
        <Route
          path="/admin-products"
          element={
            <ProtectedAdminRoute>
              <AdminDashboardProducts />
            </ProtectedAdminRoute>
          }
        />
        <Route
          path="/admin-events"
          element={
            <ProtectedAdminRoute>
              <AdminDashboardEvents />
            </ProtectedAdminRoute>
          }
        />
        <Route
          path="/admin-contact-us"
          element={
            <ProtectedAdminRoute>
              <AllContacts />
            </ProtectedAdminRoute>
          }
        />
        <Route
          path="/admin-all-latestoffer"
          element={
            <ProtectedAdminRoute>
              <AllLatestoffers />
            </ProtectedAdminRoute>
          }
        />
        {/* <Route
          path="/admin-withdraw-request"
          element={
            <ProtectedAdminRoute>
              <AdminDashboardWithdraw />
            </ProtectedAdminRoute>
          }
        /> */}

        {/* peptide information */}
        <Route path="/pepdite-information" element={<Peptideinfo />} />
        <Route path="/pepdite-information/peptide" element={<Intropeptide />} />
        <Route
          path="/pepdite-information/peptide-reconstitution"
          element={<Reconstitution />}
        />
        <Route
          path="/pepdite-information/peptide-storage"
          element={<Pepstorage />}
        />
        <Route
          path="/pepdite-information/us-made-peptide"
          element={<Indiampeptide />}
        />
        <Route
          path="/pepdite-information/Peptide-bond"
          element={<Peptidebond />}
        />
        <Route
          path="/pepdite-information/Peptide-purity"
          element={<Intropurity />}
        />
        <Route
          path="/pepdite-information/peptide-purification"
          element={<Peptpurification />}
        />
        <Route
          path="/pepdite-information/peptide-solubility"
          element={<Peptidesolubility />}
        />
        <Route
          path="/pepdite-information/peptide-synthesis"
          element={<Peptidesynthesis />}
        />
        <Route
          path="/pepdite-information/peptide-vs-protiens"
          element={<Peptideprotiens />}
        />
        <Route
          path="/pepdite-information/peptide-research"
          element={<Peptideresearch />}
        />

        {/* Blogs connection */}
        <Route path="/blog" element={<Blog />} />

        {/*home page */}
        <Route path="/about-us" element={<Ourcompany />} />
        <Route path="/contact-us" element={<Contact />} />

          {/* Legal */}
        <Route path="/privacy" element={<Privacypolicy />} />
        <Route path="/customer-service" element={<Customer />} />
        <Route path="/refunds" element={<Refunds />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />


          {/* Not found */}
        <Route path="*" element={<Notfound />} />
      </Routes>

      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </BrowserRouter>
  );
};

export default App;
