import { useNavigate } from 'react-router-dom';
import Logout from './Logout';  // Importando corretamente o componente Logout

function UserScreen() {
  const navigate = useNavigate();
  const name = localStorage.getItem('name').replace(/"/g, '');  // Retira as aspas duplas do nome armazenado

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-[#4B3C5D]">
      <div className="w-[95%] h-[95%] flex justify-center items-center space-y-7 p-9 rounded-xl bg-slate-700 drop-shadow-[0px_10px_20px_rgba(0,0,0,0.5)]">
        <h1 className="text-6xl text-white font-semibold">Bem-vindo(a) {name}</h1>

        {/* Aqui, ao clicar no botão, o componente Logout será renderizado e realizará a ação de logout */}
        <Logout/>
      </div>
    </div>
  );
}

export default UserScreen;
