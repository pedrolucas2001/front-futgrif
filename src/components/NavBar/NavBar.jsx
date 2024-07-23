import React from 'react'
import styled from 'styled-components';

const NavBarStyled = styled.nav`
    justify-content: center;
    align-items: center;
    /* background-color: aqua; */
    padding-block: 1rem;
    border-bottom: 1px solid #00b4b4;

    ul{
        display: flex;
        justify-content: space-around;
        list-style: none;
    }`


const NavBar = () => {

    return (
        <>
            <NavBarStyled>
                <ul>
                    <li>Início</li>
                    <li>Retrô</li>
                    <li>Versão Jogador</li>
                    <li>Versão Torcedor</li>
                    <li>Outros</li>
                </ul>
            </NavBarStyled>
        </>
    )
}

export default NavBar;