import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import { useState } from 'react';
import { MailOutlined, GithubOutlined, LockOutlined, UserOutlined, BellOutlined, MenuOutlined } from '@ant-design/icons';
import SidebarLayout from './SidebarLayout';
//Pegando o nome pra exibir
const name = JSON.parse(localStorage.getItem('name') || '""');
console.log("Nome recuperado:", name);

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

function UserScreen() {
  const navigate = useNavigate();
  const [sidebarVisible, setSidebarVisible] = useState(false);

  return (
     <div className="flex justify-center items-center w-screen h-screen bg-gradient-to-b from-[#4B3C5D] to-[#11051a]">
      <div className="w-[95%] h-[95%] flex flex-col rounded-xl bg-slate-900 drop-shadow-lg relative overflow-hidden ">
        {/* Sidebar Section */}
        <SidebarLayout />

        {/* Main Content Area */}
        <div className="flex flex-col flex-1 p-6 space-y-6">
          <div className="w-full bg-gradient-to-r from-indigo-700 to-indigo-900 rounded-xl p-8 shadow-md hover:shadow-2xl transition-shadow duration-300">
            <MainCardsSection navigate={navigate} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserScreen;