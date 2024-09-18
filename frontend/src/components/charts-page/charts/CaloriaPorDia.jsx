import React, { PureComponent } from 'react';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
} from 'recharts';

// Dados atualizados
const data = [
  { date: '01/08/24', metaCalorias: 2000, caloriasConsumidas: 1900 },
  { date: '02/08/24', metaCalorias: 2000, caloriasConsumidas: 2200 },
  { date: '03/08/24', metaCalorias: 2000, caloriasConsumidas: 1000 },
  { date: '04/08/24', metaCalorias: 2000, caloriasConsumidas: 1900 },
  { date: '05/08/24', metaCalorias: 2000, caloriasConsumidas: 1200 },
  { date: '06/08/24', metaCalorias: 2000, caloriasConsumidas: 2000 },
  { date: '07/08/24', metaCalorias: 2000, caloriasConsumidas: 1750 },
];

export default class GraficoRecharts extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={data}
          margin={{
            top: 5,
            right: 5,
            bottom: 5,
            left: -20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis
            dataKey="date"
            scale="point"
            tick={{ fill: '#000000', fontSize: 14 }} // Altere a cor da fonte e o tamanho
            padding={{ left: 20, right: 20 }}
          />
          <YAxis
            tick={{ fill: '#000000', fontSize: 14 }} // Altere a cor da fonte e o tamanho
            domain={[0, 2400]}
          />
          <Tooltip />
          <Legend 
            wrapperStyle={{
                fontSize: '14px', // Tamanho da fonte da legenda
            }}
          />
          <Bar dataKey="caloriasConsumidas" barSize={20} fill="#413ea0">
            <LabelList 
              dataKey="caloriasConsumidas" 
              position="top" 
              style={{ fill: '#000000', fontSize: 10}}
              offset={8}
            />
          </Bar>
          <Line type="monotone" dataKey="metaCalorias" stroke="#ff7300" strokeWidth={4} dot={false}/>
        </ComposedChart>
      </ResponsiveContainer>
    );
  }
}
