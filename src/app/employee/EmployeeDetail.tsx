import { useParams } from "react-router-dom";

import { useFetchEmployee } from "@/hooks/useEmployee";

function EmployeeDetail() {
  let { id } = useParams();
  const { data, isLoading, isError } = useFetchEmployee(Number(id));

  return (
    <div className="container mx-auto py-10 pr-6">
      <h1 className="text-2xl font-semibold">Employee Detail</h1>
      <div className="mt-5">
        {isLoading ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>Error</div>
        ) : (
          <div>
            {data && (
              <ul>
                <li>Name: {data.name}</li>
                <li>Last Name: {data.lastName}</li>
                <li>Username: {data.username}</li>
                <li>Birthdate: {data.birthDate}</li>
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default EmployeeDetail