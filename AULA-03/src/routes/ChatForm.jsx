import { Outlet, Link, NavLink } from "react-router-dom";

import { useState } from "react";

export default function ChatForm() {

  return (
    <>
      
      
    <section id="container">
        <header>Entrar no Chat</header>

        <form id="formLogin">
            <input type="text" placeholder="Digite seu nome..." />
            <NavLink className={"btn-entrar"}
              to="/chat">
              Entrar
            </NavLink>
        </form>

    </section>

    </>
  );
}
