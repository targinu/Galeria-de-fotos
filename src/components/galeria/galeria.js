import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import "./galeria.css";

const Galeria = () => {
  return (
    <div>
      <Header />
      <section class="section is-medium">
        <div class="container">
          <h1 class="title">Galeria</h1>
          <div class="columns">
            <div class="column">
              <button class="button is-primary is-large botao infantil">
                <button class="button is-black botao-interno">Infantil</button>
              </button>
            </div>
            <div class="column">
              <button class="button is-primary is-large botao  familia">
                <button class="button is-black botao-interno">
                  Ensaio Família
                </button>
              </button>
            </div>

            <div class="column">
              <button class="button is-primary is-large botao infantil">
                <button class="button is-black botao-interno">Infantil</button>
              </button>
            </div>
            <div class="column">
              <button class="button is-primary is-large botao  familia">
                <button class="button is-black botao-interno">
                  Ensaio Família
                </button>
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Galeria;
