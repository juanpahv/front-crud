import { RouteObject } from 'react-router-dom';

import ClientDetail from '@/app/client/ClientDetail';
import ClientPage from '@/app/client/ClientPage';
import EmployeeDetail from '@/app/employee/EmployeeDetail';
import EmployeePage from '@/app/employee/EmployeePage';
import ErrorBoundaryPage from '@/app/errorBoundary/ErrorBoundaryPage';
import InvoiceDetail from '@/app/invoice/InvoiceDetail';
import InvoicePage from '@/app/invoice/InvoicePage';
import ProductDetail from '@/app/product/ProductDetail';
// import WithSuspense from '@/components/with-suspense';
import { LazyComponents } from '@/data/lazy-components';

import { CLIENT_PATH, EMPLOYEE_PATH, INVOICE_PATH, PRODUCT_PATH } from './paths'; 
import ProductPage from '@/app/product/ProductPage';
import ProductCreate from '@/app/product/ProductCreate';
// const { ProductPage } = LazyComponents;

export const loggedInRoutes: RouteObject[] = [
  {
    path: "/products",
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
    path: "/invoices/:id",
    element: <InvoiceDetail />,
    errorElement: <ErrorBoundaryPage />,
  },
  {
    path: CLIENT_PATH,
    element: <ClientPage />,
    errorElement: <ErrorBoundaryPage />,
  },
  {
    path: "/clients/:id",
    element: <ClientDetail />,
    errorElement: <ErrorBoundaryPage />,
  },
  {
    path: EMPLOYEE_PATH,
    element: <EmployeePage />,
    errorElement: <ErrorBoundaryPage />,
  },
  {
    path: "/products/add",
    element: <ProductCreate />,
    errorElement: <ErrorBoundaryPage />,
  },
  {
    path: "/employees/:id",
    element: <EmployeeDetail />,
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
