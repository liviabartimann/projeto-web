import React from 'react';
import InputEmail from '../../components/InputEmail';
import BtnRecuperar from '../../components/BtnRecuperar';
import { Container } from './styles';
import { Link } from "react-router-dom";

export default function Recuperar() {
    return (
        <Container>
            <h1>Recuperar Acesso</h1>
            <div className="iemail">
                <InputEmail />
            </div>

            <div className="brec">
                <BtnRecuperar />
            </div>
            <nav>
                <Link className="linkl" to="/">
                    <p> Login </p>
                </Link>
            </nav>
        </Container>


    );
}

