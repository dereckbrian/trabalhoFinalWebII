import Navbar from "./Navbar"
import { useState } from 'react';
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
    <IconCard title="Pets" icon={<GithubOutlined />} nClick={() => navigate('/pets')} />
    <IconCard title="Configurações de Conta" icon={<LockOutlined />} nClick={() => navigate('/configs')} />
    <IconCard title="Meus Pets" icon={<UserOutlined />} nClick={() => navigate('/meusPets')} />
    <IconCard title="Avisos" icon={<BellOutlined />} nClick={() => navigate('/avisos')} />
  </div>
);
function PetScreen() {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const navigate = useNavigate();
  return (
    <div >
      <div className="">
        <h1 className="text-white">Teste da pagina de Pets</h1>
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Voltar
        </button>
      </div>
    </div>


  )
}

export default PetScreen