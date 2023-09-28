import React from "react";
import { Link } from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";

function NotFound() {
  return (
    <div>
      <section className="section is-large">
        <div className="container">
          <h1 className="title">Erro 404 - Página não encontrada</h1>
          <p className="subtitle">
            A página que você está procurando não existe.
          </p>
          <Link to="/" className="button is-primary">
            Voltar para a página inicial
          </Link>
        </div>
      </section>
    </div>
  );
}

export default NotFound;
