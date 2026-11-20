import "server-only";

import { magentoFetch } from "@/lib/magento/client";
import { PRODUCTS_QUERY } from "@/lib/magento/queries/products";

import type { MagentoProductsResult } from "@/lib/magento/types/product";

import type { Product, ProductList } from "@/lib/commerce/types/product";

interface GetProductsParams {
  search?: string;
  pageSize?: number;
  currentPage?: number;
}

function mapMagentoProduct(product: MagentoProductsResult["items"][number]): Product {
  const price = product.price_range.minimum_price;

  return {
    id: product.uid,
    sku: product.sku,
    name: product.name,
    slug: product.url_key,

    image: {
      url: product.small_image.url,
      alt: product.small_image.label ?? product.name,
    },

    price: {
      regular: price.regular_price.value,
      final: price.final_price.value,
      currency: price.final_price.currency,
    },

    availability: product.stock_status === "IN_STOCK" ? "IN_STOCK" : "OUT_OF_STOCK",
  };
}

export async function getProducts(params: GetProductsParams = {}): Promise<ProductList> {
  const { search = "", pageSize = 12, currentPage = 1 } = params;

  const data = await magentoFetch<{ products: MagentoProductsResult }>({
    query: PRODUCTS_QUERY,
    variables: {
      search,
      pageSize,
      currentPage,
    },
  });

  return {
    items: data.products.items.map(mapMagentoProduct),

    pagination: {
      currentPage: data.products.page_info.current_page,
      pageSize: data.products.page_info.page_size,
      totalPages: data.products.page_info.total_pages,
      totalCount: data.products.total_count,
    },
  };
}
