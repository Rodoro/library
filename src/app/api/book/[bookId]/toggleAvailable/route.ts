import Book from "@/models/Book";

import connect from "@/utils/db";
import { getToken } from "next-auth/jwt";

export const PUT = async (req: any, { params }: { params: { bookId: string } }) => {
    const session = await getToken({ req });

    try {
        if (!session) {
            return new Response("Неавторизованы", { status: 401 })
        }
        if (session.user?.role === "admin") {
            return new Response("Ошибка проверки роли", { status: 401 })
        }

        await connect();
        const book = await Book.findOne({ id: params.bookId });
        //TODO: add if in 404 book
        const res = await Book.findOneAndUpdate({ id: params.bookId }, {$set: {available: !book.available}});
        return Response.json({ res })
    } catch (error) {
        console.error(error);
        return new Response("Ошибка сервера", { status: 500 });
    }
}