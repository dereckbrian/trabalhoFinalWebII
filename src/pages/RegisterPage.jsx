import RegisterScreen from "../components/RegisterScreen";
import axios from 'axios'
import api from '../config/axiosInstance';
import { useNavigate } from "react-router-dom"

const RegisterPage = () => {

    const navigate = useNavigate(); 

    const onRegisterClick = (dadosUser) => {
    api.post('register', dadosUser)
        .then(response => {
           console.log("Usuario Registrado: " + JSON.stringify(response.data));
            alert("Cadastro realizado!")

            navigate('/logar?')
        })
        .catch(error => {
            console.error("Ocorreu um erro ao enviar o usuário:", error);
        });
}

    return(
        <div>
        <RegisterScreen onRegisterClick={onRegisterClick}/>
    </div>
    )
};




export default RegisterPage