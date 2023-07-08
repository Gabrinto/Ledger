import React, { useState } from 'react';
import { categoryDate } from '../data';
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { SiDiscord } from 'react-icons/si';
import { Link } from 'react-router-dom';
import { images } from '../constants';
import Header from './Header';
import Banner from './Banner';
import LedgerLive from './LedgerLive';
import GetStarted from './GetStarted';
import Footer from './Footer';

const HomeScreen = () => {
  return (
    <div>
      <div>
        <Header path={'/'} />
        <Banner />
        <LedgerLive />
        <GetStarted />
        <Footer />
      </div>
    </div>
  );
};

export default HomeScreen;
