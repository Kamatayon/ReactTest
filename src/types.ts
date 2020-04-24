export interface CatalogCategory {
  title: string;
  links: [string, string][];
  image: string;
}
import { SearchState } from "store/modules/search";
export interface StoreRootState {
  search: SearchState;
}
