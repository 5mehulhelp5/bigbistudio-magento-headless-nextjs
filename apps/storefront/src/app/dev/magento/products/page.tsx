import { Suspense } from "react";
import { getProducts } from "@/lib/commerce/products";

export default async function MagentoProductsPage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-semibold">Magento Products</h1>
      <Suspense fallback={<p>Loading Magento products...</p>}>
        <MagentoProducts />
      </Suspense>
    </main>
  );
}

async function MagentoProducts() {
  const products = await getProducts({
    pageSize: 12,
    currentPage: 1,
  });

  return (
    <>
      <p className="mt-2 text-sm text-gray-500">Total: {products.pagination.totalCount}</p>
      <pre className="mt-6 overflow-auto rounded-lg p-4 text-sm">
        {JSON.stringify(products, null, 2)}
      </pre>
    </>
  );
}
