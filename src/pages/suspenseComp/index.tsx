import React, { Suspense } from "react";

// 模拟需要很长时间加载的组件
const simulateLongLoad = () => new Promise(resolve => setTimeout(resolve, 5000));

const LazyComp = React.lazy(() => simulateLongLoad().then(() => import('./LazyComp')));

const SuspenseComp = () => {
  return <Suspense fallback={<h1>Suspense Loading。。。。</h1>}>
    <LazyComp />
  </Suspense>
}
export default SuspenseComp