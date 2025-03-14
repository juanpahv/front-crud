import { useParams } from 'react-router-dom';

import { useFetchInvoice } from '@/hooks/useInvoices';

function InvoiceDetail() {
  let { id } = useParams();
  const { data, isLoading, isError } = useFetchInvoice(Number(id));

  return (
    <div className="container mx-auto py-10 pr-6">
      <h1 className="text-2xl font-semibold">Invoice Detail</h1>
      <div className="mt-5">
        {isLoading ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>Error</div>
        ) : (
          <div>
            {data && (
              <ul>
                <li>Client: {data.client.name}</li>
                <li>Total: {data.total}</li>
                <li>Balance: {data.balance}</li>
                <li>Status: {data.status.name}</li>
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default InvoiceDetail;
