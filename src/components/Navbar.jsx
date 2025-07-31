import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ userName }) => {
  const navigate = useNavigate();

  

  const handleLogout = () => {
    // Remover o token do localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('name');  // Opcionalmente remova o nome também

    // Redirecionar para a página de login
    navigate('/logar');
  };

  return (
    <div className="flex justify-between items-center bg-purple-800 text-white p-4">
      <div className="flex items-center">
        <span className="mr-4 text-lg font-semibold">{userName}</span>
        <button 
          onClick={handleLogout} 
          className="px-4 py-2 bg-white text-purple-700 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition-colors"
        >
          Sair
        </button>
      </div>
    </div>
  );
};

export default Navbar;
