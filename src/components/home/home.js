import React from "react";
import "./home.css";
import Carrossel from "../carrossel/carrossel";
import photo from "../../images/larissa.jpg";
import Header from "../header/header";
import Footer from "../footer/footer";

//função para calcular a idade com base na data de nascimento
const calcularIdade = (dataNascimento) => {
  const dataNasc = new Date(dataNascimento);
  const hoje = new Date();
  let idade = hoje.getFullYear() - dataNasc.getFullYear();
  const mesAtual = hoje.getMonth();
  const diaAtual = hoje.getDate();

  if (
    mesAtual < dataNasc.getMonth() ||
    (mesAtual === dataNasc.getMonth() && diaAtual < dataNasc.getDate())
  ) {
    idade--;
  }

  return idade;
};

const idade = calcularIdade("1998-04-01");

function Home() {
  const imagens = [
    "https://images.unsplash.com/photo-1682687220161-e3e7388e4fad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1695088564293-36752ad99b24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    "https://images.unsplash.com/photo-1682685795557-976f03aca7b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
  ];

  return (
    <div>
      <Header></Header>
      <Carrossel imagens={imagens}></Carrossel>
      <section class="section" id="sobre">
        <div class="columns is-centered">
          <div class="column is-one-quarter">
            <figure class="image">
              <img src={photo} class="is-rounded" alt="logo" />
            </figure>
          </div>
          <div class="column is-two-thirds">
            <section class="section is-medium">
              <div>
                <h1 class="title">Sobre a fotógrafa</h1>
                <p class="description">
                  Oi, sou a Lari, muito prazer! Tenho {idade} anos, sou uma
                  eterna curiosa, com uma paixão inexplicável por guardar
                  memórias! Meu objetivo é eternizar o seu grande dia de uma
                  maneira única, sensível, com ênfase nos pequenos detalhes. Que
                  a minha fotografia não seja apenas um registro, mas uma
                  experiência inesquecível.
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default Home;
