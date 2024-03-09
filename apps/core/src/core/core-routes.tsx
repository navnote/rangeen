import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from 'react-router-dom';
import { CoreLayout } from './core-layout';
import { HomePage } from '../components/home';

const appRoutes: RouteObject[] = [
  {
    element: <CoreLayout />,
    children: [{ path: '/', element: <HomePage /> }],
  },
];

const isGithubPages = import.meta.env.BASE_URL.includes(
  'navnote.github.io/rangeen'
);

const router = createBrowserRouter([...appRoutes], {
  basename: isGithubPages ? '/rangeen/' : '/',
});

export function CoreRoutes() {
  return <RouterProvider router={router} />;
}
