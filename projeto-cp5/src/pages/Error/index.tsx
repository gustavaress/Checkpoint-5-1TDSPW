// src/components/PaginaErro.jsx
import { Link } from "react-router-dom";

export default function PaginaErro() {
  return (
    <div className="pagina-erro">
      <div className="erro-container">
        <div className="erro-content">
          {/* Ícone/Ilustração */}
          <div className="erro-icon">
            <span>⚠️</span>
          </div>
          
          {/* Código do erro */}
          <h1 className="erro-codigo">404</h1>
          
          {/* Mensagem principal */}
          <h2 className="erro-titulo">Página Não Encontrada</h2>
          
          {/* Descrição */}
          <p className="erro-descricao">
            Oops! A página que você está procurando não existe ou foi movida.
          </p>
          
          {/* Ação */}
          <Link to="/" className="erro-botao">
            Voltar para a Página Inicial
          </Link>
        </div>
      </div>
    </div>
  );
}