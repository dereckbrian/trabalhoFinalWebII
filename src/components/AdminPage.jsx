import React from "react";
import { Link, Outlet } from "react-router-dom"; // Outlet é onde o conteúdo dinâmico será renderizado

const AdminPage = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-blue-800 text-white p-5 space-y-6">
        <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
        <ul>
          <li className="mt-4">
            <Link to="/admin" className="hover:text-gray-300">Dashboard</Link>
          </li>
          <li className="mt-4">
            <Link to="/admin/users" className="hover:text-gray-300">Users</Link>
          </li>
          <li className="mt-4">
            <Link to="/admin/settings" className="hover:text-gray-300">Settings</Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* O Outlet será substituído pelo conteúdo da rota */}
        <Outlet />
      </div>
    </div>
  );
};

export default AdminPage;
