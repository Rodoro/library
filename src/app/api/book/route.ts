import Book from "@/models/Book";
import connect from "@/utils/db";

export const POST = async (req: any) => {
    try {
        await connect();
        const { id } = await req.json;
        const item = await Book.findById(id);
        if (!item) {
            return new Response("Книга не найдена", {status:404});
        }
        return Response.json({ item });
    } catch (error) {
        console.error(error);
        return new Response("Ошибка сервера", {status:500});
    }
}