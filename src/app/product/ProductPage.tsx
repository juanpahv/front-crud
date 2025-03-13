import { DataTable } from '@/components/ui/data-table';
import { useDeleteProduct, useFetchProducts } from '@/hooks/useProducts';

import { columns } from './columns';

export default function ProductPage() {
  const { data, isLoading, isError } = useFetchProducts();
  const { mutate: deleteProduct } = useDeleteProduct();

  return (
    <div className="container mx-auto py-10">
      <div className="mt-5">
        {isLoading ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>Error</div>
        ) : (
          <DataTable columns={columns(deleteProduct)} data={data ?? []} />
        )}
      </div>
    </div>
  );
}
