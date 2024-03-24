import Book from "@/models/Book";
import User from "@/models/User";
import connect from "@/utils/db";
import { getToken } from "next-auth/jwt";

export const POST = async (req: any) => {
    try {
        await connect();
        const { id } = await req.json();
        let item = await Book.findOne({ id: id });
        if (!item) {
            return new Response("Книга не найдена", { status: 404 });
        }
        const session = await getToken({ req });

        if (!session) {
            return Response.json({ item })
        }
        const user = await User.findOne({ email: session.email });
        if (user.tabs.favourites.includes(id)) {
            item._doc.isActive = true;
        }
        if (user.tabs.plans.includes(id)) {
            item._doc.tab = "plans"
        } else if (user.tabs.read.includes(id)) {
            item._doc.tab = "read"
        } else if (user.tabs.history.includes(id)) {
            item._doc.tab = "history"
        }
        return Response.json({ item })
    } catch (error) {
        console.error(error);
        return new Response("Ошибка сервера", { status: 500 });
    }
}