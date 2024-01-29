
import React from "react";

type SpecsItem = {
  name: string;
  value: string;
};

type SpecsProps = {
  specs: SpecsItem[];
};

export const Specs: React.FC<SpecsProps> = ({ specs }) => {
  return (
    <div className="p-10 bg-black text-white rounded-3xl">
      <ul className="flex flex-col gap-4">
        {specs.map((spec, index) => (
          <li key={index}>
            <strong>{spec.name}</strong>: {spec.value}
          </li>
        ))}
      </ul>
    </div>
  );
};
