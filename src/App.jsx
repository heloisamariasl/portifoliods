import imagemHeloisa from './assets/imagem_heloisa.png';
import imagem_destelado1 from "./assets/imagem_destelado1.png";
import imagem_destelado2 from "./assets/imagem_destelado2.png";
import imagem_recolabora1 from "./assets/imagem_recolabora1.png";
import imagem_recolabora2 from "./assets/imagem_recolabora2.png";

function App() {
  return (
    <>
      <div className="container_imagem">
        <img src={imagemHeloisa} alt="Heloisa" className="imagem_01"/>
      </div>
      <h1>💻 Portfólio Heloisa Leite</h1>
      <h2>Estudante de Sistemas de Informação @CInUFPE</h2>
      <p>
        Olá! Meu nome é Heloisa Leite, sou estudante de Sistemas de Informação no CIn/UFPE. Sou uma Engnheira de dados em progresso. Neste portfólio, você encontrará informações sobre meus projetos, habilidades e experiências. Sinta-se à vontade para explorar e conhecer mais sobre mim!
      </p>
      <h2>👩🏽‍💻 Projetos</h2>
      <h3>🚩 Recolabora</h3>
      <p>ReColabora é uma ideia desenvolvida para incentivar a ocupação dos espaços públicos e fortalecer o senso de comunidade no Recife Antigo. O projeto reúne uma agenda colaborativa de eventos, recomendações personalizadas e informações sobre estabelecimentos locais, facilitando que moradores e visitantes descubram atividades de acordo com seus interesses. A proposta busca promover um ambiente mais seguro, movimentado e conectado por meio da tecnologia e da participação coletiva.</p>
      <div className="imagem_projeto1">
        <img src={imagem_recolabora1} alt = "recolabora" className = "recolabora"/>
        <img src={imagem_recolabora2} alt = "recolabora" className = "recolabora"/>
       
      </div>

      <h3>🐈 Destelado</h3>
      <p>Destelado é um jogo de plataforma em duas dimensões (2D) feito inteiramente na linguagem Python com o auxílio da biblioteca Pygame. No jogo, você comanda um gatinho muito esperto que precisa andar e pular pelos telhados da vizinhança. O seu objetivo é recolher itens pelo caminho e chegar inteiro até a sua casinha, tudo isso enquanto desvia de buracos e escapa de um cachorro bravo que corre atrás de você.</p>
      <div className = "imagem_projeto2">
        <img src={imagem_destelado1} alt="destelado" className="destelado"/>
        <img src={imagem_destelado2} alt="destelado" className="destelado"/>
      </div>

      <h2>🚀 Tecnologias</h2>

      <p>
        <strong>Linguagens:</strong> Python, SQL, HTML e CSS.
      </p>

      <p>
        <strong>Banco de Dados:</strong> DuckDB.
      </p>
      <h2>📞 Contato</h2>
      <p>
        <strong>Ferramentas:</strong> VS Code, Figma e Git/GitHub.
      </p>
       <a href="mailto:heloisamsleite@gmail.com">Entre em contato pelo email</a><br/>

       <a href="https://www.linkedin.com/in/heloisa-leite/" target="_blank" rel="noreferrer">Acesse meu LinkedIn</a>
    </>
  );
}

export default App;