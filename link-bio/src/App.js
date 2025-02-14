import "./styles.css";
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import DropdownList from "./components/DropdownlList";
import Footer from "./components/Footer";

import Features from "./components/Features"
const linkListData = [
  {
    url: "https://kiwify.app/pEkDkxZ?afid=2ehm21Wa",
    imageUrl: "/assets/pug.jpg",
    alt: "link",
    subtitle: "Ir para a página",
  },
];

function App() {
  return (
    <div className="App">
      <head>
        <title>Receitas para papais e mamães de pet</title>
      </head>

      <header>
        <h1>
          Receitas que milhares de papais e mamães de pet estão utilizando para
         <span className="highlight">VARIAR A ALIMENTAÇÃO</span>de seu gatinho de forma <span className="highlight">FÁCIL</span> e com <span className="highlight">INGREDIENTES BARATOS</span>
        </h1>
      </header>

      <div className="book-covers">
        <img src="https://i.ibb.co/M1rdFzn/covercat.jpg" alt="30 Receitas Saudáveis e Caseiras" />
        <div className="icon-container">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40" height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="plus-icon"
    >
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  </div>
        <img src="https://i.ibb.co/wBcbZY8/covercat-BONUS.jpg" alt="Alimentação Saudável - Bônus" />
      </div>

      <button>SIM! EU QUERO EBOOK DE RECEITAS POR R$19,90</button>

      <Features />

      <ul className="features-list">
        <li>30 receitas caseiras fáceis</li>
        <li>Modo de preparo completo</li>
        <li>Receitas Nutritivas</li>
        <li>Receitas de bolo para pet</li>
        <li>Ingredientes baratos</li>
        <li>Varie a alimentação do seu pet</li>
      </ul>
      <h2 className="bonus">BÔNUS</h2>
      <ul className="features-list">
        <li>Lista de alimentos proibidos
        </li>
        <li>Receitas para gatos obesos</li>
        <li>Receitas para gatos idosos</li>
        <li>Receitas para gatos com alergias atópicas</li>
        <li>Frutas ideais para seu pet</li>
        <li>Dicas nutricionais de alimentação</li>
        <li>Receitas de petiscos saudáveis</li>
      </ul>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="divider">
          <hr />
          <span>🐾</span>
          <hr />
        </div>
        <h2>Leve o Bônus Gratuitamente</h2>
        <button className="cta-button">
          SIM! EU QUERO EBOOK DE RECEITAS POR R$19,90
        </button>

        <h3>
          VEJA OS <span className="highlight">DEPOIMENTOS DE QUEM JÁ COMPROU</span>
        </h3>

        <div className="testimonial-cards">
          <div className="testimonial">
            <div className="testimonial-author">
              <img src="/assets/woman3.jpeg" alt="Rafaela Almeida" />
              <div>
                <h4>Rafaela dos Santos</h4>
                <p>Paraná</p>
                <div className="stars">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
            <p>
              Sempre sofri para fazer meu ShihTzu
              comer a ração porque ele
              ficava enjoado, depois que comprei os ebooks ele nunca mais deu
              trabalho com isso
            </p>
          </div>

          <div className="testimonial">
            <div className="testimonial-author">
              <img src="/assets/woman1.jpeg" alt="Amanda Garcia" />
              <div>
                <h4>Graziela Borba</h4>
                <p>Santa Catarina</p>
                <div className="stars">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
            <p>
              Achei que fosse gastar muito para fazer uma comida saudável para o
              meu filhinho de quatro patas, mas as receitas do ebook são bem
              fáceis de fazer e baratas mesmo. Aprovado!
            </p>
          </div>

          <div className="testimonial">
            <div className="testimonial-author">
              <img src="/assets/woman2.jpeg" alt="Maria Helena" />
              <div>
                <h4>Júlia Helena</h4>
                <p>São Paulo</p>
                <div className="stars">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
            <p>
              Estou gostando muito, ótimas receitas. Agora consigo ter uma
              variedade de receitas para fazer
            </p>
          </div>
        </div>
      </section>

      <section className="promo-section">
        <h2>
          Se você se identificou com pelo menos uma das situações acima,
          <span className="highlight-text">clique no botão abaixo</span> receba
          agora
          <span className="highlight-text">
            o e-book juntamente com o Bônus
          </span>
          em seu E-mail por apenas:
        </h2>

        <div className="books-container">
  <img
    src="https://i.ibb.co/M1rdFzn/covercat.jpg"
    alt="30 Receitas Saudáveis e Caseiras"
    className="book"
  />
  
  <div className="icon-container">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40" height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="plus-icon"
    >
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  </div>

  <img
    src="https://i.ibb.co/wBcbZY8/covercat-BONUS.jpg"
    alt="Alimentação Saudável - Bônus"
    className="book"
  />
</div>


        <div className="price">
          <div className="old-price">De R$59,90 por apenas</div>
          R$19,90
        </div>

        <button className="ctf-button">
          SIM! EU QUERO EBOOK DE RECEITAS POR R$19,90
        </button>

        <Features />

        <p className="footer-text">
          O E-book vai em formato PDF e você poderá visualizar todo o conteúdo
          em seu celular, tablet ou computador.
        </p>
      </section>

      <DropdownList />
      <section className="guarantee-container">
        <div className="badge">
          <div className="badge-circle">
            <div className="badge-content">
                <img src="https://apaixonadosporshihtzu.com/wp-content/uploads/2023/04/7dias-1.png.webp" alt="Badge" className="badge-image"></img>
            </div>
          </div>
        </div>

        <h1 className="heading">Satisfação Garantida e Risco Zero!</h1>

        <p className="guarantee-text">
          Eu acredito tanto que este e-book irá te gerar um ótimo resultado que
          te ofereço uma garantia de 7 dias para você experimentar o conteúdo.
          Se você acreditar que nossas receitas não te ajudaram nem um pouco, se
          não ficar satisfeito com o conteúdo ou se você se arrepender por
          qualquer outro motivo, basta me enviar um e-mail e eu devolvo 100% do
          seu dinheiro. Sem questionamentos e sem burocracia.
        </p>
      </section>
      <Footer />
    </div>
  );
}

export default App;
