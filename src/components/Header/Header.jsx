import React from 'react'
import styled from 'styled-components';
import imgLogoHeader from "./imgLogoHeader.png"

const StyledHeader = styled.header`
    header{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height: 120px;
        background-color: aqua;
        border-bottom: 1px solid #00b4b4;
    }

    nav{
        width: 100%;
        justify-content: center;
        align-items: center;
        background-color: aqua;
        padding-block: 1rem;
        border-bottom: 1px solid #00b4b4;

        ul{
            display: flex;
            justify-content: space-around;
            list-style: none;
        }
    }
   
`

const Header = () => {
    return (
        <StyledHeader>
            <header>
                <div>
                    <input type="text" />
                </div>
                <div>
                    <img src={imgLogoHeader} alt="imagem escudo futgrif" width={100} />
                </div>
                <div>
                    <ul>
                        <li>Atendimento</li>
                        <li>Minha Conta</li>
                        <li>Meu Carrinho</li>
                    </ul>
                </div>
            </header>
            <nav>
                <ul>
                    <li>Início</li>
                    <li>Retrô</li>
                    <li>Versão Jogador</li>
                    <li>Versão Torcedor</li>
                    <li>Outros</li>
                </ul>
            </nav>
        </StyledHeader>
    )
}

export default Header;