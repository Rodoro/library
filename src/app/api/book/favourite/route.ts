import User from "@/models/User";
import connect from "@/utils/db";
import { getToken } from "next-auth/jwt"

export const POST = async (req: any) => {
    const session = await getToken({ req });

    try {
        if (!session) {
            return new Response("Неавторизованы", { status: 401 })
        }

        await connect();
        const { number } = await req.json();
        let res;
        const user = await User.findOne({ email: session.email });
        console.log(user.tabs.favourites)
        const index = user.tabs.favourites.indexOf(number);
        if (index === -1) {
            user.tabs.favourites.push(number);
            res = true;
        } else {
            user.tabs.favourites.splice(index, 1);
            res = false;
        }
        await user.save();
        return Response.json({ res });
    } catch (error) {
        console.error(error);
        return new Response("Ошибка сервера", { status: 500 })
    }
}