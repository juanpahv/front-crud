import { createBrowserRouter, Navigate } from 'react-router-dom';

import ErrorBoundaryPage from '@/app/errorBoundary/ErrorBoundaryPage';
import NotFoundPage from '@/app/notFound/NotFoundPage';


import { loggedInRoutes } from './routes-config';

export const appRouters = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to={"/product"} replace />,
    errorElement: <ErrorBoundaryPage />,
  },
  {
    path: '/*',
    element: <NotFoundPage />,
    errorElement: <ErrorBoundaryPage />,
  },
  ...loggedInRoutes,
]);
