import LoginScreen from "../components/LoginScreen";
import api from '../config/axiosInstance';
import { useNavigate } from "react-router-dom"

const LoginPage = () => {
    const navigate = useNavigate(); 

    const onLoginClick = (dadosLogin) => {
        api.post('/login', {
            email: dadosLogin.email,
            password: dadosLogin.password
        })
        .then(response => {
            const token = JSON.stringify(response.data.token);
            const name = JSON.stringify(response.data.name)
            console.log("Token JWT recebido", token);
            localStorage.setItem('token', token);
            localStorage.setItem('name', name);

            navigate('/userPage'); 
        })
        .catch(error => {
            console.error("Erro ao logar: ", error);
            alert("Email ou senha incorretos")
        });
    };

    return (
        <div>
            <LoginScreen onLoginClick={onLoginClick} />
        </div>
    );
};

export default LoginPage;