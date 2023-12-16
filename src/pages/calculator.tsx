import {promises} from 'fs';
import { GetStaticProps, NextPage } from 'next';
import * as path from 'path';
import * as process from 'process';
import React, { ReactElement, useState } from 'react';
import { Button } from '../components/Button';

type Country = {
  jpnName: string;
  engName: string;
  numeric: number;
  alpha3: string;
  alpha2: string;
  location: string;
  subDivision: string;
};

type Props = {
  countries: Array<Country>;
};

const IndexPage: NextPage<Props> = (): ReactElement => {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <div className="m-10 p-4 w-2/3 mx-auto shadow-lg border-4 rounded-2xl">
        <div className="mx-auto">
          <div className="p-3 mb-3 border-4 rounded h-full w-full text-right">
            <span className="text-gray-700 select-none">{count}</span>
          </div>
          <div className="grid grid-cols-4 gap-2">
            <Button
              className="py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                console.log(count);
                setCount(count + 1);
              }}>
              <span className="select-none text-xl">7</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                console.log(count);
                setCount(count - 1);
              }}>
              <span className="select-none text-xl">8</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                setCount(0);
              }}>
              <span className="select-none text-xl">9</span>
            </Button>
            <Button
              className="py-2 bg-pink-300 hover:bg-pink-400 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                setCount(0);
              }}>
              <span className="select-none text-xl">/</span>
            </Button>
          </div>
          <div className="grid grid-cols-4 gap-2 my-2">
            <Button
              className="py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                console.log(count);

                setCount(count + 1);
              }}>
              <span className="select-none text-xl">4</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                console.log(count);

                setCount(count - 1);
              }}>
              <span className="select-none text-xl">5</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                setCount(0);
              }}>
              <span className="select-none text-xl">6</span>
            </Button>
            <Button
              className="py-2 bg-pink-300 hover:bg-pink-400 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                setCount(0);
              }}>
              <span className="select-none text-xl">*</span>
            </Button>
          </div>
          <div className="grid grid-cols-4 gap-2 my-2">
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                console.log(count);

                setCount(count + 1);
              }}>
              <span className="select-none text-xl">1</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                console.log(count);

                setCount(count - 1);
              }}>
              <span className="select-none text-xl">2</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                setCount(0);
              }}>
              <span className="select-none text-xl">3</span>
            </Button>
            <Button
              className="py-2 bg-pink-300 hover:bg-pink-400 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                setCount(0);
              }}>
              <span className="select-none text-xl">-</span>
            </Button>
          </div>
          <div className="grid grid-cols-4 gap-2 my-2">
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                console.log(count);

                setCount(count + 1);
              }}>
              <span className="select-none text-xl">.</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                console.log(count);

                setCount(count - 1);
              }}>
              <span className="select-none text-xl">0</span>
            </Button>
            <Button
              className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                setCount(0);
              }}>
              <span className="select-none text-xl">=</span>
            </Button>
            <Button
              className="py-2 bg-pink-300 hover:bg-pink-400 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                setCount(0);
              }}>
              <span className="select-none text-xl">+</span>
            </Button>
          </div>
          <div className="grid grid-cols-4 gap-2 my-2">
            <Button
              className="py-2 bg-teal-400 hover:bg-teal-500 text-white rounded border border-gray-200 cursor-pointer"
              onClick={() => {
                console.log(count);

                setCount(count + 1);
              }}>
              <span className="select-none text-xl">C</span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const buffer = await promises.readFile(path.join(process.cwd(), 'json', 'countries.json'));
  const str  = buffer.toString();

  return {
    props: {
      countries: JSON.parse(str)
    }
  };
};

// eslint-disable-next-line import/no-default-export
export default IndexPage;
