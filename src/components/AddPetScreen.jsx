import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddPetPage = () => {
  const [nome, setNome] = useState("");
  const [raca, setRaca] = useState("");
  const [tamanho, setTamanho] = useState("");
  const [cor, setCor] = useState("");
  const [donoId, setDonoId] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = JSON.parse(localStorage.getItem('token') || '""');
      if (!token) {
        setError("Token não encontrado. Faça login.");
        return;
      }

      const petData = {
        nome,
        raca,
        tamanho,
        cor,
        dono: {
          id: donoId,
        },
      };

      const response = await axios.post("http://localhost:8080/admin/pets/add", petData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        alert("Pet adicionado com sucesso!");
        navigate("/pets");  // Redireciona para a lista de pets após adicionar
      }
    } catch (error) {
      setError("Erro ao adicionar pet. Tente novamente.");
      console.error("Erro ao adicionar pet:", error);
    }
  };

  return (
    <div className="bg-gray-800 min-h-screen p-8">
      <div className="max-w-lg mx-auto bg-gray-900 p-6 rounded-lg shadow-xl">
        <h1 className="text-3xl font-bold text-white mb-6">Adicionar Pet</h1>
        
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="nome" className="text-white">Nome</label>
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="w-full p-2 mt-2 bg-gray-700 text-white rounded-md"
              placeholder="Digite o nome do pet"
              required
            />
          </div>

          <div>
            <label htmlFor="raca" className="text-white">Raça</label>
            <input
              type="text"
              id="raca"
              value={raca}
              onChange={(e) => setRaca(e.target.value)}
              className="w-full p-2 mt-2 bg-gray-700 text-white rounded-md"
              placeholder="Digite a raça do pet"
              required
            />
          </div>

          <div>
            <label htmlFor="tamanho" className="text-white">Tamanho</label>
            <input
              type="text"
              id="tamanho"
              value={tamanho}
              onChange={(e) => setTamanho(e.target.value)}
              className="w-full p-2 mt-2 bg-gray-700 text-white rounded-md"
              placeholder="Digite o tamanho do pet"
              required
            />
          </div>

          <div>
            <label htmlFor="cor" className="text-white">Cor</label>
            <input
              type="text"
              id="cor"
              value={cor}
              onChange={(e) => setCor(e.target.value)}
              className="w-full p-2 mt-2 bg-gray-700 text-white rounded-md"
              placeholder="Digite a cor do pet"
              required
            />
          </div>

          <div>
            <label htmlFor="donoId" className="text-white">ID do Dono</label>
            <input
              type="text"
              id="donoId"
              value={donoId}
              onChange={(e) => setDonoId(e.target.value)}
              className="w-full p-2 mt-2 bg-gray-700 text-white rounded-md"
              placeholder="Digite o ID do dono"
              required
            />
          </div>

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Adicionar Pet
            </button>
          </div>
        </form>

        <div className="mt-6 flex justify-center">
          <button
            onClick={() => navigate("/pets")}
            className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPetPage;
