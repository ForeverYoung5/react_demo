import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Layout from './components/Layout';
const root = ReactDOM.createRoot(document.getElementById('root') as Element | DocumentFragment);
root.render(
  // <React.StrictMode>
    <Layout />
  // </React.StrictMode>
);

// 是一个用于监控 Web 应用性能的函数，
// 由 Create React App（CRA）工具集成的，旨在帮助开发者追踪应用的性能指标
reportWebVitals(console.log);
