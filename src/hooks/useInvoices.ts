import {
  QueryObserverResult,
  UseBaseMutationResult,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

import { client } from '@/api/client';
import { Invoice } from '@/app/types';
import { INVOICE_PATH } from '@/data/paths';

const queryKey = 'invoices';

const fetchInvoices = async (): Promise<AxiosResponse<Invoice[], any>> => {
  return await client.get<Invoice[]>(INVOICE_PATH);
};

export const useFetchInvoices = (): QueryObserverResult<Invoice[], any> => {
  return useQuery<Invoice[], any>({
    queryFn: async () => {
      const { data } = await fetchInvoices();
      return data;
    },
    queryKey: [queryKey],
  });
};

const deleteInvoice = async (
  id: number,
): Promise<AxiosResponse<Invoice, any>> => {
  return await client.delete<Invoice>(`${INVOICE_PATH}/${id}`);
};

export const useDeleteInvoice = (): UseBaseMutationResult<
  AxiosResponse<any, any>,
  unknown,
  number,
  unknown
> => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => deleteInvoice(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKey] });
    },
  });
};
