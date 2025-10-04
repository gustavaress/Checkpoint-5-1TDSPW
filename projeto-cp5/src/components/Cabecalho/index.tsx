// src/components/Cabecalho.jsx
import { Link, NavLink } from "react-router-dom";

export default function Cabecalho() {
  const links = [
    { to: "/", label: "Home" },
    { to: "/funcionarios", label: "Funcionários" },
    { to: "/formulario", label: "Formulário" },
  ];

  return (
    <header className="cabecalho-container">
      <div className="cabecalho-content">
        {/* título à esquerda */}
        <Link to="/" className="logo">
          Hospital das Clínicas
        </Link>

        {/* navegação à direita */}
        <nav className="nav-menu">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `nav-link ${isActive ? "nav-link--active" : "nav-link--idle"}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}