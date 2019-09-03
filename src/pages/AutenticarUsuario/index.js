import React from 'react';
import InputEmail from '../../components/InputEmail';
import InputSenha from '../../components/InputSenha';
import BtnLogin from '../../components/BtnLogin';
import { Link } from "react-router-dom";
import { Container } from './styles';

export default function Autenticar() {
    return (
        <Container>
            <header>
                <h1> Autenticar Usuário </h1>
            </header>
            <div>
                <InputEmail />
            </div>
            <div>
                <InputSenha />
            </div>
            <div className="blog">
                <BtnLogin />
            </div>
            <nav>
                <Link className="link" to="/Cadastro">
                    <p> Cadastre-se </p>
                </Link>
            </nav>
            <nav>
                <Link className="linkr" to="/RecAcesso">
                    <p> Esqueci Minha Senha </p>
                </Link>
            </nav>
        </Container>


    );


}
