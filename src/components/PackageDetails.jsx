import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { MailOutlined, CalendarOutlined, UserOutlined, BarcodeOutlined } from '@ant-design/icons';

const PackageDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [packageData, setPackageData] = useState(null);
  const [formData, setFormData] = useState({ 
    nome: "", 
    data: "", 
    destinatario: "", 
    remetente: "", 
    codigoRastreio: "" 
  });
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);


  useEffect(() => {
    const token = localStorage.getItem("token")?.replace(/"/g, "");
    if (!token) {
      navigate("/logar");
      return;
    }

    const fetchPackage = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/packages/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setPackageData(response.data);
        
        // Formata a data para o formato do input (YYYY-MM-DD)
        const formattedDate = formatDateForInput(response.data.data);
        
        setFormData({
          nome: response.data.nome,
          data: formattedDate,
          destinatario: response.data.destinatario,
          remetente: response.data.remetente,
          codigoRastreio: response.data.codigoRastreio
        });
        
        // Simula um status de entrega (em um sistema real, viria do backend)
        
        
        setLoading(false);
      } catch (error) {
        console.error("Erro ao carregar encomenda:", error);
        alert("Encomenda não encontrada.");
      }
    };

    fetchPackage();
  }, [id, navigate]);

  // Função para formatar data para o input (YYYY-MM-DD)
  const formatDateForInput = (dateString) => {
    if (!dateString) return "";
    const parts = dateString.split('/');
    if (parts.length === 3) {
      return `${parts[2]}-${parts[1]}-${parts[0]}`;
    }
    return dateString;
  };

  // Função para formatar data para exibição (DD/MM/YYYY)
  const formatDateForDisplay = (dateString) => {
    if (!dateString) return "";
    const parts = dateString.split('-');
    if (parts.length === 3) {
      return `${parts[2]}/${parts[1]}/${parts[0]}`;
    }
    return dateString;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSave = async () => {
    const token = JSON.parse(localStorage.getItem("token"));
    try {
      // Formata a data para o formato do backend (DD/MM/YYYY)
      const formattedDate = formatDateForDisplay(formData.data);
      
      await axios.put(`http://localhost:8080/packages/update/${id}`, 
        { ...formData, data: formattedDate }, 
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      alert("Encomenda atualizada com sucesso!");
      setIsEditing(false);
      
      // Atualiza os dados exibidos
      setPackageData({
        ...packageData,
        ...formData,
        data: formattedDate
      });
    } catch (error) {
      console.error("Erro ao atualizar encomenda:", error);
      alert("Erro ao salvar alterações.");
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("Tem certeza que deseja excluir esta encomenda?")) return;
    
    const token = JSON.parse(localStorage.getItem("token") | "");
    try {
      await axios.delete(`http://localhost:8080/packages/delete/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Encomenda excluída com sucesso!");
      navigate(-2);
    } catch (error) {
      console.error("Erro ao excluir encomenda:", error);
      alert("Erro ao excluir encomenda.");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-900 mx-auto mb-4"></div>
          <p className="text-gray-700">Carregando informações da encomenda...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-purple-900 text-white p-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold flex items-center">
                <MailOutlined className="mr-2" />
                Detalhes da Encomenda
              </h1>
              <p className="text-purple-200 mt-1">{packageData.nome}</p>
            </div>
            
          </div>
        </div>

        <div className="p-6">
          {isEditing ? (
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Nome da Encomenda</label>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Nome da encomenda"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Data de Recebimento</label>
                  <input
                    type="date"
                    name="data"
                    value={formData.data}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Código de Rastreio</label>
                  <input
                    type="text"
                    name="codigoRastreio"
                    value={formData.codigoRastreio}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Código de rastreio"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Remetente</label>
                  <input
                    type="text"
                    name="remetente"
                    value={formData.remetente}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Remetente"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Destinatário</label>
                  <input
                    type="text"
                    name="destinatario"
                    value={formData.destinatario}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Destinatário"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              <div className="flex items-center justify-center bg-gray-50 p-6 rounded-lg">
                <div className="text-center">
                  <BarcodeOutlined className="text-5xl text-purple-900 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800">Código de Rastreio</h3>
                  <p className="text-2xl font-mono bg-gray-100 p-3 rounded mt-2">{packageData.codigoRastreio}</p>
                  <button 
                    className="mt-4 text-purple-900 hover:text-purple-700 text-sm font-medium"
                    onClick={() => navigator.clipboard.writeText(packageData.codigoRastreio)}
                  >
                    Copiar código
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <CalendarOutlined className="mr-2 text-purple-900" />
                    Informações da Encomenda
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-gray-600">Data de recebimento:</span>
                      <p className="font-medium">{packageData.data}</p>
                    </div>
                    
                  </div>
                </div>

                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <UserOutlined className="mr-2 text-purple-900" />
                    Informações de Entrega
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-gray-600">Remetente:</span>
                      <p className="font-medium">{packageData.remetente}</p>
                    </div>
                    <div>
                      <span className="text-gray-600">Destinatário:</span>
                      <p className="font-medium">{packageData.destinatario}</p>
                    </div>
                  </div>
                </div>
              </div>

              
            </div>
          )}

          <div className="flex flex-wrap gap-3 mt-8 pt-6 border-t border-gray-200">
            {isEditing ? (
              <>
                <button
                  onClick={handleSave}
                  className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition flex-1 min-w-[120px]"
                >
                  Salvar Alterações
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="bg-gray-500 text-white px-5 py-2 rounded-lg hover:bg-gray-600 transition flex-1 min-w-[120px]"
                >
                  Cancelar
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => setIsEditing(true)}
                  className="bg-purple-900 text-white px-5 py-2 rounded-lg hover:bg-purple-800 transition flex-1 min-w-[120px]"
                >
                  Editar Encomenda
                </button>
                <button
                  onClick={handleDelete}
                  className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition flex-1 min-w-[120px]"
                >
                  Excluir Encomenda
                </button>
              </>
            )}
            <button
              onClick={() => navigate(-1)}
              className="bg-gray-400 text-white px-5 py-2 rounded-lg hover:bg-gray-500 transition flex-1 min-w-[120px]"
            >
              Voltar para Lista
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetail;