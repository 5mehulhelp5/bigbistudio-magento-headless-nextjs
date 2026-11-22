export interface MagentoCategory {
  uid: string;
  name: string | null;
  url_key: string | null;
  url_path: string | null;
  path: string | null;
  level: number | null;
  position: number | null;
  children_count: string | null;
  include_in_menu: number | null;
  children?: MagentoCategory[] | null;
}

export interface MagentoCategoriesResult {
  categoryList: MagentoCategory[];
}
