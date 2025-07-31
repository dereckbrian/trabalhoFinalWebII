import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remover o token do localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('name');  // Opcionalmente remova o nome também

    // Redirecionar para a página de login
    navigate('/logar');
  };

  return (
     <button 
      onClick={handleLogout}
      className="mt-5 px-6 py-2 rounded-xl text-lg text-white bg-[#FF6347] hover:bg-[#FF4500] transition duration-300 focus:outline-none"
    >
      Logout
    </button>
  );
};

export default Logout;
