import LoginScreen from "../components/LoginScreen";
import api from '../config/axiosInstance';
import { useNavigate } from "react-router-dom"
import { jwtDecode } from 'jwt-decode';
const LoginPage = () => {
    const navigate = useNavigate();

    const onLoginClick = (dadosLogin) => {
        api.post('/login', {
            email: dadosLogin.email,
            password: dadosLogin.password
        })
        .then(response => {
            const token = JSON.stringify(response.data.token);
            const name = JSON.stringify(response.data.name);
            console.log("Token JWT recebido", token);
            localStorage.setItem('token', token);
            localStorage.setItem('name', name);

            navigate('/userPage'); // Redireciona para a página do usuário
        })
        .catch(error => {
            console.error("Erro ao logar: ", error);
            alert("Email ou senha incorretos");
        });
    };
    const token = localStorage.getItem('token'); // Pega o token JWT do localStorage

if (token) {
  // Decodifica o token
  const decodedToken = jwtDecode(token);
  console.log(decodedToken);  // Exibe todo o conteúdo do token no console

  // Verifica a role do usuário
  const role = decodedToken.role;
  console.log("Role do usuário:", role); // Exibe a role no console

  // Verifica a expiração do token
  const currentTime = Date.now() / 1000; // Tempo atual em segundos
  if (decodedToken.exp < currentTime) {
    console.log("O token está expirado");
  }
} else {
  console.log("Token não encontrado no localStorage");
}
    return (
        <div>
            <LoginScreen onLoginClick={onLoginClick} />
        </div>
    );
};
export default LoginPage;