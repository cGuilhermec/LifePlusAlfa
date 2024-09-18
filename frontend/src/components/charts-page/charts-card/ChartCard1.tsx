import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { motion } from "framer-motion";
import CaloriasBarChart from "../charts/CaloriaPorDiaNovo";
import CaloriasChartBar from "../charts/CaloriaPorDiaNovo";
import Overlay from "../../modal/Overlay";
import Modal from "../../modal/Modal";
import SimplePortal from "../../portal/SimplePortal";
import { darkTheme, lightTheme } from "../../../styles/Themes";

//@ts-ignore
import returnIgm from "../../../images/Cards/voltar.png";
import { GrabSvg } from "../../../images/Cards/grabSvg";

const Cartao1Vazio = styled.div`
    display: flex;
    width: 360px;
    height: 280px;
    align-items: end;
`;

const Cartao1Push = styled.div`
    display: flex;
    width: 360px;
    height: 250px;
    position: relative;

    transition: height 0.3s ease;
    align-items: end;
    justify-content: center;
    border-radius: 11px;

    background: rgba(255, 255, 255, 0.15);
    border: 1px solid rgb(255, 255, 255, .35);
    backdrop-filter: blur(150px);

    /* margin-right: 10px;
    margin-left: 10px; */

    transition: 0.5s;
    
    /* Mover Teste para cima quando Teste2 estiver em hover */
    &:hover {
        height: 280px;
    }
`;

const Cartao1 = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;

    justify-content: space-between;

    cursor: pointer;

    //TAMANHO DO CARD FECHADO
    height: 220px;
    width: 100%;

    background-color: ${({ theme }) => theme.cardBackground};
    color: black;

    border-radius: 10px;

    padding-right: 20px;
    padding-left: 20px;
    padding-top: 20px;
    padding-bottom: 20px;

    transition: 0.3s;

    &:hover{
        box-shadow: 8px 8px 13px rgba(0, 0, 0, 0.5);
    }
`;

const AreaGrafico = styled.div`
    width: 100%;
    height: 100%;
`;

export default function CardDialog() {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const [isDarkTheme, setIsDarkTheme] = useState(() => {
        return localStorage.getItem("isDarkTheme") === "true";
    });

    useEffect(() => {
        localStorage.setItem("isDarkTheme", JSON.stringify(isDarkTheme));
      }, [isDarkTheme]);

    const toggleTheme = () => {
        setIsDarkTheme(prev => !prev);
    };

    return (
            <>
                <Cartao1Vazio>
                    <Cartao1Push>
                        <GrabSvg/>
                        <Cartao1 onClick={openModal}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.3,
                                    ease: [0, 0.71, 0.2, 1.01]
                                }}
                                className=""
                            >
                                <CaloriasChartBar />
                            </motion.div>
                        </Cartao1>
                    </Cartao1Push>
                </Cartao1Vazio>


                {isOpen && (
                    <SimplePortal>
                        <Overlay onClick={closeModal}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                            duration: 0.8,
                            delay: 0.3,
                            ease: [0, 0.71, 0.2, 1.01],
                            }}
                        >
                                <Modal onClick={(e) => e.stopPropagation()}>
                                        <AreaGrafico>
                                            <motion.button className="closeBtn" type="button" onClick={closeModal}
                                                whileHover={{ scale: [null, 1.3, 1.2] }}
                                                transition={{ duration: 0.01 }}
                                            >
                                                <img src={returnIgm} alt="" className="img-return"/>
                                            </motion.button>
                                                <CaloriasChartBar />
                                        </AreaGrafico>
                                </Modal>
                            </motion.div>
                        </Overlay>
                    </SimplePortal>
                )}
            </>
    );
}