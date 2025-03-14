import {
  QueryObserverResult,
  UseBaseMutationResult,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

import { client } from '@/api/client';
import { Employee } from '@/app/types';
import { EMPLOYEE_PATH } from '@/data/paths';

const queryKey = 'employees';

const fetchEmployee = async (id: number): Promise<AxiosResponse<Employee, any>> => {
  return await client.get<Employee>(`${EMPLOYEE_PATH}/${id}`);
}

export const useFetchEmployee = (id: number): QueryObserverResult<Employee, any> => {
  return useQuery<Employee, any>({
    queryFn: async () => {
      const { data } = await fetchEmployee(id);
      return data;
    },
    queryKey: ['employee', id],
  });
};

const fetchEmployees = async (): Promise<AxiosResponse<Employee[], any>> => {
  return await client.get<Employee[]>(EMPLOYEE_PATH);
};

export const useFetchEmployees = (): QueryObserverResult<Employee[], any> => {
  return useQuery<Employee[], any>({
    queryFn: async () => {
      const { data } = await fetchEmployees();
      return data;
    },
    queryKey: [queryKey],
  });
};

const deleteEmployee = async (
  id: number,
): Promise<AxiosResponse<Employee, any>> => {
  return await client.delete<Employee>(`${EMPLOYEE_PATH}/${id}`);
};

export const useDeleteEmployee = (): UseBaseMutationResult<
  AxiosResponse<any, any>,
  unknown,
  number,
  unknown
> => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => deleteEmployee(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKey] });
    },
  });
}
