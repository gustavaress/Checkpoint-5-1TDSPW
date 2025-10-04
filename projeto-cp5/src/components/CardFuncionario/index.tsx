// src/components/CardFuncionario.jsx
import type { Funcionario } from "../../types/funcionarios";

type Props = {
  funcionario: Funcionario;
  onEdit: (funcionario: Funcionario) => void;
  onDelete: (id: string) => void;
};

export default function CardFuncionario({ funcionario, onEdit, onDelete }: Props) {
  return (
    <div className="card-funcionario">
      {/* Cabeçalho: nome + departamento */}
      <div className="card-funcionario-header">
        <div>
          <h3 className="card-funcionario-nome">{funcionario.nome}</h3>
          <p className="card-funcionario-cargo">{funcionario.cargo}</p>
        </div>
        <span className="card-funcionario-badge">
          {funcionario.Setor}
        </span>
      </div>

      {/* Informações */}
      <div className="card-funcionario-info">
        <p className="card-funcionario-info-item">
          <span className="card-funcionario-info-icon">🕒</span> 
          Turno: {funcionario.Turno}
        </p>
        <p className="card-funcionario-info-item">
          <span className="card-funcionario-info-icon">💰</span> 
          Salário:{" "}
          {funcionario.Salário.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </div>

      {/* Ações */}
      <div className="card-funcionario-actions">
        <button
          onClick={() => onEdit(funcionario)}
          className="card-funcionario-btn card-funcionario-btn--edit"
        >
          Editar
        </button>
        <button
          onClick={() => onDelete(funcionario.id)}
          className="card-funcionario-btn card-funcionario-btn--delete"
        >
          Excluir
        </button>
      </div>
    </div>
  );
}