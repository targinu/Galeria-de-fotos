import React, { useState } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import "./contato.css";
import photo from "../../images/IMG_7468.webp";

function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar lógica para lidar com os dados do formulário, como enviar por e-mail ou salvá-los em um banco de dados.
    console.log(formData);
  };

  return (
    <div>
      <Header></Header>

      <section class="section is-medium tudo">
        <div class="columns">
          <div class="column is-half">
          <img src={photo} class="foto" alt="logo" />
          </div>

          <div class="column is-half">
            <div class="container">
              <h1 class="title">Entre em Contato</h1>

              <form onSubmit={handleSubmit}>
                <div class="columns">
                  <div class="column is-half">
                    <div class="field">
                      <label class="label">Nome</label>
                      <div class="control">
                        <input
                          class="input"
                          type="text"
                          name="nome"
                          value={formData.nome}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div class="column is-half">
                    <div class="field">
                      <label class="label">Sobrenome</label>
                      <div class="control">
                        <input
                          class="input"
                          type="text"
                          name="sobrenome"
                          value={formData.sobrenome}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="field">
                  <label class="label">Email</label>
                  <div class="control">
                    <input
                      class="input"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div class="field">
                  <label class="label">Telefone</label>
                  <div class="control">
                    <input
                      class="input"
                      type="tel"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div class="field">
                  <label class="label">Mensagem</label>
                  <div class="control">
                    <textarea
                      class="textarea"
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div class="field">
                  <div class="control">
                    <button class="button is-primary" type="submit">
                      Enviar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default Contato;
