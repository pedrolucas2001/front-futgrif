import React from 'react';
import styled from 'styled-components';
import imgLogoHeader from "./imgLogoHeader.png";
import { MessagesSquare } from 'lucide-react';

const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 120px;
    /* background-color: aqua; */
    border-bottom: 1px solid #00b4b4;
`;

const ChildContainer = styled.div`
    flex: 1; /* Isso fará com que cada filho ocupe 1/3 da largura do pai */
    display: flex;
    justify-content: center;
    align-items: center;
`;

const MenuHeader = styled.div`
    ul{
        list-style: none;
        display: flex;
        gap: 3rem;
        li{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
        }
    }

`;

const Header = () => {
    return (
        <StyledHeader>
            <ChildContainer>
                <input type="text" />
            </ChildContainer>
            <ChildContainer>
                <img src={imgLogoHeader} alt="imagem escudo futgrif" width={100} />
            </ChildContainer>
            <ChildContainer>
                <MenuHeader>
                    <ul>
                        <li><MessagesSquare size={30} strokeWidth={1.5}/>Atendimento</li>
                        <li>Minha Conta</li>
                        <li>Meu Carrinho</li>
                    </ul>
                </MenuHeader>
            </ChildContainer>
        </StyledHeader>
    );
};

export default Header;
