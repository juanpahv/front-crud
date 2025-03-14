export type Invoice = {
  id: number;
  total: number;
  balance: number;
  client: Client;
  status: Status;
};

export type Product = {
  id: number;
  name: string;
  quantity: number;
  price: number;
  description: string;
  category: Category;
};

export type DetailProductInvoice = {
  id: number;
  quantity: number;
  unitPrice: number;
  product: Product;
  invoice: Invoice;
}

export type Employee = {
  id: number;
  username: string;
  name: string;
  lastName: string;
  birthDate: string;
}

export type Category = {
  id: number;
  name: string;
};

export type Client = {
  id: number;
  name: string;
  lastName: string;
  email: string;
};

export type Status = {
  id: number;
  name: string;
}