import { DataTable } from '@/components/ui/data-table';
import { useDeleteInvoice, useFetchInvoices } from '@/hooks/useInvoices';

import { columns } from './columns';

function InvoicePage() {
  const { data, isLoading, isError } = useFetchInvoices();
  const { mutate: deleteProduct } = useDeleteInvoice();

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

export default InvoicePage;
