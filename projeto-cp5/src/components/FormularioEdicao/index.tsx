// src/components/FormularioEdicao.jsx
import { useState, useEffect } from "react";
import type { Funcionario } from "../../types/funcionarios";

type Props = {
  funcionario: Funcionario;
  onSave: (funcionario: Funcionario) => void;
  onCancel: () => void;
};

export default function FormularioEdicao({
  funcionario,
  onSave,
  onCancel,
}: Props) {
  const [formState, setFormState] = useState<Funcionario>(funcionario);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setFormState(funcionario);
  }, [funcionario]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: name === "Salário" ? parseFloat(value) || 0 : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 500));
    
    onSave(formState);
    setIsSubmitting(false);
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        {/* Header */}
        <div className="modal-header">
          <div className="modal-header-content">
            <div className="modal-header-info">
              <div className="modal-icon-wrapper">
                👤
              </div>
              <div>
                <h2 className="modal-title">Editar Funcionário</h2>
                <p className="modal-subtitle">Atualize as informações do colaborador</p>
              </div>
            </div>
            <button
              onClick={onCancel}
              className="modal-close-btn"
            >
              ×
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="form-container">
          <div className="form-grid">
            {/* Nome */}
            <div className="form-field">
              <label className="form-label">
                <span className="form-label-icon">👤</span>
                Nome Completo
              </label>
              <input
                type="text"
                name="nome"
                value={formState.nome}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="Digite o nome completo"
              />
            </div>

            {/* Cargo e Setor */}
            <div className="form-field-grid">
              <div className="form-field">
                <label className="form-label">
                  <span className="form-label-icon">💼</span>
                  Cargo
                </label>
                <input
                  type="text"
                  name="cargo"
                  value={formState.cargo}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Cargo"
                />
              </div>

              <div className="form-field">
                <label className="form-label">
                  <span className="form-label-icon">🏢</span>
                  Setor
                </label>
                <input
                  type="text"
                  name="Setor"
                  value={formState.Setor}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Setor"
                />
              </div>
            </div>

            {/* Turno */}
            <div className="form-field">
              <label className="form-label">
                <span className="form-label-icon">⏰</span>
                Turno
              </label>
              <select
                name="Turno"
                value={formState.Turno}
                onChange={handleChange}
                className="form-select"
              >
                <option value="Manhã">🌅 Manhã</option>
                <option value="Tarde">☀️ Tarde</option>
                <option value="Noite">🌙 Noite</option>
                <option value="Integral">⏰ Integral</option>
              </select>
            </div>

            {/* Salário */}
            <div className="form-field">
              <label className="form-label">
                <span className="form-label-icon">💰</span>
                Salário
              </label>
              <div className="form-currency-container">
                <span className="form-currency-symbol">R$</span>
                <input
                  type="number"
                  name="Salário"
                  value={formState.Salário}
                  onChange={handleChange}
                  step="0.01"
                  min="0"
                  required
                  className="form-currency-input"
                  placeholder="0,00"
                />
              </div>
              <p className="form-helper">
                Valor atual: <span className="form-helper-value">{formatCurrency(formState.Salário)}</span>
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="form-actions">
            <button
              type="button"
              onClick={onCancel}
              disabled={isSubmitting}
              className="form-button form-button-cancel"
            >
              <span>✕</span>
              <span>Cancelar</span>
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="form-button form-button-save"
            >
              {isSubmitting ? (
                <>
                  <div className="loading-spinner"></div>
                  <span>Salvando...</span>
                </>
              ) : (
                <>
                  <span>✓</span>
                  <span>Salvar Alterações</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}