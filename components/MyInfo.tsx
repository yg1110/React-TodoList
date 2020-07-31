import React from "react";

export interface Props {
  name: string;
  age: number;
}

function Myinfo({ name, age }: Props) {
  return (
    <>
      Hello, {name} ({age})
    </>
  );
}

export default Myinfo;
