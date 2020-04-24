type SearchCategory = Record<string, any>;

export interface SearchState {
  currentCategory: string;
  categories: SearchCategory;
}
