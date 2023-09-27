import React from "react";
import "./header.css";
import logo from "../../images/logo.png";

function Header() {
  return (
    <header>
       <nav class="navbar is-black header" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">

        <a class="navbar-item" href="/">
            <img src={logo} class="logo" alt="logo" width="35" height="27"/>
        </a>

        <p class="navbar-item titulo">Larissa Navarro | Fotografia</p>

            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            </a>
        </div>

        <div class="navbar-menu">
            <div class="navbar-end">
            <a class="navbar-item">
                Home
            </a>

            <p class="navbar-item">|</p>

            <a class="navbar-item">
                Sobre
            </a>

            <p class="navbar-item">|</p>

            <a class="navbar-item">
                Galeria
            </a>

            <p class="navbar-item">|</p>

            <a class="navbar-item">
                Contato
            </a>
            </div>
        </div>
        </nav>
    </header>
  );
}

export default Header;
