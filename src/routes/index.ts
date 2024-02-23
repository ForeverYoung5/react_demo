import LimitLine from "../pages/limitLine";
import Login from '../pages/Login';
import SuspenseComp from "../pages/suspenseComp";
import React from "react";
import SendParams from "../pages/sendParams";
import {ParamsReceive,SearchReceive,StateReceive} from "../pages/receiveParams/index";
const LifeCycleCom = React.lazy(()=>import('../pages/lifeCycle'));

export type TRouteItem = { path: string, element: any ,name:string,hidden?:boolean};
const routes: TRouteItem[] = [
  { path: '/', element: LimitLine,name:"行数限制",hidden:true },
  { path: '/limitLine', element: LimitLine,name:"行数限制" },
  { path: '/login', element: Login,name:'登录',hidden:true },
  { path: '/suspenseComp', element: SuspenseComp,name:"SuspenseComponent" },
  { path: '/lifCycle', element: LifeCycleCom,name:"生命周期" },
  { path: '/routeParamsSend', element: SendParams,name:"路由传参" },
  { path: '/routeParamsReceive/:id', element: ParamsReceive,name:"路由接收params参数",hidden:true },
  { path: '/routeSearchReceive', element: SearchReceive,name:"路由接收search参数",hidden:true },
  { path: '/routeStateReceive', element: StateReceive,name:"路由接收state参数",hidden:true },
]

export default routes;