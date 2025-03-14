import { useState, useEffect, useRef } from 'react';
import { BorderLine } from '@/components/border-line';
import { FormContainer } from '@/components/form-container';
import { RowContainer } from '@/components/row-container';
import { Title } from '@/components/title';
import { CustomInput } from '@/components/ui/custom-input';
import { Client } from '../types';

type Props = {
  action: 'add' | 'edit';
  productInput?: Client;
  handleSubmit: (input: ProductInput) => void;
};

type ProductInput = {
  email:string
  name:string
  lastName:string
};

export const ClientForm = ({ productInput, handleSubmit, action }: Props) => {
  const formRef = useRef<HTMLFormElement>(null);

  // Set up form state using useState
  const [formData, setFormData] = useState<ProductInput>({
    email: '',
    name: "",
    lastName: "",
  });

  useEffect(() => {
    // If editing, populate form with existing product data
    if (productInput) {
      setFormData({
        email:productInput.email,
        name:productInput.name,
        lastName:productInput.lastName,
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
      email: '',
      name: "",
      lastName: "",
    });
  };

  return (
    <>
      <FormContainer ref={formRef} onSubmit={onSubmit}>
        <RowContainer>
          <Title>{action === 'add' ? 'Agregar Cliente' : 'Editar Producto'}</Title>
        </RowContainer>
        <BorderLine />

        <CustomInput
          label="email"
          type="text"
          placeholder="Nombre"
          maxLength={50}
          hasValue
          required
          name="email"
          value={formData.email}
          onChange={handleChange} // Handle change event
        />
        <CustomInput
          label="name"
          type="string"
          placeholder="Cantidad"
          maxLength={50}
          hasValue
          required
          name="name"
          value={formData.name}
          onChange={handleChange} // Handle change event
        />
        <CustomInput
          label="lastName"
          type="string"
          placeholder="lastName"
          maxLength={50}
          hasValue
          required
          name="lastName"
          value={formData.lastName}
          onChange={handleChange} // Handle change event
        />

        <button type="submit" className="mt-4 p-2 bg-blue-500 text-white rounded">
          {action === 'add' ? 'Agregar Producto' : 'Actualizar Producto'}
        </button>
      </FormContainer>
    </>
  );
};
