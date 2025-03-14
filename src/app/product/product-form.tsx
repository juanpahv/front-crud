import { useRef, useEffect } from 'react';

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

  useEffect(() => {
    if (productInput && formRef.current) {
      const form = formRef.current;
      (form.elements.namedItem('name') as HTMLInputElement).value = productInput.name;
      (form.elements.namedItem('quantity') as HTMLInputElement).value = productInput.quantity.toString();
      (form.elements.namedItem('price') as HTMLInputElement).value = productInput.price.toString();
      (form.elements.namedItem('description') as HTMLInputElement).value = productInput.description;
      (form.elements.namedItem('category') as HTMLInputElement).value = String(productInput.category);
    }
  }, [productInput]);

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const input: ProductInput = {
      name: formData.get('name') as string,
      quantity: Number(formData.get('quantity')),
      price: Number(formData.get('price')),
      description: formData.get('description') as string,
      category: String(formData.get('category')),
    };

    handleSubmit(input);
    formRef.current.reset();
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
        />
        <CustomInput
          label="Cantidad"
          type="number"
          placeholder="Cantidad"
          maxLength={50}
          hasValue
          required
        />
        <CustomInput
          label="Precio"
          type="number"
          placeholder="Precio"
          maxLength={50}
          hasValue
          required
        />
        <CustomInput
          label="Descripción"
          type="text"
          placeholder="Descripción"
          maxLength={50}
          hasValue
          required
        />
        <CustomInput
          label="Categoría"
          type="text"
          placeholder="Categoría"
          maxLength={50}
          hasValue
          required
        />

        <button type="submit" className="mt-4 p-2 bg-blue-500 text-white rounded">
          {action === 'add' ? 'Agregar Producto' : 'Actualizar Producto'}
        </button>
      </FormContainer>
    </>
  );
};
