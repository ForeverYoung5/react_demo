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

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 模拟异步操作，例如发起网络请求
        const result: any = await fetchDataFromServer();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div>
      {data && <p>Data: {data}</p>}
    </div>
  );
};

export default LazyComp;