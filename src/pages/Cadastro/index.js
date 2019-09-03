import React from 'react';
import InputEmail from '../../components/InputEmail';
import InputNome from '../../components/InputNome';
import InputSenha from '../../components/InputSenha';
import BtnCadastro from '../../components/BtnCadastro';
import { Link } from "react-router-dom";
import { Container } from './styles';

export default function Cadastro() {
    return (
        <Container>
            <header>
                <h1>Cadastro</h1>
            </header>

            <div className='borda'>
                <div>
                    <InputNome />
                </div>
                <div>
                    <InputEmail />
                </div>
                <div>
                    <InputSenha />
                </div>
            </div>
            <div className="bcad">
                <BtnCadastro />
            </div>
            <nav>
                <Link className="link" to="/">
                    <p> Login </p>
                </Link>
            </nav>

        </Container >
    );
}

