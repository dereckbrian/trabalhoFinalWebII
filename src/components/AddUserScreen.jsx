import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUserPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("USER"); // Default é USER
  const [password, setPassword] = useState(""); // Para senha do usuário
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = JSON.parse(localStorage.getItem("token") || '""');
      if (!token) {
        setError("Token não encontrado. Faça login.");
        return;
      }

      const userData = {
        name,
        email,
        role,
        password,
      };

      const response = await axios.post("http://localhost:8080/admin/users/add", userData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        alert("Usuário adicionado com sucesso!");
        navigate("/adminPage/users");  // Redireciona para a lista de usuários após adicionar
      }
    } catch (error) {
      setError("Erro ao adicionar usuário. Tente novamente.");
      console.error("Erro ao adicionar usuário:", error);
    }
  };

  return (
    <div className="bg-gray-800 min-h-screen p-8">
      <div className="max-w-lg mx-auto bg-gray-900 p-6 rounded-lg shadow-xl">
        <h1 className="text-3xl font-bold text-white mb-6">Adicionar Usuário</h1>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="text-white">Nome</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 mt-2 bg-gray-700 text-white rounded-md"
              placeholder="Digite o nome do usuário"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="text-white">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 mt-2 bg-gray-700 text-white rounded-md"
              placeholder="Digite o email do usuário"
              required
            />
          </div>

          <div>
            <label htmlFor="role" className="text-white">Função</label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full p-2 mt-2 bg-gray-700 text-white rounded-md"
              required
            >
              <option value="USER">USER</option>
              <option value="ADMIN">ADMIN</option>
            </select>
          </div>

          <div>
            <label htmlFor="password" className="text-white">Senha</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 mt-2 bg-gray-700 text-white rounded-md"
              placeholder="Digite a senha do usuário"
              required
            />
          </div>

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Adicionar Usuário
            </button>
          </div>
        </form>

        <div className="mt-6 flex justify-center">
          <button
            onClick={() => navigate(-1)}
            className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddUserPage;
