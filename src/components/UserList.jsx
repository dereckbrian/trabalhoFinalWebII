  import React, { useEffect, useState } from "react";
  import axios from "axios";
  import { Link } from "react-router-dom"; // Para navegação
  import { useNavigate } from "react-router-dom";
  const UserList = () => {
    const [users, setUsers] = useState([]);
      const navigate = useNavigate();
    // Carregar os usuários ao montar o componente
    useEffect(() => {
      const fetchUsers = async () => {
        
        const token = JSON.parse(localStorage.getItem('token') || '""');
  if (!token) {
    console.warn("Token não encontrado. Redirecionando para login...");
    window.location.href = "/logar"; // ou use navigate("/logar")
    return;
  }
        try {
          const response = await axios.get("http://localhost:8080/admin/users", {
            headers: {
              Authorization: `Bearer ${token}`, // Envia o token JWT no cabeçalho
            },
          });
          setUsers(response.data); // Atualiza o estado com os dados dos usuários
        } catch (error) {
          console.error("Erro ao buscar usuários", error);
        }
      };

      fetchUsers();
    }, []);

    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-6">Lista de Usuários</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="py-3 px-4 border-b">Nome</th>
              <th className="py-3 px-4 border-b">Email</th>
              <th className="py-3 px-4 border-b">Role</th>
              <th className="py-3 px-4 border-b">Ações</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center py-3">Nenhum usuário encontrado</td>
              </tr>
            ) : (
              users.map((user) => (
                <tr key={user.id}>
                  <td className="py-3 px-4 border-b">{user.name}</td>
                  <td className="py-3 px-4 border-b">{user.email}</td>
                  <td className="py-3 px-4 border-b">{user.role}</td>
                  <td className="py-3 px-4 border-b">
                    <button
                      onClick={()=>{navigate(`/adminPage/users/${user.id}`)}}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      Ver detalhes
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    );
  };

  export default UserList;
