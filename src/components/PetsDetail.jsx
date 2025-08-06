import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const PetDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pet, setPet] = useState(null);
  const [formData, setFormData] = useState({
    nome: "",
    raca: "",
    tamanho: "",
    cor: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token")?.replace(/"/g, "");
    if (!token) {
      navigate("/logar");
      return;
    }

    const fetchPet = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/admin/pets/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setPet(response.data);
        setFormData({
          nome: response.data.nome,
          raca: response.data.raca,
          tamanho: response.data.tamanho,
          cor: response.data.cor,
        });
        setLoading(false);
      } catch (error) {
        console.error("Erro ao carregar pet:", error);
        setError("Pet não encontrado.");
        setLoading(false);
      }
    };

    fetchPet();
  }, [id, navigate]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSave = async () => {
    const token = localStorage.getItem("token")?.replace(/"/g, "");
    if (!token) {
      alert("Token não encontrado. Faça login.");
      return;
    }

    try {
      const response = await axios.put(
        `http://localhost:8080/admin/pets/update/${id}`,
        formData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      alert("Pet atualizado com sucesso!");
      navigate(-1);
    } catch (error) {
      console.error("Erro ao salvar pet:", error);
      setError("Erro ao salvar pet.");
    }
  };

  const handleDelete = async () => {
    const token = localStorage.getItem("token")?.replace(/"/g, "");
    if (!token) {
      alert("Token não encontrado. Faça login.");
      return;
    }

    try {
      await axios.delete(`http://localhost:8080/admin/pets/delete/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Pet excluído com sucesso!");
      navigate(-1);  // Redireciona de volta para a lista de pets
    } catch (error) {
      console.error("Erro ao excluir pet:", error);
      alert("Erro ao excluir pet.");
    }
  };

  if (loading) return <p className="p-6">Carregando...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Editar Pet</h2>

      <div className="mb-4">
        <label className="block mb-2">Nome:</label>
        <input
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-4"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Raça:</label>
        <input
          type="text"
          name="raca"
          value={formData.raca}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-4"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Tamanho:</label>
        <input
          type="text"
          name="tamanho"
          value={formData.tamanho}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-4"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Cor:</label>
        <input
          type="text"
          name="cor"
          value={formData.cor}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-4"
        />
      </div>

      <div className="flex justify-between">
        <button
          onClick={handleSave}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-800"
        >
          Salvar
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-800"
        >
          Excluir
        </button>
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Voltar
        </button>
      </div>
    </div>
  );
};

export default PetDetails;
