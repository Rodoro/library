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

    const { category } = await req.json();
    const user = await User.findOne({ email: session.email });
    const books = await Book.find({
        id: { $in: user.tabs[category] }
      });

    return Response.json({books});

    } catch (error) {
        console.error(error);
        return new Response("Ошибка сервера", { status: 500 })
    }
}