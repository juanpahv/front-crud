import { useParams } from "react-router-dom";

import { useFetchProduct } from "@/hooks/useProducts";

function ProductDetail() {
  let { id } = useParams();
  const { data, isLoading, isError } = useFetchProduct(Number(id));
  const category = data?.category.id || "Sin categoría";
  const categoryName = data?.category.name || "Sin categoría";
  return(
    <div className="container mx-auto py-10 pr-6">
      <h1 className="text-2xl font-semibold">Product Detail</h1>
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
                <li>Quantity: {data.quantity}</li>
                <li>Price: {data.price}</li>
                <li>Category id: {category}</li>
                <li>Category name: {categoryName}</li>
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductDetail