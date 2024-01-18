import LimitLine from "../pages/limitLine";
import Login from '../pages/Login';
import SuspenseComp from "../pages/suspenseComp";

export type TRouteItem = { path: string, element: React.FC  };
const routes: TRouteItem[] = [
  { path: '/', element: LimitLine },
  { path: '/limitLine', element: LimitLine },
  { path: '/login', element: Login },
  { path: '/suspenseComp', element: SuspenseComp },
]

export default routes;