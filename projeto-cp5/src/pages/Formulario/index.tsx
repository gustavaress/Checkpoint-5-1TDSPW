// src/components/FuncionarioForm.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Funcionario } from "../../types/funcionarios";

type NewFuncionario = Omit<Funcionario, "id">;

export default function FuncionarioForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState<NewFuncionario>({
    nome: "",
    cargo: "",
    Setor: "",
    Turno: "Manhã",
    Salário: 0,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: name === "Salário" ? parseFloat(value) || 0 : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 800));
      
      await fetch("http://localhost:3000/funcionarios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: crypto.randomUUID(), ...form }),
      });
      
      setIsSubmitting(false);
      alert("Funcionário cadastrado com sucesso!");
      navigate("/funcionarios");
    } catch (error) {
      console.error("Erro ao cadastrar funcionário:", error);
      setIsSubmitting(false);
      alert("Ocorreu um erro ao tentar cadastrar.");
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  return (
    <div className="form-cadastro-container">
      <div className="form-cadastro-content">
        {/* Header */}
        <div className="form-cadastro-header">
          <h1 className="form-cadastro-title">
            Cadastrar Novo Funcionário
          </h1>
          <p className="form-cadastro-subtitle">
            Adicione um novo colaborador ao sistema do Hospital das Clínicas
          </p>
        </div>

        {/* Form Card */}
        <div className="form-cadastro-card">
          {/* Card Header */}
          <div className="form-cadastro-card-header">
            <div className="form-cadastro-card-header-content">
              <div className="form-cadastro-card-icon">
                <span>📝</span>
              </div>
              <div>
                <h2 className="form-cadastro-card-title">
                  Informações do Funcionário
                </h2>
                <p className="form-cadastro-card-subtitle">
                  Preencha todos os campos obrigatórios
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="form-cadastro-body">
            <div className="form-cadastro-grid">
              {/* Nome Completo */}
              <div className="form-cadastro-field form-cadastro-field-full">
                <label className="form-cadastro-label">
                  <span className="form-cadastro-label-icon">👤</span>
                  Nome Completo *
                </label>
                <input
                  type="text"
                  name="nome"
                  value={form.nome}
                  onChange={handleChange}
                  placeholder="Digite o nome completo do funcionário"
                  className="form-cadastro-input"
                  required
                />
              </div>

              {/* Cargo */}
              <div className="form-cadastro-field">
                <label className="form-cadastro-label">
                  <span className="form-cadastro-label-icon">💼</span>
                  Cargo *
                </label>
                <input
                  type="text"
                  name="cargo"
                  value={form.cargo}
                  onChange={handleChange}
                  placeholder="Ex: Médico, Enfermeiro"
                  className="form-cadastro-input"
                  required
                />
              </div>

              {/* Setor */}
              <div className="form-cadastro-field">
                <label className="form-cadastro-label">
                  <span className="form-cadastro-label-icon">🏢</span>
                  Setor *
                </label>
                <input
                  type="text"
                  name="Setor"
                  value={form.Setor}
                  onChange={handleChange}
                  placeholder="Ex: Cardiologia, Pediatria"
                  className="form-cadastro-input"
                  required
                />
              </div>

              {/* Turno */}
              <div className="form-cadastro-field">
                <label className="form-cadastro-label">
                  <span className="form-cadastro-label-icon">⏰</span>
                  Turno *
                </label>
                <select
                  name="Turno"
                  value={form.Turno}
                  onChange={handleChange}
                  className="form-cadastro-select"
                  required
                >
                  <option value="Manhã">🌅 Manhã</option>
                  <option value="Tarde">☀️ Tarde</option>
                  <option value="Noite">🌙 Noite</option>
                  <option value="Integral">⏰ Integral</option>
                </select>
              </div>

              {/* Salário */}
              <div className="form-cadastro-field">
                <label className="form-cadastro-label">
                  <span className="form-cadastro-label-icon">💰</span>
                  Salário *
                </label>
                <div className="form-cadastro-currency-container">
                  <span className="form-cadastro-currency-symbol">R$</span>
                  <input
                    type="number"
                    name="Salário"
                    value={form.Salário}
                    onChange={handleChange}
                    step="0.01"
                    min="0"
                    placeholder="0,00"
                    className="form-cadastro-currency-input"
                    required
                  />
                </div>
                {form.Salário > 0 && (
                  <p className="form-cadastro-helper">
                    Valor: <span className="form-cadastro-helper-value">{formatCurrency(form.Salário)}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="form-cadastro-actions">
              <button
                type="button"
                onClick={() => navigate("/funcionarios")}
                disabled={isSubmitting}
                className="form-cadastro-button form-cadastro-button-cancel"
              >
                <span>✕</span>
                <span>Cancelar</span>
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="form-cadastro-button form-cadastro-button-submit"
              >
                {isSubmitting ? (
                  <>
                    <div className="loading-spinner"></div>
                    <span>Cadastrando...</span>
                  </>
                ) : (
                  <>
                    <span>➕</span>
                    <span>Cadastrar Funcionário</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Info Footer */}
        <div className="form-cadastro-footer">
          <p className="form-cadastro-footer-text">
            Todos os campos marcados com * são obrigatórios
          </p>
        </div>
      </div>
    </div>
  );
}