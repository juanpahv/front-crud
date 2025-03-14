import { useParams } from "react-router-dom";

import { useFetchClient } from "@/hooks/useClients";

export default function ClientDetail() {
  let { id } = useParams();
  const { data, isLoading, isError } = useFetchClient(Number(id));

  return(
    <div className="container mx-auto py-10 pr-6">
      <h1 className="text-2xl font-semibold">Client Detail</h1>
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
                <li>Email: {data.email}</li>
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  )
}