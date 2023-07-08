import React from 'react';
import { AiFillYoutube } from 'react-icons/ai';
import { FaDiscord, FaTiktok, FaFacebookF } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';
import { ImLinkedin } from 'react-icons/im';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="mt-[2rem] bg">
      <div className="bg-[#D4A0FF]">
        <div className="text-left p-3 text-black">
          <h1 className="text-[28px] font-semibold my-3 ">Stay in touch</h1>
          <p className="text-black font-semibold text-sm">
            Announcements can be found in our blog. Press contact:(email
            protected)
          </p>

          <div className="flex flex-wrap gap-[1rem] mt-[2rem]">
            <div className="h-[50px] w-[50px] rounded-full flex items-center justify-center bg-black ">
              <FaDiscord className="fill-white text-white " size={19} />
            </div>
            <div className="h-[50px] w-[50px] rounded-full flex items-center justify-center bg-black ">
              <AiFillYoutube className="fill-white text-white" size={19} />
            </div>

            <div className="h-[50px] w-[50px] rounded-full flex items-center justify-center bg-black ">
              <FaFacebookF className="fill-white text-white" size={19} />
            </div>

            <div className="h-[50px] w-[50px] rounded-full flex items-center justify-center bg-black ">
              <FiTwitter className="fill-white text-white" size={19} />
            </div>
            <div className="h-[50px] w-[50px] rounded-full flex items-center justify-center bg-black ">
              <ImLinkedin className="fill-white text-white" size={19} />
            </div>

            <div className="h-[50px] w-[50px] rounded-full flex items-center justify-center bg-black ">
              <FaTiktok className="fill-white text-white" size={19} />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black pt-[3rem]">
        <div className="text-left p-4">
          <button
            type="button"
            className="text-white px-[3rem] py-[10px] border-[1px] border-white rounded-full"
          >
            {' '}
            ENGLISH
          </button>
          <p className="text-gray-200 text-sm mt-[1.3rem]">
            Copyright © Ledger SAS. All rights reserved. Ledger, Ledger Stax,
            Ledger Nano S, Ledger Vault, Bolos are registered trademarks of
            Ledger SAS
          </p>
          <p className="text-gray-200 text-sm mt-[1.3rem]">
            1 rue du Mail, 75002 Paris, France
          </p>
          <p className="text-gray-200 text-sm mt-[1.3rem]">Payment methods</p>
        </div>

        <div className="text-left mt-5 px-4 gap-[2rem] flex flex-col">
          <Link to={'/'} className="text-white text-[18px] font-semibold">
            Products
          </Link>
          <Link to={'/'} className="text-white text-[18px] font-semibold">
            crypto Assets
          </Link>
          <Link to={'/'} className="text-white text-[18px] font-semibold">
            For Business
          </Link>
          <Link to={'/'} className="text-white text-[18px] font-semibold">
            For Developers
          </Link>
          <Link to={'/'} className="text-white text-[18px] font-semibold">
            Get started
          </Link>
          <Link to={'/'} className="text-white text-[18px] font-semibold">
            See also
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
