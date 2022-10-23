import React from "react";

const ResultRandomColor = [];
const color = [
  "primary",
  "secondary",
  "success",
  "danger",
  "warning",
  "info",
  "light",
  "dark",
];
export function RandomColor() {
  let RandomNumber = Math.floor(Math.random *10);
  console.log(Math.random()*10 );
  let result = color.find((node, index) => index === RandomNumber);
  // console.log(result);
  return result
}
