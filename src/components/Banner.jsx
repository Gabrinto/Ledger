import React from 'react';
import { Link } from 'react-router-dom';
import { images } from '../constants';
import { AiOutlineArrowRight } from 'react-icons/ai';
import desktopImage from '../assets/Desktop_HP_Stax.webp';

const Banner = () => {
  return (
    <div className="pt-[7rem] bg-black">
      <div className="flex items-center justify-center gap-[2rem] p-3">
        <img src={desktopImage} alt="" className="hidden md:flex w-[450px]" />
        <div className="flex flex-col gap-[10px] text-left p-3">
          <p className="text-[#ff5300] text-sm">LEDGER HARDWARE WALLETS</p>
          <h1 className="text-white text-[30px] font-semibold">
            Introducing Ledger Stax
          </h1>
          <span className="mt-[1rem] text-white text-[18px] font-semibold">
            Experience premium crypto and NFT security like never before.
          </span>
          <Link
            to={'/ledger-type'}
            className="px-[1rem] py-[12px] bg-[#ff5300] rounded-full text-center w-[10rem] mt-[1.2rem] text-white text-[16px]"
          >
            Connect Ledger
          </Link>
        </div>
      </div>
      <div
        className=" mt-[3rem] bg-[#252424] flex flex-col items-center
      w-full justify-center py-[2rem] border-t-[1px] border-b-[1px] border-gray-300"
      >
        <h1 className="text-[17px] font-bold text-white">RECOMMENDED BY</h1>
        <span className="flex gap-[15px] mt-[2rem]">
          <img src={images.forbes} alt="" className="w-[70px] object-cover" />
          <img
            src={images.techcrunch}
            alt=""
            className="w-[70px] object-cover"
          />
          <img
            src={images.bloomberg}
            alt=""
            className="w-[70px] object-cover"
          />
        </span>
      </div>

      <div className="mt-[4rem] bg-black text-white text-left pb-[2rem]">
        <p className="text-[15px]">[L] MARKET EXCLUSIVE</p>
        <h1 className="text-[35px] font-bold mt-[20px] mb-[20px]">
          THE LEDGER STAX NFT BUNDLE
        </h1>

        <span className="text-[17px] font-semibold">
          Mint on [L] Market and get the Ledger Stax NFT, and a free Magnet
          Shell-q protective case for your Ledger Stax. Unlock access to the Art
          on Ledger Stax Generative Collection dropping in March 2023.
        </span>
        <span className="flex items-center mt-[2rem] gap-2 text-sm mb-[1rem]">
          <AiOutlineArrowRight />
          Mint from now until Dec 17, 6pm CET
        </span>
        <Link
          className="bg-[#ff5300] px-[35px] py-[8px] mt-[1rem] rounded-full"
          to={'/wallet'}
        >
          Mint now
        </Link>
      </div>
    </div>
  );
};

export default Banner;
