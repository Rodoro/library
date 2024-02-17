import connect from "@/utils/db";
import Book from "@/models/Book"
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
    try {
        await connect();
        const newBook = new Book({
            id: 1,
            name: "Золотая рыбка",
            author: "Пушкин",
            genre: "Сказка",
            shelfNumber: 4,
            shelvingNumber: 2,
            available: true
        })
        await newBook.save();
        return new NextResponse("Книга создана")
    } catch (error){
        console.error(error);
        return new Response("Ошибка сервера", {status:500})
    }
}