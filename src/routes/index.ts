import LimitLine from "../pages/limitLine";

type TRouteItem = { path: string, element: React.FC  };
const routes: TRouteItem[] = [
  { path: '/', element: LimitLine },
  { path: '/limitLine', element: LimitLine },
]

export default routes;