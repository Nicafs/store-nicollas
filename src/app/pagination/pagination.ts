export interface IPagination {
    currentPage: number;
    recordsPerPage: number;
    totalRecords: number;
    columnOrder: string;
}

export class Pagination implements IPagination {
    currentPage = 0;
    recordsPerPage = 8;
    totalRecords = 0;
    columnOrder = '';
}
