"use client"
import FormButton from '@/components/interface/FormButton'
import FormInput from '@/components/interface/FormInput'
import React, { useEffect, useState } from 'react'
import Error from '@/components/common/Error'
import { useRouter } from 'next/navigation'
import { signIn, useSession } from 'next-auth/react'

const LoginForm = () => {
    const [error, setError] = useState("");
    const router = useRouter();
    const { data: session, status: sessionStatus } = useSession();

    useEffect(() => {
        if (sessionStatus === "authenticated") {
            router.replace("/");
        }
    }, [sessionStatus, router]);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const name = e.target[0].value;
        const password = e.target[1].value;

        if (!password || password.length < 8) {
            setError("Ошибка пароля");
            return;
        }

        const res = await signIn("credentials", {
            redirect: false,
            name,
            password,
        });

        if (res?.error) {
            setError("Пароль не совпал");
            if (res?.url) router.replace("/");
        } else {
            setError("");
        }
    };

    if (sessionStatus === "loading") {
        return <h1>Загрузка...</h1>;
    }

    return (
        <form onSubmit={handleSubmit}>
            <FormInput
                label='Имя'
                type='text'
                placeholder='Имя'
                required
            />
            <FormInput
                label='Пароль'
                type='password'
                placeholder='Пароль'
                required
            />
            <FormButton type="submit">Зарегистрироватся</FormButton>
            <Error text={error} />
        </form>
    )
}

export default LoginForm
