import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Overlay from "../../modal/Overlay";
import Modal from "../../modal/Modal";
import SimplePortal from "../../portal/SimplePortal";

//@ts-ignore
import returnIgm from "../../../images/Cards/voltar.png";
import { GrabSvg } from "../../../images/Cards/grabSvg";
import PesoPorDia from "../charts/PesoPorDia";

const Cartao2Vazio = styled.div`
    display: flex;
    width: 360px;
    height: 280px;
    align-items: end;
`;

const Cartao2Push = styled.div`
    display: flex;

    width: 360px;
    height: 250px;
    
    position: relative;
    transition: height 0.3s ease;
    align-items: end;
    justify-content: center;
    
    border-radius: 11px;
    background: rgba(255, 255, 255, 0.15);
    border: 1px solid rgb(255, 255, 255, 0.35);
    
    backdrop-filter: blur(150px);
    transition: 0.5s;
    
    &:hover {
        height: 280px;
    }
`;

const Cartao2 = styled.div`
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

interface ChartCard2Props {
    startDateGlobal: string;
    finalDateGlobal: string;
}

export default function CardDialog2({ startDateGlobal, finalDateGlobal }: ChartCard2Props) {
    const [isOpen, setIsOpen] = useState(false);
    const [startDate, setStartDate] = useState("");
    const [finalDate, setFinalDate] = useState("");

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStartDate(e.target.value);
    };

    const handleFinalDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFinalDate(e.target.value);
    };

    return (
        <>
            <Cartao2Vazio>
                <Cartao2Push>
                    <GrabSvg />
                    <Cartao2 onClick={openModal}>
                        <h5>Histórico de Peso</h5>
                        <PesoPorDia startDate={startDateGlobal} endDate={finalDateGlobal} />
                    </Cartao2>
                </Cartao2Push>
            </Cartao2Vazio>

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
                                    <motion.button
                                        className="closeBtn"
                                        type="button"
                                        onClick={closeModal}
                                        whileHover={{ scale: [null, 1.3, 1.2] }}
                                        transition={{ duration: 0.01 }}
                                    >
                                        <img src={returnIgm} alt="" className="img-return" />
                                    </motion.button>

                                    <form id="date-form">
                                        <label htmlFor="start-date">Data Início:</label>
                                        <input
                                            type="date"
                                            id="start-date"
                                            required
                                            value={startDate}
                                            onChange={handleStartDateChange}
                                        />

                                        <label htmlFor="end-date">Data Fim:</label>
                                        <input
                                            type="date"
                                            id="end-date"
                                            required
                                            value={finalDate}
                                            onChange={handleFinalDateChange}
                                        />
                                    </form>

                                    <PesoPorDia startDate={startDate} endDate={finalDate} />
                                </AreaGrafico>
                            </Modal>
                        </motion.div>
                    </Overlay>
                </SimplePortal>
            )}
        </>
    );
}