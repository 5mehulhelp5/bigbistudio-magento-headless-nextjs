export interface Category {
  id: string;
  name: string;
  slug: string | null;
  urlPath: string | null;
  path: string | null;
  level: number;
  position: number;
  childrenCount: number;
  includeInMenu: boolean;
  children: Category[];
}
