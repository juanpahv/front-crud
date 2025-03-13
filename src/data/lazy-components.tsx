import { lazy } from 'react';

export const LazyComponents = {
  ProductPage: lazy(() => import('@/app/product')),
};
