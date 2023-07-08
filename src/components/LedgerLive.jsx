import React from 'react';
import { ledgerLiveData, perfectData } from '../data';
import { Link } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
import { BsStarHalf } from 'react-icons/bs';

const LedgerLive = () => {
  return (
    <div className="bg-white">
      <div className="text-left">
        <p className="text-gray-800 text-[18px] mt-[1rem]">Ledger Live</p>
        <h1 className="text-[35px] font-semibold mt-[0.8rem] leading-[38px]">
          ONE PLACE FOR ALL YOUR CRYPTO NEEDS
        </h1>
      </div>
      <div className="flex flex-row overflow-x-scroll p-3 w-[100vw] mt-[2.4rem]">
        {ledgerLiveData.map((item) => (
          <div className="min-w-[400px] flex flex-col gap-[1rem]">
            <img
              src={item.imageUrl}
              alt=""
              className="w-[70%] self-center object-contain h-[60%]"
            />
            <span className="text-left px-1 pt-[2rem] w-[88%]">
              <p className="text-[30px] font-semibold">{item.title}</p>
              <p className="text-[18px] font-semibold mb-[1rem]">{item.text}</p>
              <Link
                className="text-[17px] font-bold underline mt-[1rem]"
                to={item.link}
              >
                {item.linkName}
              </Link>
            </span>
          </div>
        ))}
      </div>

      <div className="bg-[#1C1D20] overflow-hidden px-3">
        <div className="text-center">
          <h1 className="text-[40px] text-white font-bold mt-[1.2rem]">
            FIND YOUR PERFECT LEDGER WALLET
          </h1>

          <div className="mt-[2rem] flex flex-row overflow-x-scroll w-[100vw] i">
            {perfectData.map((item) => {
              const { imgurl, text, title, rating, status } = item;
              return (
                <div className="min-w-[330px] flex flex-col gap-[1rem] justify-center">
                  <img
                    src={imgurl}
                    alt=""
                    className="w-[70%] ml-0 self-center object-contain h-[60%]"
                  />
                  <div className="text-left">
                    <h2 className="text-white text-[30px] font-semibold mb-[0.5rem]">
                      {title}
                    </h2>
                    <span className="flex items-center gap-2">
                      {rating && (
                        <p className="flex">
                          <AiFillStar size={19} className="text-[#ff5300]" />
                          <AiFillStar size={19} className="text-[#ff5300]" />
                          <AiFillStar size={19} className="text-[#ff5300]" />
                          <AiFillStar size={19} className="text-[#ff5300]" />
                          <BsStarHalf size={19} className="text-[#ff5300]" />
                        </p>
                      )}
                      <p className="text-[#ff5300] font-bold">{status}</p>
                    </span>
                    <p className="text-white text-[15px] pr-2  mt-2 text-left">
                      {text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-[2rem] mb-[2rem] text-white">
          <h1 className="text-[25px] font-semibold mb-[10px]">
            Need help choosing the right device for your needs?
          </h1>

          <p className="text-[15px] mb-[2.5rem]">
            Discover the characteristics, specific features and uses associated
            with our two products and select the one that best your
            expectations.
          </p>

          <Link
            to={'/'}
            className="text-white px-[2.5rem] bg-[#ff5300]
             py-[15px] rounded-full text-center self-center mt-[1rem]"
          >
            Compare our devices
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LedgerLive;
