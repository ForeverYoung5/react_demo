import React, { useState, useEffect } from 'react';

function fetchDataFromServer() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('接口返回数据成功');
    }, 5000)
  })
};
const LazyComp = () => {
  const [data, setData] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 模拟异步操作，例如发起网络请求
        const result: any = await fetchDataFromServer();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // 空依赖数组表示只在组件挂载时执行一次

  return (
    <div>
      {data && <p>Data: {data}</p>}
    </div>
  );
};

export default LazyComp;