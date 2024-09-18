import React from "react";
import styled from "styled-components";
import CaloriasChartBar from "../charts/CaloriaPorDiaNovo";

export default function Test() {
    return (
        <Wrapper>
            <Teste>
                <Teste2>
                    
                </Teste2>
            </Teste>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    align-items: flex-end; /* Alinha Teste na parte inferior do Wrapper */
`;

const Teste = styled.div`
    display: flex;
    width: 360px;
    height: 250px;
    background-color: white;
    transition: height 0.3s ease;
    justify-content: center;
    align-items: end;
    border-radius: 10px;

    transition: 0.5s;

    
    
    /* Mover Teste para cima quando Teste2 estiver em hover */
    &:hover {
        height: 270px; /* Aumenta a altura */
    }
`;

const Teste2 = styled.div`
    background-color: black;
    display: flex;
    width: 360px;
    height: 250px;
    cursor: pointer;
    border-radius: 10px;
`;