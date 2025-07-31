import { Navigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
const PrivateRoute = ({ element }) => {
  const token = localStorage.getItem('token'); // Pega o token JWT do localStorage

  if (!token) {
    return <Navigate to="/logar" />; // Se não houver token, redireciona para o login
  }

  try {
    // Decodifica o token
    const decodedToken = jwtDecode(token);
    
    // Verifica se o token está expirado
    const currentTime = Date.now() / 1000; // Tempo atual em segundos
    if (decodedToken.exp < currentTime) {
      // Se o token estiver expirado, remove o token e redireciona para o login
      localStorage.removeItem('token');
      return <Navigate to="/logar" />;
    }

    // Se o token for válido, renderiza o elemento protegido
    return element;
  } catch (error) {
    // Se o token for inválido ou não puder ser decodificado, remove o token e redireciona para o login
    localStorage.removeItem('token');
    return <Navigate to="/logar" />;
  }
};

export default PrivateRoute;
