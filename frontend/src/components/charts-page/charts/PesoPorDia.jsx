import React, { PureComponent } from 'react';
import {
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
} from 'recharts';
import { getFilteredData, maiorPeso, menorPeso } from './DadosPesoDia';

export default class PesoPorDia extends PureComponent {
  render() {
    const { startDate, endDate } = this.props;
    const data = getFilteredData(startDate, endDate);

    if(data.length === 0){
      return(
        <div 
          style={{
            width: '100%', 
            height: '100%',
            display: 'flex', 
            justifyContent: 'center',
            alignItems: 'center'
            }}>
          <h5>Não há dados no período informado</h5>
        </div>
      );
    } else{
      return (
        <ResponsiveContainer width="100%" height="100%" marginLeft="-40px">
          <ComposedChart
            data={data}
            margin={{
              top: 5,
              right: 5,
              bottom: 5,
              left: -30,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis
              dataKey="date"
              scale="point"
              tick={{ fill: '#000000', fontSize: 14 }}
              tickMargin={5}
              padding={{ left: 20, right: 20 }}
            />
            <YAxis
              tick={{ fill: '#000000', fontSize: 14 }}
              domain={[menorPeso, maiorPeso]}
              tickMargin={0}
            />
            <Tooltip />
            <Legend
              wrapperStyle={{
                fontSize: '14px',
              }}
            />
            <Line type="monotone" dataKey="Peso" stroke="#8884d8" strokeWidth={4}>
              <LabelList 
                dataKey="Peso" 
                position="top" 
                style={{ fill: '#000000', fontSize: 10}}
                offset={10}
                formatter={(value) => `${value} kg`}
              />
            </Line>
            <Line type="monotone" dataKey="MetaPeso" stroke="#82ca9d" strokeWidth={4} />
          </ComposedChart>
        </ResponsiveContainer>
      );
    }
  }
}
