import React, { useState } from "react";
import styled from "styled-components";
import CaloriasChart from "../charts/CaloriaPorDia";
import { motion } from "framer-motion";
import CaloriasBarChart from "../charts/CaloriaPorDiaNovo";
import CaloriasChartBar from "../charts/CaloriaPorDiaNovo";
//@ts-ignore
import returnIgm from "../../../images/Cards/voltar.png"


const Cartao3 = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;

    justify-content: space-between;

    cursor: pointer;

    //TAMANHO DO CARD FECHADO
    width: 550px;
    height: 250px;
    background-color: ${({ theme }) => theme.cardBackground};
    color: black;

    border-radius: 10px;

    margin: 10px;
    padding: 10px;

    transition: 0.3s;

    &:hover{
        //TAMANHO DO CARD HOVERADO
        /* width: 363px;
        height: 253px; */

        box-shadow: 8px 8px 13px rgba(0, 0, 0, 0.5);
    }

    .img-expand{
        width: 15px;
        height: 15px;
        background-color: transparent;
    }

    .btn-expand{
        width: 25px;
        height: 25px;
        transition: 0.4s;

        display: flex;
        justify-content: center;
        align-items: center;

        position: absolute;

        top: 0.5rem;
        right: 0.5rem;

        background-color: transparent;
        border: none;
        border-radius: 10px;
    }
    .btn-expand image{
        width: 20px;
        width: 20px;
    }
    .btn-expand:hover .img-expand{
        cursor: pointer;
        /* width: 15.9px;
        height: 15.9px; */

        display: flex;
        justify-content: center;
        align-items: center;
    }
    /* .btn-expand:hover{
        background-color: #eeeeee;
    } */
`;

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;

    cursor: default;
`;

const Modal = styled.div`
    cursor: default;
    position: relative;
    background-color: ${({ theme }) => theme.cardBackground};
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 80%;
    /* max-width: 500px; */
    overflow: auto;
    z-index: 1001;

    //TAMANHO DO CARD ABERTO
    width: 800px;
    height: 500px;

    .closeBtn{
        display: flex;
        justify-content: center;
        align-items: center;

        position: absolute;
        top: 1rem;
        right: 1rem;

        width: 15px;
        height: 15px;

        margin: 0;

        border: none;
        background-color: transparent;
        cursor: pointer;

        transition: 0.4s;
    }
    .img-return{
        width: 20px;
        height: 20px;
     }
`;

export default function CarDialog() {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
            <Cartao3 onClick={openModal}>
                {/* <motion.button title="Expandir" className="btn-expand" 
                    whileHover={{ scale: [null, 1.3, 1.2] }}
                    transition={{ duration: 0.01 }}
                >
                    <img className="img-expand" src="https://cdn-icons-png.flaticon.com/512/151/151926.png" alt="" />
                </motion.button> */}

                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.3,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                >

                    {/* COLOCAR GRAFICO AQUI */}

                </motion.div>


                {isOpen && (
                    <Overlay onClick={closeModal}>
                        <Modal onClick={(e) => e.stopPropagation()}>
                                <form method="dialog">
                                    <motion.button className="closeBtn" type="button" onClick={closeModal}
                                        whileHover={{ scale: [null, 1.3, 1.2] }}
                                        transition={{ duration: 0.01 }}
                                    >
                                        <img src={returnIgm} alt="" className="img-return"/>
                                    </motion.button>

                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{
                                          duration: 0.8,
                                          delay: 0.3,
                                          ease: [0, 0.71, 0.2, 1.01]
                                        }}
                                    >

                                        {/* COLOCAR GRAFICO AQUI */}
                                    
                                    </motion.div>
                                
                                </form>
                        </Modal>
                    </Overlay>
                )}
            </Cartao3>
    );
}