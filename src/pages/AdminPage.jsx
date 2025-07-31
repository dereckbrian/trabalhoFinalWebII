import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserScreen from "../components/UserScreen";
import Navbar from "../components/Navbar";
import AdminScreen from '../components/AdminScreen';
function UserPage() {
    const [userName, setUserName] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        
        if (!token) {
            navigate('/logar'); // Se não houver token, redireciona para login
        } else {
            const name = localStorage.getItem('name');
            if (name) {
                setUserName(name); // Define o nome do usuário caso esteja disponível
            } else {
                setUserName('Usuário desconhecido'); // Valor padrão
            }
        }
    }, [navigate]);

    return (
        <div>
            
            <AdminScreen />
        </div>
    );
}

export default UserPage;
