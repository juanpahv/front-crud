import { NavLink } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';
import { useDeleteProduct, useFetchProducts } from '@/hooks/useProducts';

import { columns } from './columns';

export default function ProductPage() {
  const { data, isLoading, isError } = useFetchProducts();
  const { mutate: deleteProduct } = useDeleteProduct();

  return (
    <div className="container mx-auto py-10 pr-6">
      <h1 className="text-2xl font-semibold">Products</h1>
      <div className="flex justify-end">
        <Button variant="default">
          <NavLink to="/products/add">Add Product</NavLink>
        </Button>
      </div>
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
