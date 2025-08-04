import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UserDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", role: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token")?.replace(/"/g, "");
    if (!token) {
      navigate("/logar");
      return;
    }

    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/admin/users/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(response.data);
        setFormData({
          name: response.data.name,
          email: response.data.email,
          role: response.data.role,
        });
        setLoading(false);
      } catch (error) {
        console.error("Erro ao carregar usuário:", error);
        alert("Usuário não encontrado.");
      }
    };

    fetchUser();
  }, [id, navigate]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSave = async () => {
    const token = localStorage.getItem("token")?.replace(/"/g, "");
    try {
      await axios.put(`http://localhost:8080/admin/users/${id}`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Usuário atualizado com sucesso!");
    } catch (error) {
      console.error("Erro ao atualizar usuário:", error);
      alert("Erro ao salvar alterações.");
      console.log("erro ao atualizar usuario", error.response?.data || error.message);
      console.error("Erro ao atualizar usuário:", error.response?.data || error.message);

    }
  };

  if (loading) return <p className="p-6">Carregando...</p>;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Editar Usuário</h2>

      <label className="block mb-2">Nome:</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-4"
      />

      <label className="block mb-2">Email:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-4"
      />

      <label className="block mb-2">Função:</label>
      <select
        name="role"
        value={formData.role}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-4"
      >
        <option value="ADMIN">ADMIN</option>
        <option value="USER">USER</option>
      </select>

      <div className="flex justify-between">
        <button
          onClick={handleSave}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-800"
        >
          Salvar
        </button>
        <button
          onClick={() => navigate('/adminPage/users')}
          className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Voltar
        </button>
      </div>
    </div>
  );
};

export default UserDetails;
