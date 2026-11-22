import "server-only";

import { magentoFetch } from "@/lib/magento/client";
import { CATEGORIES_QUERY } from "@/lib/magento/queries/categories";

import type { MagentoCategoriesResult, MagentoCategory } from "@/lib/magento/types/category";
import type { Category } from "@/lib/commerce/types/category";

function mapMagentoCategory(category: MagentoCategory): Category {
  return {
    id: category.uid,
    name: category.name ?? "",
    slug: category.url_key,
    urlPath: category.url_path,
    path: category.path,
    level: category.level ?? 0,
    position: category.position ?? 0,
    childrenCount: Number(category.children_count ?? 0),
    includeInMenu: category.include_in_menu === 1,
    children: (category.children ?? []).map(mapMagentoCategory),
  };
}

export async function getCategories(): Promise<Category[]> {
  const data = await magentoFetch<MagentoCategoriesResult>({
    query: CATEGORIES_QUERY,
  });

  return data.categoryList.map(mapMagentoCategory);
}
