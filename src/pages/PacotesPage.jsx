import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import api from '../config/axiosInstance';
import PacotesScreen from '../components/PacoteScreen';
function PacotesPage() {

  const token = JSON.parse(localStorage.getItem('token') | "");

   const onAddClick = (dadosPackage) => {
    const token = JSON.parse(localStorage.getItem("token") || '""');
    if (!token) {
      alert("Token de autenticação não encontrado.");
      return;
    }

    api.post("addPackage", dadosPackage, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(res => alert("Sucesso!"))
    .catch(err => {
      console.error(err);
      alert("Erro ao enviar pacote");
    });
  }


  /* const onAddClick = (dadosPackage) => {
    api.post('addPackage', dadosPackage)
        .then(response => {
           console.log("Pacote registrado: " + JSON.stringify(response.data));
            alert("Cadastro realizado!")

            navigate('/logar?')
        })
        .catch(error => {
          alert("Cadastro deu pau!")
            console.error("Ocorreu um erro ao enviar o usuário:", error);
        });
} */
  return (
    <div className="flex-1 p-9 transition-all duration-300  bg-slate-900 overflow-y-auto ml-0">
      <div
        >
         <PacotesScreen onAddClick={onAddClick}/>

        </div>
      </div>
  );
}

export default PacotesPage;