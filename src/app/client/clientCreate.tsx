import { FormWrapper } from "@/components/form-wrapper";
import axios from 'axios';
import { ClientForm } from "./client-form";


// Define the Axios instance or URL
const API_URL = "http://localhost:8080/clients";

function ClientCreate() {
    const handleAddProduct = async (input: { email:string,  name:string, lastName:string}) => {
        console.log('Add product:', input);

        try {

            const send = {
                id: Number(new Date()),
                email: input.email,
                name: input.name,
                lastName: input.lastName,
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
            <ClientForm
                action="add"
                handleSubmit={handleAddProduct as any} // Pass the handleAddProduct function to ProductForm
            />
        </FormWrapper> 
    );
}

export default ClientCreate;
