import { useState } from "react";
import "./Login.scss"
import Footer from "../../components/Footer/footer";
import Navbar from "../../components/Navbar/navbar";
import { API_BASE_URL } from "../../config/api.js";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_BASE_URL}/api/auth/login/aluno`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha: password }),
      });

      if (!res.ok) throw new Error("Erro no login");

      const data = await res.json();
      localStorage.setItem("token", data.token); // guarda JWT
      alert("Login realizado com sucesso!");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
    <Navbar />
      <main className="login">
        <div className="login-form">
          <h3>Login:</h3>
          <form className="form" onSubmit={handleLogin}>
            <input
              id="email"
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              id="password"
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button id="btn-entrar" type="submit">Entrar</button>
          </form>
        </div>
      </main>
    <Footer />
    </>
  );
}

export default Login;
