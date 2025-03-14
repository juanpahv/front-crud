import { RouteObject } from 'react-router-dom';

import ClientPage from '@/app/client/ClientPage';
import EmployeePage from '@/app/employee/EmployeePage';
import ErrorBoundaryPage from '@/app/errorBoundary/ErrorBoundaryPage';
import InvoicePage from '@/app/invoice/InvoicePage';
import ProductDetail from '@/app/product/ProductDetail';
import ProductPage from '@/app/product/ProductPage';
// import WithSuspense from '@/components/with-suspense';
// import { LazyComponents } from '@/data/lazy-components';

import { CLIENT_PATH, EMPLOYEE_PATH, INVOICE_PATH, PRODUCT_PATH } from './paths'; 
// const { ProductPage } = LazyComponents;

export const loggedInRoutes: RouteObject[] = [
  {
    path: PRODUCT_PATH,
    element: <ProductPage />,
    errorElement: <ErrorBoundaryPage />,
  },
  {
    path: "/products/:id",
    element: <ProductDetail />,
    errorElement: <ErrorBoundaryPage />,
  },
  {
    path: INVOICE_PATH,
    element: <InvoicePage />,
    errorElement: <ErrorBoundaryPage />,
  },
  {
    path: CLIENT_PATH,
    element: <ClientPage />,
    errorElement: <ErrorBoundaryPage />,
  },
  {
    path: EMPLOYEE_PATH,
    element: <EmployeePage />,
    errorElement: <ErrorBoundaryPage />,
  }
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
