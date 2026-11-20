export interface ProductPrice {
  regular: number;
  final: number;
  currency: string;
}

export interface Product {
  id: string;
  sku: string;
  name: string;
  slug: string;

  image: {
    url: string;
    alt: string;
  };

  price: ProductPrice;

  availability: "IN_STOCK" | "OUT_OF_STOCK";
}

export interface ProductList {
  items: Product[];

  pagination: {
    currentPage: number;
    pageSize: number;
    totalPages: number;
    totalCount: number;
  };
}
