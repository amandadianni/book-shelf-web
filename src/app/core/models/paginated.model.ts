export class Paginated<T> {
    public content!: T[];
    public empty!: boolean;
    public first!: boolean;
    public last!: boolean;
    public number!: number;
    public numberOfElements!: number;
    public pageable!: {
        offset: number,
        pageNumber: number,
        pageSize: number,
        paged: boolean,
        sort: {
          empty: boolean,
          sorted: boolean,
          unsorted: boolean
        },
        unpaged: boolean
    };
    public size!: number;
    public sort!: {
        empty: boolean,
        sorted: boolean,
        unsorted: boolean
    };
    totalElements!: number;
    totalPages!: number;
}
