"use client"
import FormButton from '@/components/interface/FormButton'
import FormInput from '@/components/interface/FormInput'
import Error from '@/components/common/Error'
import React, { FormEvent, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

const RegisterForm = () => {
    const [error, setError] = useState("");
    const router = useRouter();
    const { data: session, status: sessionStatus } = useSession();

    useEffect(() => {
        if (sessionStatus === "authenticated") {
            router.replace("/");
        }
    }, [sessionStatus, router]);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const name = (e.currentTarget[0] as HTMLFormElement).value;
        const password = (e.currentTarget[1] as HTMLFormElement).value;
        const email = (e.currentTarget[2] as HTMLFormElement).value;

        if (!password || password.length < 8) {
            setError("Ошибка пароля, должно быть не менее 8 символов")
            return;
        }

        try {
            const res = await fetch("/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    password,
                    email,
                })
            })
            if (res.status === 400) {
                setError("Этот пользователь уже зарегистрован с данной почтой")
            }
            if (res.status === 200) {
                setError("");
                router.push("/login");
            }
        } catch (error) {
            setError("Ошибка, повторите попытку позже");
            console.log(error);
        }
    }

    if (sessionStatus === "loading") {
        return <h1>Загрузка...</h1>
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
            <FormInput
                label='Почта'
                type='email'
                placeholder='Почта'
                required
            />
            <FormButton type="submit">Зарегистрироватся</FormButton>
            <Error text={error} />
        </form>
    )
}

export default RegisterForm
