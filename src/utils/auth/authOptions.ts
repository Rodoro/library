import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import User from "@/models/User";
import connect from "@/utils/db";

export const authOptions: AuthOptions   = {
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            credentials: {
                name: { label: "Name", type: "text" },
                password: { label: "Password", type: "password" },
            },

            async authorize(credentials: any) {
                await connect();
                try {
                    const user = await User.findOne({ name: credentials.name });
                    if (user) {
                        const isPasswordCorrect = await bcrypt.compare(
                            credentials.password,
                            user.password
                        );
                        if (isPasswordCorrect) {
                            return user;
                        }
                    }
                } catch (err: any) {
                    throw new Error(err);
                }
            },
        })
    ],
    callbacks: {
        async jwt({ token, user, account, profile, isNewUser }: any) {
            if (user && user.role) {
                token.role = user.role;
            }
            return token;
        },
        async session({ session, token }: any) {
            if (token && token.role) {
                session.user.role = token.role;
            }
            return session;
        },
    },
}