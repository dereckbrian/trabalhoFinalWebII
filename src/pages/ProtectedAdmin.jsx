import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'; // Certifique-se de instalar a biblioteca jwt-decode

const ProtectedAdmin = ({ element }) => {
  const token = localStorage.getItem('token'); // Pega o token JWT do localStorage

  if (!token) {
    return <Navigate to="/logar" />; // Se não houver token, redireciona para o logar
  }

  try {
    // Decodifica o token
    const decodedToken = jwtDecode(token);
    
    // Verifica se o token está expirado
    const currentTime = Date.now() / 1000; // Tempo atual em segundos
    if (decodedToken.exp < currentTime) {
      // Se o token estiver expirado, remove o token e redireciona para o logar
      localStorage.removeItem('token');
      return <Navigate to="/adminPage" />;
    }

    // Verifica se a role é 'admin'
    if (decodedToken.role !== 'ADMIN') {
      // Se não for admin, redireciona para uma página de acesso restrito
      return <Navigate to="/userPage" />;
    }

    // Se o token for válido e o usuário for admin, renderiza o componente protegido
    return element;
  } catch (error) {
    // Se o token for inválido ou não puder ser decodificado, remove o token e redireciona para o logar
    localStorage.removeItem('token');
    return <Navigate to="/logar" />;
  }
};

export default ProtectedAdmin;
