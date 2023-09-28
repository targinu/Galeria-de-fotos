import React from "react";
import logoFooter from "../../images/1.png";
import "./footer.css";

function Footer() {
  return (
    <footer class="footer">
      <div class="content has-text-centered">
        <img
          src={logoFooter}
          class="logo"
          alt="logo"
          width="250"
          height="105"
        />
        <hr />
        <p>
          Vamos eternizar momentos? <a href="/contato">Clique aqui</a> ou entre
          em contato por um dos links abaixo:
        </p>
        <div class="columns is-centered">
          <div class="column is-1">
            <a
              href="https://www.instagram.com/larinavarroph/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa fa-instagram" aria-hidden="true"></i> Instagram
            </a>
          </div>
          <div class="column is-1">
            <a href="mailto:larissanavarrofotos@gmail.com">
              <i class="fa fa-envelope" aria-hidden="true"></i> Email
            </a>
          </div>
          <div class="column is-1">
            <a href="tel:+5511951983373">
              <i class="fa fa-phone" aria-hidden="true"></i> Telefone
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
