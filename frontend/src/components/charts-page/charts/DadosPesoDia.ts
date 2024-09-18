interface DataEntry {
  date: string;
  Peso: number;
  MetaPeso?: number; // metaPeso é opcional inicialmente
}

const data: DataEntry[] = [
  { "date": "2024-08-01T00:00:00.000Z", "Peso": 73.83 },
  { "date": "2024-08-05T00:00:00.000Z", "Peso": 72.34 },
  { "date": "2024-08-13T00:00:00.000Z", "Peso": 71.22 },
  { "date": "2024-08-14T00:00:00.000Z", "Peso": 72.33 },
  { "date": "2024-08-15T00:00:00.000Z", "Peso": 72.67 },
  { "date": "2024-08-29T00:00:00.000Z", "Peso": 72.71 },
  { "date": "2024-08-31T00:00:00.000Z", "Peso": 73.05 }
];

const meta: number = 69;

let menorPeso: number = Infinity;
let maiorPeso: number = -Infinity;

// Verifica qual é o maior e menor peso, 
// para delimitar o inicio e fim eixo y 
for(let i: number = 0; i < data.length; i++){
  const comparar: number = data[i].Peso;
  
  if(comparar < menorPeso){
    if(menorPeso < meta){
      menorPeso = Math.round(comparar - 2);
    } else{
      menorPeso = Math.round(meta - 2);
    }
  };

  if(comparar > maiorPeso){
    if(maiorPeso > meta){
      maiorPeso = Math.round(maiorPeso + 2);
    } else{
      maiorPeso = Math.round(meta + 2);
    }
  };
};

export{ menorPeso, maiorPeso};

// Função para formatar a data em dd/mm/aa para exibição
const formatDateToString = (dateString: string): string => {
  const date = new Date(dateString);
  const day = String(date.getUTCDate()).padStart(2, '0');
  const month = String(date.getUTCMonth() + 1).padStart(2, '0');
  const year = String(date.getUTCFullYear()).slice(-2);
  return `${day}/${month}/${year}`;
};

// Filtra os dados com base nas datas fornecidas e formata as datas
export const getFilteredData = (startDate: string, endDate: string) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  
  const filteredData = data.filter(entry => {
    const entryDate = new Date(entry.date);
    return entryDate >= start && entryDate <= end;
  });

  // Adiciona a meta em cada objeto
  filteredData.forEach(entry => {
    entry.MetaPeso = meta;
  });

  // Aplica o formato da data a cada entrada para exibição
  return filteredData.map(entry => ({
    ...entry,
    date: formatDateToString(entry.date) // Formata a data para dd/mm/aa
  }));
};
