import connect from "@/utils/db"
import Book from "@/models/Book"
import { getToken } from "next-auth/jwt";
import User from "@/models/User";

export const GET = async (req: any) => {
    try {
        //Подключение к БД
        await connect();
        //Получения списка книг из БД с параметром available: true
        let items = await Book.find({ available: true })
        //Получаем JWT из запроса и находим пользователя под ним
        const session = await getToken({ req });
        //Проверяем регистрацию
        if (!session) {
            return Response.json({ items })
        }
        //Если пользователь зарегистрирован то получаем его данные из БД
        const user = await User.findOne({ email: session.email });
        //Полученый список книг преаброзуем с учетом данных пользователя
        items = items.map(book => {
            if (user.tabs.favourites.includes(book.id)) {
                return {...book._doc, isActive: true};
            }
            return book;
        })
        //Возвращаем список книг
        return Response.json({ items })

    } catch (error) {
        //Возврат ошибки в случае чего
        console.error(error);
        return new Response("Ошибка сервера", { status: 500 })
    }
}

export const POST = async (req: any) => {
    try {
        await connect();
        const items = await Book.find({})
        return Response.json({ items })

    } catch (error) {
        console.error(error);
        return new Response("Ошибка сервера", { status: 500 })
    }
}
