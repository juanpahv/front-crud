// import { useRef } from 'react';

// import { BorderLine } from '@/components/border-line';
// import { FormContainer } from '@/components/form-container';
// import { RowContainer } from '@/components/row-container';
// import { Title } from '@/components/title';
// import { CustomInput } from '@/components/ui/custom-input';

// import { Product } from './columns';

// type Props = {
//   action: string;
//   productInput: Product | undefined;
//   handleSubmit: (input: ProductInput) => void;
// };

// type ProductInput = {
//   name: string;
//   quantity: number;
//   price: number;
//   description: string;
//   category: string;
// }

// export const ProductForm = ({ productInput, handleSubmit, action }: Props) => {
//   const formRef = useRef<HTMLFormElement>(null);

//   return (
//     <>
//       <FormContainer ref={formRef} onSubmit={(input: ProductInput) => handleSubmit(input)}>
//         <RowContainer>
//           <Title>New Product</Title>
//         </RowContainer>
//         <BorderLine />

//         <CustomInput
//           label="Name"
//           type="text"
//           placeholder="Name"
//           maxLength={50}
//           hasValue
//           required
//         />
//         <CustomInput
//           label="Quantity"
//           type="number"
//           placeholder="Quantity"
//           maxLength={50}
//           hasValue
//           required
//         />
//         <CustomInput
//           label="Price"
//           type="number"
//           placeholder="Price"
//           maxLength={50}
//           hasValue
//           required
//         />
//         <CustomInput
//           label="Description"
//           type="text"
//           placeholder="Description"
//           maxLength={50}
//           hasValue
//           required
//         />
//         <CustomInput
//           label="Category"
//           type="text"
//           placeholder="Category"
//           maxLength={50}
//           hasValue
//           required
//         />
//         <button type="submit">Submit</button>
//       </FormContainer>
//     </>
//   );
// };
