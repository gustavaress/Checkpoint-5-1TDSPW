// src/components/Rodape.jsx
export default function Rodape() {
  return (
    <footer className="rodape">
      <div className="rodape-container">
        <div className="rodape-content">
          {/* Texto principal com melhor hierarquia */}
          <p className="rodape-texto-principal">
            Hospital das Clínicas / FIAP
          </p>
          <p className="rodape-texto-secundario">
            &copy; {new Date().getFullYear()} - Todos os Direitos Reservados
          </p>
          
          {/* Elemento decorativo sutil */}
          <div className="rodape-divisor">
            <div className="rodape-divisor-linha"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}