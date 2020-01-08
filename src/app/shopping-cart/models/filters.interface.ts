export interface Filters {
  manufacturer: Category[];
  season: Category[];
  for: Category[];
  material: Category[];
  size: Category[];
}

export interface Category {
  name: string;
  checked: boolean;
}

export interface UtilityFilters {
  manufacturer: string[];
  season: string[];
  for: string[];
  material: string[];
  size: string[];
}