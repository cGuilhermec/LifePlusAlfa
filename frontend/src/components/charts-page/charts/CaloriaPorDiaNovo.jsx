import React from 'react';
import styled from 'styled-components';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, PointElement, CategoryScale, LinearScale, BarElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { color } from 'framer-motion';

// Registra os componentes necessários do Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, BarElement, LineElement, Title, Tooltip, Legend);

const CaloriasChartBar = () => {
    // Dados para o gráfico
    const labels = ['01/08/24', '02/08/24', '03/08/24', '04/08/24', '05/08/24', '06/08/24', '07/08/24'];
    const metaCalorias = [2000, 2000, 2000, 2000, 2000, 2000, 2000];
    const caloriasConsumidas = [1900, 2200, 1000, 1900, 1200, 2000, 1750];

    // Configuração dos dados do gráfico
    const data = {
        labels: labels,
        datasets: [
            {
                type: 'bar',
                label: 'Calorias Consumidas',
                data: caloriasConsumidas,
                backgroundColor: 'rgba(82, 185, 78, 0.342)',
                borderColor: 'rgba(82, 185, 78, 0.342)',
                borderWidth: 1,
            },
            {
                type: 'line',
                label: 'Meta de Calorias',
                data: metaCalorias,
                backgroundColor: '#5ca0ce',
                borderColor: '#5ca0ce',
                borderWidth: 2,
                fill: false,
                tension: 0.1, // Para suavizar a linha, se desejado
            }
        ]
    };

    // Configuração das opções do gráfico
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    font: {
                        size: 10,
                    },
                    color: '#000',
                },
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return tooltipItem.dataset.label + ': ' + tooltipItem.raw;
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Qtd. Calorias',
                    color: '#000', // cor da legenda
                },
                grid: {
                    borderColor: '#ddd', // Cor da linha de borda
                    borderWidth: 1,
                },
                ticks: {
                    color: '#000000', // Cor da fonte dos valores do eixo Y
                },
            },
            x: {
                title: {
                    display: true,
                    text: 'Data',
                    color: '#000' // cor da legenda
                },
                ticks: {
                    color: '#000000', // Cor da fonte dos valores do eixo Y
                },
            }
        }
    };

    return (
        <div>
            <h5>Calorias Consumidas p/ Dia</h5>
            <Bar data={data} options={options} />
        </div>
    );
};

export default CaloriasChartBar;
