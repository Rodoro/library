import connect from "@/utils/db"
import Book from "@/models/Book"

export const GET = async (req: Request) => {
    try {
        await connect();
        const items = await Book.find({ available: true })
        return Response.json({ items })
    } catch (error) {
        console.error(error);
        return new Response("Ошибка сервера", {status:500})
    }
}