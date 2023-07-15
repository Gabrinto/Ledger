import React from 'react';
import { selectLedgerData } from '../data';
import { Link } from 'react-router-dom';

const SelectLedger = () => {
  return (
    <div className="bg-black h-full">
      <div className=" h-full flex flex-col items-center">
        <h1 className="text-white text-[40px] font-bold text-center mb-[1rem] pt-[1rem]">
          SELECT YOUR DEVICE
        </h1>

        <div className="flex flex-wrap gap-[1rem] items-center justify-center">
          {selectLedgerData.map((item) => (
            <div className="flex flex-col items-center gap-[1rem]">
              <img
                src={item.imgurl}
                alt=""
                className="w-[300px] h-[400px] object-contain"
              />
              <h1 className="text-white text-[30px]">{item.title}</h1>
              <Link
                to={'/validate-wallet'}
                className="text-black px-[30px] py-[12px] text-center rounded-lg bg-gray-600"
              >
                Select
              </Link>
            </div>
          ))}
        </div>

        <Link
          to={'/'}
          className="border-gray-300 mt-[2rem] border-[1px] rounded-xl text-center text-[28px] text-white px-[2rem] py-[0.6rem] "
        >
          Back
        </Link>
      </div>
    </div>
  );
};

export default SelectLedger;
