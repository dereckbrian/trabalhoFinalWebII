import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MailOutlined, GithubOutlined, LockOutlined, UserOutlined, BellOutlined, MenuOutlined } from '@ant-design/icons';
import styles from "./inputEye.module.css";

// Componente IconCard
const IconCard = ({ title, icon, onClick }) => (
  <div
    className="flex flex-col items-center justify-center p-4 bg-slate-800 rounded-lg shadow-md hover:bg-slate-700 transition-colors duration-200 cursor-pointer"
    onClick={onClick}
  >
    <div className="text-white text-3xl mb-2">{icon}</div>
    <span className="text-white text-sm">{title}</span>
  </div>
);

// Componente principal para gerenciar pacotes
const PacotesScreen = (props) => {
    const [nome, setNome] = useState('');
    const [data, setData] = useState('');
    const [destinatario, setDestinatario] = useState('');
    const [remetente, setRemetente] = useState('');
    const [codigoRastreio, setCodigoRastreio] = useState('');

    const navigate = useNavigate();

    // Função chamada para adicionar um pacote
    const onClickAdd = () => {
        const dadosPackage = new FormData();
        dadosPackage.append('nome', nome);
        dadosPackage.append('data', data);
        dadosPackage.append('destinatario', destinatario);
        dadosPackage.append('remetente', remetente);
        dadosPackage.append('codigoRastreio', codigoRastreio);

        props.onAddClick(dadosPackage); // Passa os dados do pacote para o método do pai
    };

    return (
       <div>
            <div className="">
                <h1 className="text-white">Teste da página de pacote</h1>

                <div className="flex flex-col items-start">
                    <label className={styles.area}>
                        <input
                            type="text"
                            placeholder=""
                            className="w-full p-2 mt-1 rounded-md"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)} // Atualiza o nome
                        />
                        <label className="text-white font-bold">Nome do Pacote</label>
                    </label>
                </div>

                <div className="flex flex-col items-start">
                    <label className={styles.area}>
                        <input
                            type="text"
                            placeholder=""
                            className="w-full p-2 mt-1 rounded-md"
                            value={data}
                            onChange={(e) => setData(e.target.value)} // Corrigido para setData
                        />
                        <label className="text-white font-bold">Data do Pacote</label>
                    </label>
                </div>

                <div className="flex flex-col items-start">
                    <label className={styles.area}>
                        <input
                            type="text"
                            placeholder=""
                            className="w-full p-2 mt-1 rounded-md"
                            value={destinatario}
                            onChange={(e) => setDestinatario(e.target.value)} // Atualiza destinatário
                        />
                        <label className="text-white font-bold">Destinatário</label>
                    </label>
                </div>

                <div className="flex flex-col items-start">
                    <label className={styles.area}>
                        <input
                            type="text"
                            placeholder=""
                            className="w-full p-2 mt-1 rounded-md"
                            value={remetente}
                            onChange={(e) => setRemetente(e.target.value)} // Atualiza remetente
                        />
                        <label className="text-white font-bold">Remetente</label>
                    </label>
                </div>

                <div className="flex flex-col items-start">
                    <label className={styles.area}>
                        <input
                            type="text"
                            placeholder=""
                            className="w-full p-2 mt-1 rounded-md"
                            value={codigoRastreio}
                            onChange={(e) => setCodigoRastreio(e.target.value)} // Atualiza código de rastreio
                        />
                        <label className="text-white font-bold">Código de Rastreio</label>
                    </label>
                </div>

                <button
                    onClick={() => navigate(-1)}
                    className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-600"
                >
                    Voltar
                </button>

                <button
                    onClick={() => onClickAdd()} // Chama a função para adicionar pacote
                    className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-600"
                >
                    Adicionar Pacote
                </button>
            </div>
        </div>
    );
};

export default PacotesScreen;
