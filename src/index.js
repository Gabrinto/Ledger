import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Wallets from './components/Wallets';
import ValidateWallet from './components/ValidateWallet';
import store from './app/store';
import { Provider } from 'react-redux';
import SelectLedger from './components/SelectLedger';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="wallet" element={<Wallets />} />
        <Route path="validate-wallet" element={<ValidateWallet />} />
        <Route path="ledger-type" element={<SelectLedger />} />
      </Routes>
    </Router>
  </Provider>
);
