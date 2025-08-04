// components/SidebarLayoutAdmin.jsx
import React, { useState } from 'react';
import { MenuOutlined } from '@ant-design/icons';
import { Outlet } from 'react-router-dom';
import Navbar from './NavbarAdmin';
const SidebarLayoutAdmin = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  return (
    <div className="flex min-h-screen relative bg-[#4B3C5D]">
      <Navbar
        sidebarVisible={sidebarVisible}
        setSidebarVisible={setSidebarVisible}
      />

      <div
        className={`flex-1 p-9 transition-all duration-300 overflow-y-auto bg-slate-900 ${
          sidebarVisible ? 'ml-[200px]' : 'ml-0'
        }`}
      >
        <div className="flex items-center mb-8 ">
          {!sidebarVisible && (
            <button
              className="text-white text-2xl mr-4 bg-slate-900"
              onClick={() => setSidebarVisible(true)}
            >
              <MenuOutlined />
            </button>
          )}
        </div>

        {/* Onde o conteúdo da rota será renderizado */}
        <Outlet />
      </div>
    </div>
  );
};

export default SidebarLayoutAdmin;
