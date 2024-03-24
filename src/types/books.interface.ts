export interface Book {
    id: number;
    name: string;
    author: string;
    genre: string;
    shelfNumber: number;
    shelvingNumber: number;
    available: boolean;
    isActive?: boolean;
}