import { DataTable } from '@/components/ui/data-table';
import { useDeleteInvoice, useFetchInvoices } from '@/hooks/useInvoices';

import { columns } from './columns';
import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';

function InvoicePage() {
  const { data, isLoading, isError } = useFetchInvoices();
  const { mutate: deleteProduct } = useDeleteInvoice();

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-semibold">Invoices</h1>
      <div className="flex justify-end">
        <Button variant="default">
          <NavLink to="/products/add">Add Invoices</NavLink>
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

export default InvoicePage;
