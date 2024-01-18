import LimitLine from "../pages/limitLine";
import Login from '../pages/Login';
import SuspenseComp from "../pages/suspenseComp";
import React from "react";
// import LifeCycleCom from "../pages/lifeCycle";
const LifeCycleCom = React.lazy(()=>import('../pages/lifeCycle'));

export type TRouteItem = { path: string, element: any ,name:string,hidden?:boolean};
const routes: TRouteItem[] = [
  { path: '/', element: LimitLine,name:"行数限制",hidden:true },
  { path: '/limitLine', element: LimitLine,name:"行数限制" },
  { path: '/login', element: Login,name:'登录',hidden:true },
  { path: '/suspenseComp', element: SuspenseComp,name:"SuspenseComponent" },
  { path: '/lifCycle', element: LifeCycleCom,name:"生命周期" },
]

export default routes;