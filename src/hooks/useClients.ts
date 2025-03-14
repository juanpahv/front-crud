import {
  QueryObserverResult,
  UseBaseMutationResult,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

import { client } from '@/api/client';
import { Client } from '@/app/types';
import { CLIENT_PATH } from '@/data/paths';

const queryKey = 'clients';

const fetchClient = async (id: number): Promise<AxiosResponse<Client, any>> => {
  return await client.get<Client>(`${CLIENT_PATH}/${id}`);
}

export const useFetchClient = (id: number): QueryObserverResult<Client, any> => {
  return useQuery<Client, any>({
    queryFn: async () => {
      const { data } = await fetchClient(id);
      return data;
    },
    queryKey: ['client', id],
  });
};

const fetchClients = async (): Promise<AxiosResponse<Client[], any>> => {
  return await client.get<Client[]>(CLIENT_PATH);
};

export const useFetchClients = (): QueryObserverResult<Client[], any> => {
  return useQuery<Client[], any>({
    queryFn: async () => {
      const { data } = await fetchClients();
      return data;
    },
    queryKey: [queryKey],
  });
};

const deleteClient = async (
  id: number,
): Promise<AxiosResponse<Client, any>> => {
  return await client.delete<Client>(`${CLIENT_PATH}/${id}`);
};

export const useDeleteClient = (): UseBaseMutationResult<
  AxiosResponse<any, any>,
  unknown,
  number,
  unknown
> => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => deleteClient(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKey] });
    },
  });
}
