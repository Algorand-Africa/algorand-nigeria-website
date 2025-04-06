export interface PaginationResponse<T> {
  data: T[];
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  numOfItemsPerPage: number;
  itemCount: number;
  pageCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export interface FetchPaginatedDataDto {
  order?: 'asc' | 'desc';
  page?: number;
  numOfItemsPerPage?: number;
  searchTerm?: string;
}

export interface Paginated<T> {
  data: T[];
  total: number;
  pageSize: number;
  hasNext: boolean;
  hasPrevious: boolean;
  page: number;
}
