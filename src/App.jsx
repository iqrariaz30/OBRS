import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
// User pages
import MainNavbar from './components/MainNavbar'
import HomePage from './pages/user/HomePage';
import './pages/user/Home.css'
import KeyFeaturesPage from './pages/user/KeyFeaturesPage';
import ServicesPage from './pages/user/ServicesPage';
import PopularRoutesPage from './pages/user/PopularRoutesPage';
import SpecialOffersPage from './pages/user/SpecailOffersPage';
import TestimonialsPage from './pages/user/TestimonialsPage';
import FAQPage from './pages/user/FAQPage';
import BookTicketsPage from './pages/user/BookTicketsPage';
import Footer from './components/Footer';

// Admin pages
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminLogin from './pages/admin/AdminLogin';
import './pages/admin/AdminLogin.css';
import AdminBookings from './pages/admin/AdminBookings';
import './pages/admin/AdminBookings.css';
import AdminRoutes from './pages/admin/AdminRoutes';
import './pages/admin/AdminRoutes.css';
import AdminFleet from './pages/admin/AdminFleet';
import './pages/admin/AdminFleet.css';
import AdminReports from './pages/admin/AdminReports';
import './pages/admin/AdminReports.css';
import AdminSettings from './pages/admin/AdminSettings';
import './pages/admin/AdminSettings.css';

// Layout Components
import UserLayout from './layouts/UserLayout';
import AdminLayout from './layouts/AdminLayout';

const AppRoutes = () => {
  const { isAdminAuthenticated } = useAuth();
  return (
    <>
      <MainNavbar />
      <Routes>
       {/* User Layout */}
      <Route element={<UserLayout />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/book-tickets" element={<BookTicketsPage />} />
      <Route path="/features" element={<KeyFeaturesPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/routes" element={<PopularRoutesPage />} />
      <Route path="/offers" element={<SpecialOffersPage />} />
      <Route path="/testimonials" element={<TestimonialsPage />} />
      <Route path="/faq" element={<FAQPage />} />

       {/*  Admin Layout */}
       <Route path="/admin" element={isAdminAuthenticated ? <AdminLayout /> : <Navigate to="/admin/login" />} />
       <Route path="dashboard" element={<AdminDashboard />} />
       <Route path="bookings" element={<AdminBookings />} />
       <Route path="routes" element={<AdminRoutes />} />
       <Route path="fleet" element={<AdminFleet />} />
       <Route path="reports" element={<AdminReports />} />
       <Route path="settings" element={<AdminSettings />} />

        {/* Admin Login */}
      <Route path="/admin/login" element={<AdminLogin />} />

        {/* 404 Redirect */}
      <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer/>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </Router>
  );
};

export default App;