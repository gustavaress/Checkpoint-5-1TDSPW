// Se a imagem estiver na pasta 'src', importe-a assim:
import hospitalImage from '../../assets/img/imagem.jpg'; // Ajuste o caminho

export default function Home() {
  return (
    <div className="pagina-home">
      {/* Seção principal com imagem */}
      <section className="home-hero">
        {/* Adição da imagem */}
        <img 
          src={hospitalImage} // <-- Método 1: Usando imagem importada
          // src="/imagens/bem-vindo.jpg" // <-- Método 2: Usando imagem da pasta "public"
          // src="https://exemplo.com/minha-imagem.jpg" // <-- Método 3: Usando imagem da internet
          alt="Ambiente moderno e acolhedor do Hospital das Clínicas"
          className="home-imagem"
        />
        <h1 className="home-titulo">
          Bem-vindo ao Hospital das Clínicas
        </h1>
        <p className="home-subtitulo">
          Sistema de gerenciamento hospitalar para controle de funcionários e informações institucionais.
        </p>
      </section>

      {/* Cards de destaques */}
      <section className="home-cards">
        <div className="home-card">
          <h2 className="home-card-titulo">
            Cuidado Excepcional
          </h2>
          <p className="home-card-descricao">
            Oferecemos atendimento médico de qualidade com uma equipe altamente qualificada,
            sempre focada no bem-estar e na recuperação de nossos pacientes.
          </p>
        </div>

        <div className="home-card">
          <h2 className="home-card-titulo">
            Equipe Especializada
          </h2>
          <p className="home-card-descricao">
            Nossa equipe é composta por profissionais experientes e dedicados ao cuidado do paciente,
            trabalhando com dedicação e competência técnica em todas as áreas de atuação.
          </p>
        </div>

        <div className="home-card">
          <h2 className="home-card-titulo">
            Gestão Eficiente
          </h2>
          <p className="home-card-descricao">
            Utilizamos um sistema moderno para gerenciamento de funcionários e operações hospitalares,
            garantindo eficiência e organização em todos os processos administrativos.
          </p>
        </div>
      </section>
    </div>
  );
}