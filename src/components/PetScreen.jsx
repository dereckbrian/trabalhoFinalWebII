import Navbar from "./Navbar"
import { MailOutlined, GithubOutlined, LockOutlined, UserOutlined, BellOutlined, MenuOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from 'jwt-decode';

const IconCard = ({ title, icon, onClick }) => (
  <div className="flex flex-col items-center justify-center p-4 bg-slate-800 rounded-lg shadow-md hover:bg-slate-700 transition-colors duration-200 cursor-pointer"
    onClick={onClick}
  >
    <div className="text-white text-3xl mb-2">{icon}</div>
    <span className="text-white text-sm">{title}</span>
  </div>
);

const MainCardsSection = ({ navigate }) => (

  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
    <IconCard title="Pacotes" icon={<MailOutlined />} onClick={() => navigate('/userPage/pacotes')} />
    <IconCard title="Pets" icon={<GithubOutlined />} nClick={() => navigate('/pets')} />
    <IconCard title="Configurações de Conta" icon={<LockOutlined />} nClick={() => navigate('/configs')} />
    <IconCard title="Meus Pets" icon={<UserOutlined />} nClick={() => navigate('/meusPets')} />
    <IconCard title="Avisos" icon={<BellOutlined />} nClick={() => navigate('/avisos')} />
  </div>
);
function PetScreen() {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const navigate = useNavigate();

  const [pets, setPets] = useState([]);
  const TokenSaved = localStorage.getItem('token'); // Pega o token JWT do localStorage
  const decodedToken = jwtDecode(TokenSaved);
  const role = decodedToken.role;
  let showButton = false;
  if (role === "ADMIN") {
    showButton = true;
  }
  // Pega os pets do backend
  useEffect(() => {
    const fetchPets = async () => {
      try {
        // Recupera o token JWT do localStorage
        const token = JSON.parse(localStorage.getItem('token') || '""');

        if (!token) {
          console.error("Token não encontrado");
          return;
        }

        // Faz a requisição para o backend com o token no cabeçalho
        const response = await axios.get("http://localhost:8080/admin/pets/all", {
          headers: {
            Authorization: `Bearer ${token}`, // Envia o token JWT no cabeçalho
          }
        });

        // Atualiza o estado com os dados dos pets
        console.log(response.data);
        setPets(response.data);

      } catch (error) {
        console.error("Erro ao buscar pets:", error.response ? error.response.data : error.message);
      }
    };

    fetchPets();
  }, []);
  return (

    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
      
        <h2 className="text-xl font-semibold text-gray-700 mb-6">Lista de Pets</h2>

        <ul className="space-y-4">
          {pets.map(pet => (

            <li key={pet.id} className="bg-gray-50 p-4 rounded-lg shadow-sm hover:bg-gray-100 transition">
              {/* Exibe a imagem */}
              <img src={`http://localhost:8080${pet.imagem}`} alt={`Foto de ${pet.nome}`} className="w-32 h-32 object-cover rounded-md mb-4" />
              <p className="text-gray-800 font-semibold">Nome: <span className="font-normal">{pet.nome}</span></p>
              <p className="text-gray-800 font-semibold">Raça: <span className="font-normal">{pet.raca}</span></p>
              <p className="text-gray-800 font-semibold">Tamanho: <span className="font-normal">{pet.tamanho}</span></p>
              <p className="text-gray-800 font-semibold">Cor: <span className="font-normal">{pet.cor}</span></p>
              <p className="text-gray-800 font-semibold">Dono: <span className="font-normal">{pet.dono?.name || 'Sem dono'}</span></p>
              {showButton && (
                <button
                  onClick={() => { navigate(`/adminPage/pets/${pet.id}`) }}
                  className="text-blue-600 hover:text-blue-800"
                >
                  Ver detalhes
                </button>
              )}

            </li>
          ))}

        </ul>

        <div className="mt-6 flex justify-center">
          <button
            onClick={() => navigate(-1)}
            className="bg-gray-400 text-white px-6 py-3 rounded-md hover:bg-gray-600 transition"
          >
            Voltar
          </button>

          {showButton && (
            <button
              onClick={() => navigate('/adminPage/pets-add')}
              className="bg-purple-900 text-white px-6 py-3 rounded-md hover:bg-gray-600 transition ml-2"
            >
              Adicionar
            </button>
          )}

        </div>
      </div>
    </div>



  )
}

export default PetScreen