import React, { useState } from "react";
import Navbar from "../../components/Navbar/navbar.jsx";
import Footer from "../../components/Footer/footer.jsx";
import { API_BASE_URL } from "../../config/api.js";
import "../register/Register.scss";

function Register() {
  const [formData, setFormData] = useState({
    nome: "",
    escolaridade: "",
    interesses: "",
    previsao_chegada: "",
    email: "",
    como_soube: "",
    telefone: "",
    ja_foi_aluno: "0",
    cpf: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/register/visitante`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        alert(`Visitante registrado com sucesso! QR Code: ${data.qrCode}`);
      } else {
        alert("Erro ao registrar visitante");
      }
    } catch (error) {
      alert("Erro de conexão: " + error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <>
      <Navbar />
      <main className="register-container">
        <div className="jojo">
        <p id="h2">Inscrição</p>
        <form className="register-form" onSubmit={handleSubmit}>
          <input 
          className="container"
            type="text" 
            name="nome"
            placeholder="Nome" 
            value={formData.nome}
            onChange={handleChange}
            required 
          />
          <div>
          <select className="container container2" name="escolaridade" value={formData.escolaridade} onChange={handleChange}>
            <option value="">Escolaridade</option>
            <option value="Ensino Fundamental">Ensino Fundamental</option>
            <option value="Ensino Médio">Ensino Médio</option>
            <option value="Ensino Superior">Ensino Superior</option>
          </select>
          </div>
          <div>
            <select className="container container2" name="interesses" value={formData.interesses} onChange={handleChange}>
            <option value="">Interesse em algum curso</option>
            <option value="Administração">Administração</option>
            <option value="Informática">Informática</option>
            <option value="Comunicação visual">Comunicação visual</option>
            <option value="Eletromecânica de autos">Eletromecânica de autos</option>
            <option value="Secretariado">Secretariado</option>
            <option value="Eletrotécnica">Eletrotécnica</option>
            <option value="Eletricista instalador">Eletricista instalador</option>
            <option value="Informática (básica)">Informática (básica)</option>
            <option value="Assistente administrativo">Assistente administrativo</option>
            <option value="Assistente de mídias sociais">Assistente de mídias sociais</option>
            <option value="Inglês">Inglês</option>
          </select>
          </div>
          <div className="previ">
          <input 
          className="container"
            type="text" 
            name="previsao_chegada"
            placeholder="Previsão de chegada à feira" 
            value={formData.previsao_chegada}
            onChange={handleChange}
          />
          </div>
          <div className="ema">
          <input 
          className="container"
            type="email" 
            name="email"
            placeholder="E-mail" 
            value={formData.email}
            onChange={handleChange}
            required 
          />
          </div>
          <div className="como">
          <input 
          className="container"
            type="text" 
            name="como_soube"
            placeholder="Como ficou sabendo da feira?" 
            value={formData.como_soube}
            onChange={handleChange}
          />
          </div>
          <div className="tel">
          <input 
          className="container"
            type="tel" 
            name="telefone"
            placeholder="Telefone" 
            value={formData.telefone}
            onChange={handleChange}
          />
          </div>
          <div className="jafoi">
          <select className="container container2" name="ja_foi_aluno" value={formData.ja_foi_aluno} onChange={handleChange}>
            <option value="0">Já foi aluno do Frei?</option>
            <option value="1">Sim</option>
            <option value="2">Não</option>
          </select>
          </div>
          <div className="cpf">
          <input
          className="container" 
            type="text" 
            name="cpf"
            placeholder="CPF" 
            value={formData.cpf}
            onChange={handleChange}
            required 
          />
          </div>
          <div>
          <button id="increve" type="submit">Inscreva-se</button>
          </div>
        </form>
        </div>
      </main>

      <Footer />
    </>
)};

export default Register;
