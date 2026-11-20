export interface MagentoPrice {
  value: number;
  currency: string;
}

export interface MagentoProduct {
  uid: string;
  sku: string;
  name: string;
  url_key: string;
  stock_status: string;

  small_image: {
    url: string;
    label: string | null;
  };

  price_range: {
    minimum_price: {
      regular_price: MagentoPrice;
      final_price: MagentoPrice;
    };
  };
}

export interface MagentoProductsResult {
  total_count: number;

  page_info: {
    current_page: number;
    page_size: number;
    total_pages: number;
  };

  items: MagentoProduct[];
}
