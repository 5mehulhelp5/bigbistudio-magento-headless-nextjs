import { Suspense } from "react";

import { getCategories } from "@/lib/commerce/categories";

export default function MagentoCategoriesPage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-semibold">Magento Categories</h1>

      <Suspense fallback={<p className="mt-4">Loading categories...</p>}>
        <CategoryList />
      </Suspense>
    </main>
  );
}

async function CategoryList() {
  const categories = await getCategories();

  return (
    <>
      <p className="mt-2 text-sm text-gray-500">Total root categories: {categories.length}</p>
      <pre className="mt-6 overflow-auto rounded-lg p-4 text-sm">
        {JSON.stringify(categories, null, 2)}
      </pre>
    </>
  );
}
