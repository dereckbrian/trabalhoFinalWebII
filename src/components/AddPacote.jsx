    import React, { useState, useEffect } from "react";
    import axios from "axios";
    import { useNavigate } from "react-router-dom";

    const AddPackagePage = () => {
    const [nome, setNome] = useState("");
    const [data, setData] = useState("");
    const [destinatario, setDestinatario] = useState("");
    const [remetente, setRemetente] = useState("");
    const [codigoRastreio, setCodigoRastreio] = useState("");
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

        const packageData = {
            nome,
            data,
            destinatario,
            remetente,
            codigoRastreio
        };

        const response = await axios.post("http://localhost:8080/packages/add", packageData, {
            headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            },
        });

        if (response.status === 200) {
            alert("Pacote adicionado com sucesso!");
            navigate(-1); // Navega para a página de pacotes após o sucesso
        }
        } catch (error) {
        setError("Erro ao adicionar pacote. Tente novamente.");
        console.error("Erro ao adicionar pacote:", error);
        }
    };

    return (
        <div className="bg-gray-800 min-h-screen p-8">
        <div className="max-w-lg mx-auto bg-gray-900 p-6 rounded-lg shadow-xl">
            <h1 className="text-3xl font-bold text-white mb-6">Adicionar Pacote</h1>

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
                placeholder="Digite o nome do pacote"
                required
                />
            </div>

            <div>
                <label htmlFor="data" className="text-white">Data</label>
                <input
                type="date"
                id="data"
                value={data}
                onChange={(e) => setData(e.target.value)}
                className="w-full p-2 mt-2 bg-gray-700 text-white rounded-md"
                required
                />
            </div>

            <div>
                <label htmlFor="destinatario" className="text-white">Destinatário</label>
                <input
                type="text"
                id="destinatario"
                value={destinatario}
                onChange={(e) => setDestinatario(e.target.value)}
                className="w-full p-2 mt-2 bg-gray-700 text-white rounded-md"
                placeholder="Digite o nome do destinatário"
                required
                />
            </div>

            <div>
                <label htmlFor="remetente" className="text-white">Remetente</label>
                <input
                type="text"
                id="remetente"
                value={remetente}
                onChange={(e) => setRemetente(e.target.value)}
                className="w-full p-2 mt-2 bg-gray-700 text-white rounded-md"
                placeholder="Digite o nome do remetente"
                required
                />
            </div>

            <div>
                <label htmlFor="codigoRastreio" className="text-white">Código de Rastreio</label>
                <input
                type="text"
                id="codigoRastreio"
                value={codigoRastreio}
                onChange={(e) => setCodigoRastreio(e.target.value)}
                className="w-full p-2 mt-2 bg-gray-700 text-white rounded-md"
                placeholder="Digite o código de rastreio"
                required
                />
            </div>

            <div className="flex justify-center mt-6">
                <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                Adicionar Pacote
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

    export default AddPackagePage;
