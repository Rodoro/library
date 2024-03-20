import connect from "@/utils/db";
import User from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export const POST = async (req: Request) => {
    const { name, password, email } = await req.json();

    await connect();

    const existingUser = await User.findOne({ email });

    if (existingUser) {
        return new NextResponse("Пользователь уже зарегистрирован под этой почтой", { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = new User({
        name,
        password: hashedPassword,
        email,
    })

    try {
        await newUser.save();
        return new NextResponse("Пользователь зарегистрирован", { status: 200 });
    } catch (err: any) {
        console.log(err)
        return new NextResponse(err, { status: 500 })
    }
}