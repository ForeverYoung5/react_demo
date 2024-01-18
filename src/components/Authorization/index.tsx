import axios from '../../axios';
import routes from '../../routes';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import type { TRouteItem } from '../../routes/index';

const Authorization: React.FC = function () {
  const [auth, setAuth] = useState<TRouteItem[]>();

  useEffect(() => {
    getAuth();
  }, []);

  // 定义 API 响应数据的接口
  interface ApiResponse {
    data: string[];
  };

  const getAuth = async () => {
    const resp: ApiResponse = await axios.get('http://localhost:5000/users/authorization');
    const { data } = resp;
    let res = routes.filter(e => data.includes(e.path));
    res.push({
      name:"",
      hidden:true,
      path: '*', element: () => {
        console.log(window.location);
        return <h1>请检查是否有权限</h1>
      }
    });
    setAuth(res);
  };

  return <>
    <Router>
      <Routes>
        {auth?.map((item) => {
          return <Route
            path={item.path}
            key={item.path}
            element={<item.element />}
          />
        })}
      </Routes>
    </Router>
  </>
};

export default Authorization