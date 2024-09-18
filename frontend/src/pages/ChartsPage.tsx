import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Reorder } from "framer-motion";
import { darkTheme, lightTheme } from "../styles/Themes";

// Importando os cartões
import Cartao1 from "../components/charts-page/charts-card/ChartCard1";
import Cartao2 from "../components/charts-page/charts-card/ChartCard2";
import Cartao4 from "../components/charts-page/charts-card/ChartCard4";

// @ts-ignore
import backgroundImg from "../images/background.png";
import PerfilDiv from "../components/perfil/PerfilDiv";

export default function ChartsPage() {
    const [startDateGlobal, setStartDateGlobal] = useState("");
    const [finalDateGlobal, setFinalDateGlobal] = useState("");

    // Função para obter a ordem dos itens do localStorage ou usar uma ordem padrão
    const getInitialItems = () => {
        const savedItems = localStorage.getItem('chartItems');
        return savedItems ? JSON.parse(savedItems) : [0, 1, 2];
    };

    const [items, setItems] = useState<number[]>(getInitialItems);

    // Efeito para salvar a ordem dos itens no localStorage quando ela muda
    useEffect(() => {
        localStorage.setItem('chartItems', JSON.stringify(items));
    }, [items]);

    // Mapeamento dos componentes de cartão
    const cardComponents = [
        <Cartao1 />,
        <Cartao2  startDateGlobal={startDateGlobal} finalDateGlobal={finalDateGlobal}/>,
        <Cartao4 />
    ];

    return (
        <ContainerPrincipal>
            <PerfilDiv />
            <form id="date-form">
                <label htmlFor="start-date">Data Início:</label>
                <input
                    type="date"
                    id="start-date"
                    required
                    value={startDateGlobal}
                    onChange={(e) => setStartDateGlobal(e.target.value)}
                />

                <label htmlFor="end-date">Data Fim:</label>
                <input
                    type="date"
                    id="end-date"
                    required
                    value={finalDateGlobal}
                    onChange={(e) => setFinalDateGlobal(e.target.value)}
                />
            </form>
            <Reorder.Group axis="x" values={items} onReorder={setItems} style={{ display: 'flex', alignItems: 'end', gap: '35px' }}>
                {items.map((item: number) => (
                    <Reorder.Item key={item} value={item} style={{ flex: '0 0 auto', listStyle: 'none' }}>
                        {cardComponents[item]}
                    </Reorder.Item>
                ))}
            </Reorder.Group>
        </ContainerPrincipal>
    );
}

const ContainerPrincipal = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.pagesBackground};
    transition: 0.4s;
    background-image: url(${backgroundImg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.8;
`;
