import {
  QueryObserverResult,
  UseBaseMutationResult,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

import { client } from '@/api/client';
import { Product } from '@/app/types';
import { PRODUCT_PATH } from '@/data/paths';

const queryKey = 'products';

const fetchProduct = async (id: number): Promise<AxiosResponse<Product, any>> => {
  return await client.get<Product>(`${PRODUCT_PATH}/${id}`);
}

export const useFetchProduct = (id: number): QueryObserverResult<Product, any> => {
  return useQuery<Product, any>({
    queryFn: async () => {
      const { data } = await fetchProduct(id);
      return data;
    },
    queryKey: ['product', id],
  });
};

const fetchProducts = async (): Promise<AxiosResponse<Product[], any>> => {
  return await client.get<Product[]>(PRODUCT_PATH);
};

export const useFetchProducts = (): QueryObserverResult<Product[], any> => {
  return useQuery<Product[], any>({
    queryFn: async () => {
      const { data } = await fetchProducts();
      return data;
    },
    queryKey: [queryKey],
  });
};

const deleteProduct = async (
  id: number,
): Promise<AxiosResponse<Product, any>> => {
  return await client.delete<Product>(`${PRODUCT_PATH}/${id}`);
};

export const useDeleteProduct = (): UseBaseMutationResult<
  AxiosResponse<any, any>,
  unknown,
  number,
  unknown
> => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => deleteProduct(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKey] });
    },	
  });
};
