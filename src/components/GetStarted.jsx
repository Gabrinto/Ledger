import React from 'react';
import { images } from '../constants';
import { Link } from 'react-router-dom';
import { aboutLedgerData } from '../data';
import YoutubeEmbed from './YoutubeEmbed';

const GetStarted = () => {
  return (
    <div>
      <div className="p-4  flex flex-wrap md:gap-[2rem] md:items-center md:justify-center">
        <div className="mt-[2rem] bg-[#f1f1f1] md:w-[400px] rounded-lg px-3">
          <img src={images.thirdImage} alt="" />

          <div className="text-left mt-[2rem]">
            <h1 className="text-[16px] font-bold">NEW TO THE CRYPTO WORLD?</h1>
            <p className="text-[25px] font-semibold mt-[1rem] mb-[2rem] pr-4">
              Get started with our smart insider tips.
            </p>

            <Link to={'/'} className="underline  font-bold">
              Get started with crypto
            </Link>
          </div>
        </div>

        {/* second one */}
        <div className="mt-[1rem] bg-[#f1f1f1] md:w-[400px] rounded-lg px-3">
          <img src={images.fourthImage} alt="" />

          <div className="text-left mt-[2rem]">
            <h1 className="text-[16px] font-bold">
              WANT TO BECOME A CRYPTO EXPERT?
            </h1>
            <p className="text-[25px] font-semibold mt-[1rem] mb-[2rem] pr-4">
              Get fresh crypto insights with Ledger Academy.
            </p>

            <Link to={'/'} className="underline  font-bold">
              Become a crypto expert
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-[2rem] flex gap-[20px] overflow-x-scroll w-[100vw]">
        {aboutLedgerData.map((item) => (
          <div className="flex flex-col items-center min-w-[310px] h-[100%]">
            <div
              style={{ background: `${item.background}` }}
              className="w-full flex items-center p-4 pb-0 justify-center h-[300px]"
            >
              <img
                src={item.imgurl}
                alt=""
                className=" object-cover  h-[100%]"
              />
            </div>

            <div className="text-white bg-[#000000] text-left p-3">
              <h1 className="text-[40px] uppercase leading-[45px] mb-[1rem]">
                {item.title}
              </h1>
              <p className="text-[14px] font-medium mb-[2rem]">{item.text}</p>
              <Link to={item.link} className="text-white mt-[2rem] underline">
                {item.linkName}
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-[2rem] px-3">
        <div className="w-full h-[1px] bg-gray-300" />
        <div className="flex w-[100vw] overflow-x-scroll gap-[1rem] items-center justify-center">
          <div className="flex flex-col text-left min-w-[300px] ">
            <span className="text-[14px] font-bold">Video</span>
            <h1 className="text-[18px]">GET YOUR CRYPTO SAFE</h1>
          </div>
          <div className="flex flex-col text-left  min-w-[300px]">
            <span className="text-[14px] font-bold">Podcast</span>
            <h1 className="text-[18px]">ON THE LEDGER</h1>
          </div>
          <div className="flex flex-col text-left min-w-[300px] ">
            <span className="text-[14px] font-bold">Articles</span>
            <h1 className="text-[18px]">BLOGPOSTS & NEWS</h1>
          </div>
        </div>
        <div className="mt-[2rem] text-left flex flex-col">
          <p className="font-semibold text-[19px] mb-[1rem]">
            Even more security
          </p>
          <span className="font-semibold">
            Ian Rogers : Morning. No celebrity questions here, as I’m sure
            you’ve got some very rational ones of your own. Wait, you mean I
            have this futuristic cryptocurrency, and this high-tech device with
            a secure chip and memory, but the achilles heel is this little piece
            of paper with 24…
          </span>
          <Link to={'/'} className="text-[16px] underline font-bold mt-[1rem]">
            Watch the episode
          </Link>
        </div>
      </div>
      <YoutubeEmbed embedId="2F-D9UMuSu0" />
    </div>
  );
};

export default GetStarted;
