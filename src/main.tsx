import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import Layout from './components/layout';
import './index.css';
import { ThemeProvider } from './components/theme-provider';
import { appRouters } from './data/routes';
import { queryClient } from './queries/query-config';

createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Layout>
          <RouterProvider router={appRouters} />
        </Layout>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
);
