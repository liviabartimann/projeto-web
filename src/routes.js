import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Autenticar from "./pages/AutenticarUsuario";
import Cadastro from "./pages/Cadastro";
import RecAcesso from "./pages/RecAcesso";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Autenticar} />
      <Route path="/Cadastro" component={Cadastro} />
      <Route path="/recacesso" component={RecAcesso} />
      
    </BrowserRouter>
  );
}
