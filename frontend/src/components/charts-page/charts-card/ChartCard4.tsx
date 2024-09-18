import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import CaloriasBarChart from "../charts/CaloriaPorDiaNovo";
import CaloriasChartBar from "../charts/CaloriaPorDiaNovo";
import Overlay from "../../modal/Overlay";
import Modal from "../../modal/Modal";
import SimplePortal from "../../portal/SimplePortal";

//@ts-ignore
import returnIgm from "../../../images/Cards/voltar.png"
import { GrabSvg } from "../../../images/Cards/grabSvg";
import GraficoRecharts from "../charts/CaloriaPorDia";

const Cartao4Vazio = styled.div`
    display: flex;
    width: 360px;
    height: 280px;
    align-items: end;
`;

const Cartao4Push = styled.div`
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

const Cartao4 = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;



    cursor: pointer;

    //TAMANHO DO CARD FECHADO
    height: 240px;
    width: 100%;

    background-color: ${({ theme }) => theme.cardBackground};
    color: black;

    border-radius: 10px;

    padding-right: 10px;
    padding-left: 10px;
    padding-top: 10px;
    padding-bottom: 10px;

    h5{
        margin: 5px;
    };

    transition: 0.3s;

    &:hover{
        box-shadow: 8px 8px 13px rgba(0, 0, 0, 0.5);
    }
`;

const AreaGrafico = styled.div`
    width: 100%;
    height: 100%;
`;


export default function CardDialog4() {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
            <>
                <Cartao4Vazio>
                    <Cartao4Push>
                        <GrabSvg/>
                        <Cartao4 onClick={openModal}>
                            <h5>Calorias Consumidas p/ Dia</h5>
                            <GraficoRecharts />
                        </Cartao4>
                    </Cartao4Push>
                </Cartao4Vazio>


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
                                            <GraficoRecharts />
                                        </AreaGrafico>
                                </Modal>
                            </motion.div>
                        </Overlay>
                    </SimplePortal>
                )}
            </>
    );
}