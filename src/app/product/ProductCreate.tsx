import { FormWrapper } from "@/components/form-wrapper";
import { ProductForm } from "./product-form";
import axios from 'axios';


// Define the Axios instance or URL
const API_URL = "http://localhost:8080/products";

function ProductCreate() {
    const handleAddProduct = async (input: { name: string; quantity: string; price: string; description: string; category: string }) => {
        console.log('Add product:', input);

        try {

            const send = {
                id: Number(new Date()),
                name: input.name,
                quantity: Number(input.quantity),
                price: Number(input.price),
                description: input.description,
                category: {
                    id: input.category,
                }
            }

            console.log(send)
            
            // Send POST request using Axios
            const response = await axios.post(API_URL, send);

            // Log the response from the API
            console.log("Product added successfully:", response.data);

            // Optionally, you can reset the form or handle success state
        } catch (error) {
            console.error("Error adding product:", error);
        }
    };

    return (
        <FormWrapper>
            <ProductForm
                action="add"
                handleSubmit={handleAddProduct as any} // Pass the handleAddProduct function to ProductForm
            />
        </FormWrapper> 
    );
}

export default ProductCreate;
