import connect from "@/utils/db"
import Book from "@/models/Book"
import User from "@/models/User";
import { getToken } from "next-auth/jwt"


export const POST = async (req: any) => {
    const session = await getToken({ req });

    try {
        if (!session) {
            return new Response("Неавторизованы", { status: 401 })
        }

        await connect();
        const { category } = await req.json();
        const user = await User.findOne({ email: session.email });
        let books = await Book.find({
            id: { $in: user.tabs[category] }
        });

        books = books.map(book => {
            if (user.tabs.favourites.includes(book.id)) {
                return {...book._doc, isActive: true};
            }
            return book;
        })

        return Response.json({ books });

    } catch (error) {
        console.error(error);
        return new Response("Ошибка сервера", { status: 500 })
    }
}