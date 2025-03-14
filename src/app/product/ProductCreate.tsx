import { FormWrapper } from "@/components/form-wrapper"

import { ProductForm } from "./product-form"

function ProductCreate() {
    return (
        <FormWrapper>
            <ProductForm
                action="add"
                handleSubmit={(input) => console.log('Add product:', input)}
            />
        </FormWrapper> 
    )
}
export default ProductCreate;