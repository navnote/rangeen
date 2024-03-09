import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CoreLayout } from './core-layout';
import { HomePage } from '../components/home';

const router = createBrowserRouter([
  {
    element: <CoreLayout />,
    children: [{ path: '/', element: <HomePage /> }],
  },
]);

export function CoreRoutes() {
  return <RouterProvider router={router} />;
}
