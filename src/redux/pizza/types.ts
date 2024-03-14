export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export type Pizza = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  type: number;
  size: number;
  count: number;
};

export interface IPizzaSliceState {
  items: Pizza[];
  status: Status;
}

export type SearchPizzaParams = {
  category: string;
  order: string;
  sortBy: string;
  search: string;
  currentPage: string;
};