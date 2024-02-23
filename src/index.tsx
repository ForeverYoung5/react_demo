import './public-path';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Layout from './components/Layout';

let root: any = null;
function render(props: any) {
  const { container } = props;
  root = root || ReactDOM.createRoot(container ? container.querySelector("#root") : document.getElementById("root"));
  root.render(
    <React.StrictMode>
        <Layout />
    </React.StrictMode>
  );
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log("[react18] react app bootstraped");
}

export async function mount(props: any) {
  console.log("[react18] props from main framework", props);
  render(props);
}

export async function unmount(props: any) {
  root.unmount();
  root = null;
}



// 是一个用于监控 Web 应用性能的函数，
// 由 Create React App（CRA）工具集成的，旨在帮助开发者追踪应用的性能指标
reportWebVitals(console.log);
