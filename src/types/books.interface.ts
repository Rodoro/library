export interface Book {
    id: number;
    name: string;
    author: string;
    genre: string;
    shelfNumber: number|string;
    shelvingNumber: number|string;
    available: boolean;
    isActive?: boolean;
}