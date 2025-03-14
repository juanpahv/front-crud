import { DataTable } from '@/components/ui/data-table';
import { useDeleteClient, useFetchClients } from '@/hooks/useClients';

import { columns } from './columns';
import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';

function ClientPage() {
  const { data, isLoading, isError } = useFetchClients();
  const { mutate: deleteClient } = useDeleteClient()

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-semibold">Clients</h1>
      <div className="flex justify-end">
        <Button variant="default">
          <NavLink to="/clients/add">Add Client</NavLink>
        </Button>
      </div>
      <div className="mt-5">
        {isLoading ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>Error</div>
        ) : (
          <DataTable columns={columns(deleteClient)} data={data ?? []} />
        )}
      </div>
    </div>
  );
}

export default ClientPage;
