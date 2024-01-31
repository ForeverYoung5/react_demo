import SideBar from "../SideBar";
import styles from './style.module.scss';
import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import type { TRouteItem } from '../../routes/index';
import axios from '../../axios';
import routes from '../../routes';

const Layout: React.FC = () => {
  const [auth, setAuth] = useState<TRouteItem[]>();

  const getAuth = async () => {
    const resp: TApiResponse = await axios.get('http://localhost:5000/users/authorization');
    const { data } = resp;
    let res = routes.filter(e => data.includes(e.path));//过滤出来有权限的路由
    res.push({
      name: "",
      hidden: true,
      path: '*', element: () => {
        console.log(window.location);
        return <h1>请检查是否有权限</h1>
      }
    });
    setAuth(res);
  };

  useEffect(() => {
    getAuth();
  }, []);

  // 定义 API 响应数据的接口
  type TApiResponse = {
    data: string[];
  };

  return <div className={styles.layoutContainer}>
    <Router>
      <SideBar auth={auth} />
      <div className={styles.main}>
        <Routes>
          {auth?.map((item) => {
            return <Route
              path={item.path}
              key={item.path}
              element={<item.element />}
            />
          })}
        </Routes>
      </div>

    </Router>

  </div>
};

export default Layout;