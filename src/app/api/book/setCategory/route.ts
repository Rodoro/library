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
        const { selectedOption, idBook } = await req.json();
        const user = await User.findOne({ email: session.email });

        let index = user.tabs.plans.indexOf(idBook);
        if (index !== -1) {
            user.tabs.plans.splice(index, 1)
        }
        index = user.tabs.history.indexOf(idBook);
        if (index !== -1) {
            user.tabs.history.splice(index, 1)
        }
        index = user.tabs.read.indexOf(idBook);
        if (index !== -1) {
            user.tabs.read.splice(index, 1)
        }
        if (selectedOption !== "nt") {
            user.tabs[selectedOption].push(idBook);
        }

        await user.save();
        return new Response("Значения обновлены", { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response("Ошибка сервера", { status: 500 })
    }
}