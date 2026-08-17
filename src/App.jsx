import imagemHeloisa from './assets/imagem_heloisa.png';
import imagem_destelado1 from "./assets/imagem_destelado1.png";
import imagem_destelado2 from "./assets/imagem_destelado2.png";
import imagem_recolabora1 from "./assets/imagem_recolabora1.png";
import imagem_recolabora2 from "./assets/imagem_recolabora2.png";
import imagem_linkedin from "./assets/imagem_linkedin.png";
import imagem_email from "./assets/imagem_email.png";

function App() {
  return (
    <>
      <nav>
        <div>
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </div>
      </nav>

      <section id="inicio">
        <div className="container_imagem">
          <img
            src={imagemHeloisa}
            alt="Heloisa"
            className="imagem_01"
          />
        </div>

        <h1>💻 Portfólio Heloisa Maria Santos Leite</h1>

        <h2>Estudante de Sistemas de Informação @CInUFPE</h2>

        <div className="redes_sociais">
          <a href="mailto:heloisamsleite@gmail.com">
            <img
              src={imagem_email}
              alt="Email"
              className="imagem_contato"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/heloisa-leite/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={imagem_linkedin}
              alt="LinkedIn"
              className="imagem_contato"
            />
          </a>
        </div>
      </section>

      <section id="sobre">
        <h2>😊 Sobre mim</h2>

        <p>
          Meu nome é Heloisa Maria Santos Leite e sou estudante de
          Bacharelado em Sistemas de Informação no Centro de Informática
          da UFPE. Tenho interesse pela área de tecnologia, principalmente
          em desenvolvimento de sistemas, dados e engenharia de dados.
        </p>

        <p>
          Durante minha trajetória acadêmica, venho desenvolvendo projetos
          utilizando Python, SQL, HTML, CSS e outras ferramentas, buscando
          fortalecer tanto meus conhecimentos de programação quanto minha
          capacidade de desenvolver soluções.
        </p>

        <p>
          Atualmente, tenho como objetivo aprofundar meus conhecimentos
          em dados, bancos de dados, Python e computação em nuvem, buscando
          construir uma carreira na área de tecnologia.
        </p>
      </section>

      <section id="projetos">
        <h2>👩🏽‍💻 Projetos</h2>

         <h3>🎲 ETL Recife Emlurb</h3>

        <p>
          Recif-ETL-EMLURB é um projeto de Engenharia de Dados desenvolvido para realizar o processo de ETL (Extract, Transform and Load) a partir do banco de dados abertos da Prefeitura do Recife, com informações da EMLURB relacionadas às demandas de serviços urbanos da cidade. O projeto envolve a extração, tratamento e organização dos dados, permitindo analisar a distribuição das demandas na cidade do Recife.

        </p>

        <p>
          <strong>Objetivo:</strong> transformar dados públicos em informações estruturadas que possam facilitar a análise e a compreensão das demandas de serviços urbanos da cidade.
        </p>

        <p>
          <strong>Repositório:</strong> https://github.com/heloisamariasl/recif-etl-emlurb
        </p>

        <div className="imagem_projeto1">
          <img
            src={imagem_recolabora1}
            alt="Protótipo do ReColabora"
            className="recolabora"
          />

          <img
            src={imagem_recolabora2}
            alt="Interface do ReColabora"
            className="recolabora"
          />
        </div>

        <h3>🚩 ReColabora</h3>

        <p>
          ReColabora é uma ideia desenvolvida para incentivar a ocupação
          dos espaços públicos e fortalecer o senso de comunidade no
          Recife Antigo. O projeto reúne uma agenda colaborativa de
          eventos, recomendações personalizadas e informações sobre
          estabelecimentos locais.
        </p>

        <p>
          <strong>Objetivo:</strong> promover um ambiente mais seguro,
          movimentado e conectado por meio da tecnologia e da participação
          coletiva.
        </p>

        <p>
          Repositório:{" "}
          <a
            href="https://github.com/heloisamariasl/recif-etl-emlurb.git"
            target="_blank"
            rel="noreferrer"
            >
              Recife-ETL-EMLURB
          </a>
        </p>

        <div className="imagem_projeto1">
          <img
            src={imagem_recolabora1}
            alt="Protótipo do ReColabora"
            className="recolabora"
          />

          <img
            src={imagem_recolabora2}
            alt="Interface do ReColabora"
            className="recolabora"
          />
        </div>

        <h3>🐈 Destelado</h3>

        <p>
          Destelado é um jogo de plataforma em duas dimensões (2D) feito
          inteiramente na linguagem Python com o auxílio da biblioteca
          Pygame. No jogo, você comanda um gatinho muito esperto que
          precisa andar e pular pelos telhados da vizinhança.
        </p>

        <p>
          <strong>Objetivo:</strong> recolher itens pelo caminho e chegar
          até sua casa enquanto desvia de obstáculos e escapa de um
          cachorro.
        </p>

        <p>
          <strong>Disciplina:</strong> Introdução à Programação
        </p>

        <div className="imagem_projeto2">
          <img
            src={imagem_destelado1}
            alt="Tela inicial do jogo Destelado"
            className="destelado"
          />

          <img
            src={imagem_destelado2}
            alt="Gameplay do jogo Destelado"
            className="destelado"
          />
        </div>

        <p>
          Repositório:{" "}
          <a
            href="https://github.com/heloisamariasl/Destelado"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </p>
      </section>

      <section>
        <h2>🚀 Tecnologias</h2>

        <p>
          <strong>Linguagens:</strong> Python, SQL, HTML e CSS.
        </p>

        <p>
          <strong>Banco de Dados:</strong> DuckDB.
        </p>

        <p>
          <strong>Ferramentas:</strong> VS Code, Figma e Git/GitHub.
        </p>
      </section>

      <section id="contato">
        <h2>📞 Contato</h2>

        <p>
          <a href="mailto:heloisamsleite@gmail.com">
            Entre em contato pelo email
          </a>
        </p>

        <p>
          <a
            href="https://www.linkedin.com/in/heloisa-leite/"
            target="_blank"
            rel="noreferrer"
          >
            Acesse meu LinkedIn
          </a>
        </p>
      </section>
    </>
  );
}

export default App;