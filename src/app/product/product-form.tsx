import { useState, useEffect, useRef } from 'react';
import { BorderLine } from '@/components/border-line';
import { FormContainer } from '@/components/form-container';
import { RowContainer } from '@/components/row-container';
import { Title } from '@/components/title';
import { CustomInput } from '@/components/ui/custom-input';
import { Product } from '../types';

type Props = {
  action: 'add' | 'edit';
  productInput?: Product;
  handleSubmit: (input: ProductInput) => void;
};

type ProductInput = {
  name: string;
  quantity: number;
  price: number;
  description: string;
  category: string;
};

export const ProductForm = ({ productInput, handleSubmit, action }: Props) => {
  const formRef = useRef<HTMLFormElement>(null);

  // Set up form state using useState
  const [formData, setFormData] = useState<ProductInput>({
    name: '',
    quantity: 0,
    price: 0,
    description: '',
    category: '',
  });

  useEffect(() => {
    // If editing, populate form with existing product data
    if (productInput) {
      setFormData({
        name: productInput.name || '',
        quantity: productInput.quantity || 0,
        price: productInput.price || 0,
        description: productInput.description || '',
        category: String(productInput.category || ''),
      });
    }
  }, [productInput]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    handleSubmit(formData);
    formRef.current?.reset();
    setFormData({
      name: '',
      quantity: 0,
      price: 0,
      description: '',
      category: '',
    });
  };

  return (
    <>
      <FormContainer ref={formRef} onSubmit={onSubmit}>
        <RowContainer>
          <Title>{action === 'add' ? 'Agregar Producto' : 'Editar Producto'}</Title>
        </RowContainer>
        <BorderLine />

        <CustomInput
          label="Nombre"
          type="text"
          placeholder="Nombre"
          maxLength={50}
          hasValue
          required
          name="name"
          value={formData.name}
          onChange={handleChange} // Handle change event
        />
        <CustomInput
          label="Cantidad"
          type="number"
          placeholder="Cantidad"
          maxLength={50}
          hasValue
          required
          name="quantity"
          value={formData.quantity}
          onChange={handleChange} // Handle change event
        />
        <CustomInput
          label="Precio"
          type="number"
          placeholder="Precio"
          maxLength={50}
          hasValue
          required
          name="price"
          value={formData.price}
          onChange={handleChange} // Handle change event
        />
        <CustomInput
          label="Descripción"
          type="text"
          placeholder="Descripción"
          maxLength={50}
          hasValue
          required
          name="description"
          value={formData.description}
          onChange={handleChange} // Handle change event
        />
        <CustomInput
          label="Categoría"
          type="text"
          placeholder="Categoría"
          maxLength={50}
          hasValue
          required
          name="category"
          value={formData.category}
          onChange={handleChange} // Handle change event
        />

        <button type="submit" className="mt-4 p-2 bg-blue-500 text-white rounded">
          {action === 'add' ? 'Agregar Producto' : 'Actualizar Producto'}
        </button>
      </FormContainer>
    </>
  );
};
