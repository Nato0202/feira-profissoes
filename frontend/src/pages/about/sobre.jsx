import React from "react";
import Navbar from "../../components/Navbar/navbar.jsx";
import Footer from "../../components/Footer/footer.jsx";
import "./sobre.scss";

function Sobre() {
  return (
    <>
      <Navbar />

      <main className="sobre-container">
        <section className="sobre-header">
          <h3>Sobre a Feira de Profissões:</h3>
          <div className="sobre-info">
            <div className="abu">
                <p><b>Data:</b> 20/05/2025</p>
                <p><b>Dia da Semana:</b> Sábado</p>
              </div>
              <div className="abu2">
                <p><b>Horário:</b> (Manhã) 09h às 12h </p>
                <p><b>Horário:</b> (Tarde) 13h às 16h</p>
              </div>
            <p className="a"><b>Endereço:</b> Av. Coronel Octaviano de Freitas Costa. 463-Socorro São Paulo</p>
          </div>
        </section>

        <section className="sobre-mapa">
          <h2>Mapa:</h2>
          <img src="../../../public/images/mapa-frei.png" alt="mapa-frei" />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Sobre;
