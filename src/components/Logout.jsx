import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Função de logout
    const handleLogout = () => {
      localStorage.removeItem('token');
      localStorage.removeItem('name');
      navigate('/logar'); // Redireciona
    };

    handleLogout(); // Executa automaticamente ao montar
  }, [navigate]);

  return null; // Não renderiza nada na tela
};

export default Logout;