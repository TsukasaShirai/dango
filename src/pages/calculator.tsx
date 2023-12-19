import { NextPage } from 'next';
import React, { ReactElement, useState } from 'react';
import { Button } from '../components/Button';

const IndexPage: NextPage = (): ReactElement => {

  //カレントの数値
  const [display, setDisplay] = useState<string>("0");
  //前項
  const [term1, setTerm1] = useState<number>(0);
  //後項
  const [term2, setTerm2] = useState<number>(0);
  //演算子
  const [operator, setOperator] = useState<string>("");
  //演算記号入力
  const [isOperated, setOperated] = useState<boolean>(false);

  const clear =(): void => {
    setDisplay("0");
    setTerm1(0);
    setTerm2(0);
    setOperator("");
    setOperated(false);
  }

  //数値入力
  const input = (value: string): string => {
    
    let result:string = display; 
    if(isOperated){
      setOperated(false);
      result = "0";
    }
    
    if(value == "."){
      if(display.indexOf(".") == -1 ){
        result += ".";
      }
    }else if (result == "0") {
      result = value;
    }else{
      result += value;
    } 
    setTerm2(Number(result));
    return result;
  };

  //演算子入力
  const operate = (oprator: string): void=> {
    setOperated(true);
    setOperator(oprator);
    setTerm1(Number(display));
    setTerm2(Number(display));
  };

  //計算
  const calc = (): string => {
    
    let result:number = Number(display);
    switch(operator){
      case "+":
        result = term1 + term2;
        break;
      case "-":
        result = term1 - term2;
        break;
      case "/":
        result = term1 / term2;
        break;
      case "*":
        result = term1 * term2;
        break;
    }
    setTerm1(result);
    return String(result);
  };

  return (
    <>
      <div className="m-10 p-4 w-2/3 mx-auto shadow-lg border-4 rounded-2xl">
        <div className="mx-auto">
          <div className="p-3 mb-3 border-4 rounded h-full w-full text-right">
            <span className="text-gray-700 select-none">{display}</span>
          </div>
          <div className="grid grid-cols-4 gap-2">
            <Button
              className="py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                setDisplay(input("7"));
              }}>
              <span className="select-none text-xl">7</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                setDisplay(input("8"));
              }}>
              <span className="select-none text-xl">8</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                setDisplay(input("9"));
              }}>
              <span className="select-none text-xl">9</span>
            </Button>
            <Button
              className="py-2 bg-pink-300 hover:bg-pink-400 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                operate("/");
              }}>
              <span className="select-none text-xl">/</span>
            </Button>
          </div>
          <div className="grid grid-cols-4 gap-2 my-2">
            <Button
              className="py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                setDisplay(input("4"));
              }}>
              <span className="select-none text-xl">4</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                setDisplay(input("5"));
              }}>
              <span className="select-none text-xl">5</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                setDisplay(input("6"));
              }}>
              <span className="select-none text-xl">6</span>
            </Button>
            <Button
              className="py-2 bg-pink-300 hover:bg-pink-400 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                operate("*");
              }}>
              <span className="select-none text-xl">*</span>
            </Button>
          </div>
          <div className="grid grid-cols-4 gap-2 my-2">
            <Button
              className="py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                setDisplay(input("1"));
              }}>
              <span className="select-none text-xl">1</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                setDisplay(input("2"));
              }}>
              <span className="select-none text-xl">2</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                setDisplay(input("3"));
              }}>
              <span className="select-none text-xl">3</span>
            </Button>
            <Button
              className="py-2 bg-pink-300 hover:bg-pink-400 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                operate("-");
              }}>
              <span className="select-none text-xl">-</span>
            </Button>
          </div>
          <div className="grid grid-cols-4 gap-2 my-2">
            <Button
              className="py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                setDisplay(input("."));
              }}>
              <span className="select-none text-xl">.</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                setDisplay(input("0"));
              }}>
              <span className="select-none text-xl">0</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                setDisplay(calc());
              }}>
              <span className="select-none text-xl">=</span>
            </Button>
            <Button
              className="py-2 bg-pink-300 hover:bg-pink-400 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                operate("+");
              }}>
              <span className="select-none text-xl">+</span>
            </Button>
          </div>
          <div className="grid grid-cols-4 gap-2 my-2">
            <Button
              className="py-2 bg-teal-400 hover:bg-teal-500 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                clear();
              }}>
              <span className="select-none text-xl">C</span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};



// eslint-disable-next-line import/no-default-export
export default IndexPage;
