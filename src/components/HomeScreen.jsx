import Navbar from "./Navbar"
import { useState, useEffect } from 'react';
import { MailOutlined, GithubOutlined, LockOutlined, UserOutlined, BellOutlined, MenuOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom';



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
    <IconCard title="Pets" icon={<GithubOutlined />} onClick={() => navigate('/userPage/pets')} />
    <IconCard title="Configurações de Conta" icon={<LockOutlined />} onClick={() => navigate('/configs')} />
    <IconCard title="Meus Pets" icon={<UserOutlined />} nClick={() => navigate('/meusPets')} />
    <IconCard title="Avisos" icon={<BellOutlined />} onClick={() => navigate('/userPage/avisos')} />
  </div>
);
function HomeScreen() {
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const navigate = useNavigate();

    const name = JSON.parse(localStorage.getItem('name') || '""');
    const userProfilePicPath = JSON.parse(localStorage.getItem('profilePicture') || '""');

    const defaultProfilePicUrl = "https://i.pravatar.cc/150?img=1";
    
    // Constrói a URL completa da imagem, se o caminho existir
    const profilePicToDisplay = userProfilePicPath 
      ? `http://localhost:8080${userProfilePicPath}` 
      : defaultProfilePicUrl;
    console.log(userProfilePicPath);
    return (
       <div >
            <div className="">
              

                <div className="flex items-center mb-8">
            {/* Botão para abrir a sidebar - visível apenas quando a sidebar está fechada */}

            <div className="flex items-center">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-white mr-4">
                <img src={profilePicToDisplay} alt="User Avatar" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="text-sm text-gray-400">Bem Vindo</div>
                <h2 className="text-2xl font-bold text-white">{name}</h2>
              </div>
            </div>
          </div>    




          {/* Package Pickup Card */}
          <div className="bg-slate-800 p-6 rounded-lg flex justify-between items-center mb-8">
            <div>
              <h3 className="text-xl font-bold text-white">Package Pickup</h3>
              <p className="text-sm text-gray-400">1 Item</p>
              <p className="text-xs text-gray-500">due 06/07/2025</p>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg">
              Pick Up
            </button>
          </div>
            </div>
            
            


            {/* Main Cards Section */}
          <MainCardsSection navigate={navigate} />

          {/* Advertise Section */}
          <div className="mt-8 bg-slate-800 p-6 rounded-lg flex justify-between items-center">
            <div>
              <h3 className="text-xl font-bold text-white">Advertise here</h3>
              <p className="text-sm text-gray-400">Reach more than 10,000 residents</p>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-2xl rounded-full w-10 h-10 flex items-center justify-center">
              +
            </button>
          </div>
        </div>


    )
}

export default HomeScreen