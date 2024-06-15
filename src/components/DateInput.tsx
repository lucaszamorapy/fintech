import React from "react";

type IDateInput = React.ComponentProps<"input"> & {
  label: string;
};

const DateInput = ({ label, ...props }: IDateInput) => {
  return (
    <div>
      <div>
        <label htmlFor={label}>{label}</label>
        <input id={label} name={label} type="date" {...props} />
      </div>
    </div>
  );
};

export default DateInput;
