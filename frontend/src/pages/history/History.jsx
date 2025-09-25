import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import "./History.scss";

  function History () {
  return (
  <>
    <Navbar />
      <main className="historia-container">
        <section className="historia-header">
        <div className="historia-card">
              <div className="historia-card-img">
                <img id="historiaimg" src="/images/ISNSF.png" alt="Instituto" />
              </div>
              <div className="historia-card-txt">
                <p>
                  A Ação Social teve seu início em 1970, com a vinda de um frade
                  Franciscano, oriundo da Itália, chamado de Frate 
                  Severino, conhecido carinhosamente no Brasil como Frei 
                  Xavier. Sua primeira obra foi construir uma igreja e integrar a 
                  comunidade em torno dos princípios da fé Católica. Com esse
                  convívio, começaram a brotar ideias, na direção de uma Ação
                  Social Nossa Senhora de Fátima, com o grande objetivo de
                  ajudar os jovens mais carentes na região. A Ação Social,
                  divide-se em vários grupos de atividades, todas no sentido de
                  assistir a comunidade, tendo como pilastra o Ser Humano
                  desde a infância, seguindo com a juventude, na preparação do
                  Caminho para Maioridade (Cidadania).
                </p>
              </div>
            </div>
        </section>

        <section className="historia-fotos">
            <div className="fotos-grid">
              <img className="img-aluno" src="/images/img-aluno-1.png" alt="img-aluno" />
            </div>
        </section>
      </main>

        <Footer />
  </>
)};

   export default History;