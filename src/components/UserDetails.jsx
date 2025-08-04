import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UserDetails = () => {
  const { id } = useParams(); // Pega o ID da URL
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token")?.replace(/"/g, "");
    if (!token) {
      navigate("/logar");
      return;
    }

    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/admin/users/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
      } catch (error) {
        console.error("Erro ao buscar detalhes do usuário:", error);
        alert("Erro ao carregar detalhes do usuário");
      }
    };

    fetchUser();
  }, [id, navigate]);

  if (!user) {
    return <div className="p-6">Carregando...</div>;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold mb-4">Detalhes do Usuário</h2>
      <p><strong>ID:</strong> {user.id}</p>
      <p><strong>Nome:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Função:</strong> {user.role}</p>
      <button
        onClick={() => navigate(-1)}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-800"
      >
        Voltar
      </button>
    </div>
  );
};

export default UserDetails;
