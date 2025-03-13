import { ReactNode, Suspense } from 'react';

import { Loader } from './loader';

function WithSuspense({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center justify-center w-full">
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </div>
  );
}

export default WithSuspense;
