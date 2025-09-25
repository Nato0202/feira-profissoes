import { useState } from "react";
import "./Search.scss"
import Footer from "../../components/Footer/footer";
import Navbar from "../../components/Navbar/navbar";
import { API_BASE_URL } from "../../config/api.js";

function Search() {
  const [nome, setNome] = useState("");
  const [qrCode, setQrCode] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const res = await fetch(
        `${API_BASE_URL}/api/auth/visitantes/search?nome=${encodeURIComponent(
          nome
        )}&qrCode=${encodeURIComponent(qrCode)}`
      );

      if (!res.ok) throw new Error("Erro na busca");

      const data = await res.json();
      setResults(data);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div>
      <Navbar />
      <main className="search">
        <div className="search-form">
          <h3>Vincular QR Code:</h3>
          <div className="form">
            <input
              id="nome"
              type="text"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <input
              id="qrCode"
              type="text"
              placeholder="QR Code"
              value={qrCode}
              onChange={(e) => setQrCode(e.target.value)}
            />
            <button id="btn-entrar" onClick={handleSearch}>Buscar</button>

            <ul>
              {results.map((v) => (
                <li key={v.id}>
                  {v.nome} - {v.email} - {v.telefone}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Search;
