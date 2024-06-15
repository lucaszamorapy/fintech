import React from "react";
import { useData } from "../context/DataContext";

const style: React.CSSProperties = {
  padding: "var(--gap) var(--gap-s)",
  backgroundColor: "var(--color-3)",
  border: "none",
  borderRadius: "var(--gap)",
  color: "var(--color-2)",
  fontWeight: "600",
  textTransform: "capitalize",
};

const MesBtn = ({ n }: { n: number }) => {
  const { setInicio, setFinal } = useData();

  const nomeMes = (n: number) => {
    const date = new Date();
    date.setMonth(date.getMonth() + n);
    return new Intl.DateTimeFormat("pt-br", { month: "long" }).format(date);
  };

  const formatDate = (date: Date) => {
    const day = String(date.getDate()).padStart(2, "0"); //se a variavel for menor que 2, ele acrescenta um 0
    const month = String(date.getMonth() + 1).padStart(2, "0"); //se a variavel for menor que 2, ele acrescenta um 0
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  };

  const setMes = (n: number) => {
    const date = new Date();
    date.setMonth(date.getMonth() + n);
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    setInicio(formatDate(firstDay));
    setFinal(formatDate(lastDay));
  };

  return (
    <button onClick={() => setMes(n)} style={style}>
      {nomeMes(n)}
    </button>
  );
};

export default MesBtn;
