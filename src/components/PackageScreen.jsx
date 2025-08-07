import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { MailOutlined } from '@ant-design/icons';

const PackageScreen = () => {
  const navigate = useNavigate();
  const [packages, setPackages] = useState([]);

  // Busca os pacotes do backend
  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const token = JSON.parse(localStorage.getItem('token') || '""');
        if (!token) {
          console.error("Token não encontrado");
          return;
        }

        const response = await axios.get("http://localhost:8080/packages/all", {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });

        console.log(response.data);
        setPackages(response.data);
      } catch (error) {
        console.error("Erro ao buscar pacotes:", error.response ? error.response.data : error.message);
      }
    };

    fetchPackages();
  }, []);

  // Formata a data para formato brasileiro
  const formatDate = (dateString) => {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('pt-BR', options);
  };

  return (
    <div className="min-h-screen">
      <div className="bg-slate-800 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center bg-slate-800">
          <h1 className="text-2xl font-bold flex items-center">
            <MailOutlined className="mr-2" /> Encomendas
          </h1>
        </div>
      </div>

      <div className="container mx-auto p-4 bg-gray-900">
        <div className=" p-6 rounded-lg shadow-lg bg-slate-800">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-white">Lista de Encomendas</h2>
            <button
              onClick={() => navigate('/userPage/packages-add')}
              className="bg-purple-900 text-white px-4 py-2 rounded-md hover:bg-purple-800 transition"
            >
              Adicionar Encomenda
            </button>
          </div>

          {packages.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-600">Nenhuma encomenda cadastrada ainda</p>
              <button
                onClick={() => navigate('/userPage/packages-add')}
                className="mt-4 bg-purple-900 text-white px-4 py-2 rounded-md hover:bg-purple-800 transition"
              >
                Adicionar Primeira Encomenda
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {packages.map(pkg => (
                <div 
                  key={pkg.id} 
                  className="bg-slate-800 p-4 rounded-lg shadow-sm hover:bg-slate-700 transition border-l-4 border-white"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-white">{pkg.nome}</h3>
                    <span className="bg-purple-100 text-white-900 text-xs px-2 py-1 rounded">
                      {pkg.codigoRastreio}
                    </span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <span className="font-medium text-white w-24">Data:</span>
                      <span className="text-white">{formatDate(pkg.data)}</span>
                    </div>
                    
                    <div className="flex items-center">
                      <span className="font-medium text-gray-100 w-24">Remetente:</span>
                      <span className="text-white">{pkg.remetente}</span>
                    </div>
                    
                    <div className="flex items-center">
                      <span className="font-medium text-gray-100 w-24">Destinatário:</span>
                      <span className="text-white">{pkg.destinatario}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex justify-end">
                    <button
                      onClick={() => navigate(`/userPage/pacotes/${pkg.id}`)}
                      className="text-purple-700 hover:text-purple-700 text-sm font-medium"
                    >
                      Ver detalhes
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-8 flex justify-center">
            <button
              onClick={() => navigate(-1)}
              className="bg-gray-400 text-white px-6 py-2 rounded-md hover:bg-gray-600 transition"
            >
              Voltar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PackageScreen;