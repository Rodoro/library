import connect from "@/utils/db"
import Book from "@/models/Book"
import { getToken } from "next-auth/jwt";
import User from "@/models/User";

export const GET = async (req: any) => {
    try {
        await connect();
        let items = await Book.find({ available: true })

        const session = await getToken({ req });

        if (!session) {
            return Response.json({ items })
        }

        const user = await User.findOne({ email: session.email });
        items = items.map(book => {
            if (user.tabs.favourites.includes(book.id)) {
                return {...book._doc, isActive: true};
            }
            return book;
        })

        return Response.json({ items })

    } catch (error) {
        console.error(error);
        return new Response("Ошибка сервера", { status: 500 })
    }
}