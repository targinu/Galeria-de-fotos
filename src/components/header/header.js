import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";
import logo from "../../images/logo.png";

function Header() {
  const navigate = useNavigate();

  // Função para rolar até a seção "Sobre" quando o link é clicado
  const scrollToSobre = () => {
    const sobreSection = document.getElementById("sobre");
    if (sobreSection) {
      sobreSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Função para rolar para o início da página quando os outros links são clicados
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Função para lidar com o clique em "Sobre"
  const handleSobreClick = () => {
    // Redirecionar para a página "Home"
    navigate("/");

    // Rolando para a seção "Sobre" após a navegação
    setTimeout(() => {
      scrollToSobre();
    }, 300);
  };

  return (
    <header>
      <nav
        className="navbar is-black header is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <img src={logo} className="logo" alt="logo" width="35" height="27" />
          </Link>
          <p className="navbar-item titulo">Larissa Navarro | Fotografia</p>
          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className="navbar-menu">
          <div className="navbar-end">
            <Link to="/" className="navbar-item" onClick={scrollToTop}>
              Home
            </Link>
            <p className="navbar-item">|</p>
            <a className="navbar-item" onClick={handleSobreClick}>
              Sobre
            </a>
            <p className="navbar-item">|</p>
            <Link to="/galeria" className="navbar-item" onClick={scrollToTop}>
              Galeria
            </Link>
            <p className="navbar-item">|</p>
            <Link to="/contato" className="navbar-item" onClick={scrollToTop}>
              Contato
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
