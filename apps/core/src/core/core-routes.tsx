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

const router = createBrowserRouter([...appRoutes], {
  basename: import.meta.env.BASE_URL,
});

export function CoreRoutes() {
  return <RouterProvider router={router} />;
}
