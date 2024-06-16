import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { IVendas } from "../context/DataContext";

type VendaDia = {
  data: string;
  pago: number;
  processando: number;
  falha: number;
};

const GraficoVendas = ({ data }: { data: IVendas[] }) => {
  function transformData(data: IVendas[]): VendaDia[] {
    const dias = data.reduce((acc: { [key: string]: VendaDia }, item) => {
      const dia = item.data.split(" ")[0];
      if (!acc[dia]) {
        acc[dia] = {
          data: dia,
          pago: 0,
          falha: 0,
          processando: 0,
        };
      }
      acc[dia][item.status] += item.preco;
      return acc;
    }, {});

    return Object.values(dias).map((dia) => ({
      ...dia,
      data: dia.data.substring(5),
    }));
  }

  //   acc[dia] acessa o objeto que representa as vendas acumuladas para o dia dia.
  // item.status é uma string que pode ser 'pago', 'falha' ou 'processando'.
  // acc[dia][item.status] acessa o campo (pago, falha ou processando) correspondente ao status da venda.
  // += item.preco incrementa o valor do campo com o preço da venda.

  const transformedData = transformData(data);

  return (
    <ResponsiveContainer width="99%" height={400}>
      <LineChart data={transformedData}>
        <XAxis dataKey="data" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pago" stroke="#A36AF9" strokeWidth={3} />
        <Line
          type="monotone"
          dataKey="processando"
          stroke="#FBCB21"
          strokeWidth={3}
        />
        <Line
          type="monotone"
          dataKey="falha"
          stroke="#000000"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default GraficoVendas;
