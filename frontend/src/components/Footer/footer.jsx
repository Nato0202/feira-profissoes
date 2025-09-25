import React from "react";
import "./footer.scss"

export default function Footer() {
  return (
    <footer className="footer">
      <section className="exhibitors">
        <h3>PATROCINADORES:</h3>
        <div className="logos">
          <img id="santanderimg" src="../../../public/images/Santander.png" alt="Santander" />
          <img id="pwiimg" src="/images/Pwi.jpg" alt="PWI Sistemas" />
        </div>
      </section>

      <section className="contact">
        <h3>Contato:</h3>
        <div className="contact-items">
          <div className="contact-item">
            <div className="icon">📞</div>
            <span id="txt">(11) 5067-8029</span>
          </div>
          <div className="contact-item">
            <div className="icon">✉️</div>
            <span id="txt">secretaria@freianastacio.g12.br</span>
          </div>
          <div className="contact-item">
            <div className="icon">💬</div>
            <span id="txt">Fale conosco</span>
          </div>
        </div>
      </section>

      <div className="End">
        <img src="../../../public/images/frei-logo.png" alt="frei-logo" />
      </div>
    </footer>
  );
}
