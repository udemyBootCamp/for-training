import React from "react";

interface NumberProps {
  max: number;
  min: number;
}

const RandomNumber = ({ max, min }: NumberProps) => {
  const randomNum = (Math.random() * (max - min) + min).toFixed(3);
  return <div>{randomNum}</div>;
};

export default RandomNumber;
