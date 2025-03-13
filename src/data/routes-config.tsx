import { RouteObject } from 'react-router-dom';

import ClientPage from '@/app/client/ClientPage';
import ErrorBoundaryPage from '@/app/errorBoundary/ErrorBoundaryPage';
import ProductPage from '@/app/product/ProductPage';
// import WithSuspense from '@/components/with-suspense';
// import { LazyComponents } from '@/data/lazy-components';

import { CLIENT_PATH, PRODUCT_PATH } from './paths';

// const { ProductPage } = LazyComponents;

export const loggedInRoutes: RouteObject[] = [
  {
    path: PRODUCT_PATH,
    element: <ProductPage />,
    errorElement: <ErrorBoundaryPage />,
  },
  {
    path: CLIENT_PATH,
    element: <ClientPage />,
    errorElement: <ErrorBoundaryPage />,
  },

];

// export const AuthenticatedRoutes: RouteObject[] = loggedInRoutes.map(
//   (route: RouteObject) => {
//     return {
//       ...route,
//       element: (
//           <WithSuspense>{route.element}</WithSuspense>
//       ),
//     };
//   },
// );
