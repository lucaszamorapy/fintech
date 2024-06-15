import React from "react";
import { useData } from "../context/DataContext";
import DateRange from "./DateRange";

const Header = () => {
  return (
    <div>
      <DateRange />
    </div>
  );
};

export default Header;
