import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminNavbar from '../admin/AdminNavbar';

const AdminLayout = () => {
  return (
    <>
      <AdminNavbar />
      <div className="admin-container">
        <Outlet />
      </div>
    </>
  );
};

export default AdminLayout;