import { useState, useEffect } from "react";
import type { Funcionario } from "../../types/funcionarios";
import CardFuncionario from "../../components/CardFuncionario";
import FormularioEdicao from "../../components/FormularioEdicao";

const API_URL = "http://localhost:3000/funcionarios";

export default function Funcionarios() {
  const [funcionarios, setFuncionarios] = useState<Funcionario[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editingFuncionario, setEditingFuncionario] = useState<Funcionario | null>(null);

  const fetchFuncionarios = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(API_URL);
      
      if (!response.ok) {
        throw new Error(`Erro HTTP! Status: ${response.status}`);
      }

      const data: Funcionario[] = await response.json();
      setFuncionarios(data);
    } catch (e) {
      if (e instanceof Error) {
        setError("Não foi possível carregar os dados. Verifique se o JSON-Server está rodando em http://localhost:3000.");
        console.error("Erro na busca de dados:", e.message);
      }
      setFuncionarios([]);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Tem certeza que deseja excluir este funcionário?")) {
      return;
    }

    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Falha ao excluir o funcionário.");
      }

      setFuncionarios((prev) => prev.filter((f) => f.id !== id));
    } catch (e) {
      if (e instanceof Error) {
        setError("Não foi possível excluir o funcionário.");
        console.error("Erro ao excluir:", e.message);
      }
    }
  };

  const handleSave = async (funcionarioEditado: Funcionario) => {
    try {
      const response = await fetch(`${API_URL}/${funcionarioEditado.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(funcionarioEditado),
      });

      if (!response.ok) {
        throw new Error("Falha ao salvar as alterações.");
      }

      await fetchFuncionarios();
      setEditingFuncionario(null);
    } catch (e) {
      setError("Não foi possível salvar. Tente novamente.");
    }
  };

  useEffect(() => {
    fetchFuncionarios();
  }, []);

  if (loading) {
    return (
      <section className="pagina-funcionarios-loading">
        Carregando dados dos funcionários...
      </section>
    );
  }

  if (error) {
    return (
      <section className="pagina-funcionarios-error">
        <p className="pagina-funcionarios-error-titulo">Erro ao conectar à API:</p>
        <p className="pagina-funcionarios-error-descricao">{error}</p>
      </section>
    );
  }

  return (
    <section className="pagina-funcionarios">
      {/* Cabeçalho da página */}
      <div className="pagina-funcionarios-header">
        <h2 className="pagina-funcionarios-titulo">
          <span className="pagina-funcionarios-icone">👥</span>
          Funcionários
        </h2>
        <p className="pagina-funcionarios-contador">
          Total: {funcionarios.length} {funcionarios.length === 1 ? "funcionário" : "funcionários"}
        </p>
      </div>

      {/* Lista de cards */}
      <div className="pagina-funcionarios-grid">
        {funcionarios.map((f) => (
          <CardFuncionario
            key={f.id}
            funcionario={f}
            onEdit={setEditingFuncionario}
            onDelete={handleDelete}
          />
        ))}
      </div>

      {/* Modal de Edição */}
      {editingFuncionario && (
        <FormularioEdicao
          funcionario={editingFuncionario}
          onSave={handleSave}
          onCancel={() => setEditingFuncionario(null)}
        />
      )}
    </section>
  );
}