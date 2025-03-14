import { DataTable } from '@/components/ui/data-table';
import { useDeleteEmployee, useFetchEmployees } from '@/hooks/useEmployee';

import { columns } from './columns';

function EmployeePage() {
  const { data, isLoading, isError } = useFetchEmployees();
  const { mutate: deleteEmployee } = useDeleteEmployee();

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-semibold">Employees</h1>
      <div className="mt-5">
        {isLoading ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>Error</div>
        ) : (
          <DataTable columns={columns(deleteEmployee)} data={data ?? []} />
        )}
      </div>
    </div>
  );
}

export default EmployeePage;
