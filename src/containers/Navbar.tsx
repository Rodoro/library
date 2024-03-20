"use client"
import Button from '@/components/interface/Button';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    const { data: session } = useSession();
    return (
        <nav>
            <ul className='flex justify-between items-center m-10'>
                <div>
                    <Link href="/">
                        <li>Логотипчик</li>
                    </Link>
                </div>
                <div className='flex gap-6'>
                    <Link href="/">
                        <li>Главная</li>
                    </Link>
                    <Link href="/bookmarks">
                        <li>Закладки</li>
                    </Link>
                </div>
                <div className='flex gap-2'>
                    {!session ? (
                        <>
                            <Link href="/login">
                                <li>Войти</li>
                            </Link>
                            <Link href="/register">
                                <li>Зарегистрироватся</li>
                            </Link>
                        </>
                    ) : (
                        <>
                            <div className="mr-4">
                                {session.user?.name}
                            </div>
                            <li>
                                <Button onClick={() => { signOut() }}>Выйти</Button>
                            </li>
                        </>
                    )}
                </div>
            </ul>
        </nav>
    )
}

export default Navbar
