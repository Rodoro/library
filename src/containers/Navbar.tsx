"use client"
import Button from '@/components/interface/Button';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {
    const { data: session } = useSession();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav>
            <ul className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-10'>
                <div className='block md:hidden'>
                    <Link href="/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"><path fill="#3F95D4" d="M6 4h4c.553 0 1 .449 1 1.002v19.998c0 .553-.447 1-1 1h-4c-.553 0-1-.447-1-1v-19.999c0-.552.447-1.001 1-1.001z" /><path fill="#367FB4" d="M7 25v-19.999c0-.552.447-1.001 1-1.001h-2c-.553 0-1 .449-1 1.001v19.999c0 .553.447 1 1 1h2c-.553 0-1-.448-1-1z" /><path fill="#D99666" d="M0 26h32v6h-32v-6z" /><path fill="#F7CB8B" d="M5 19h6v4.002h-6v-4.002z" /><path fill="#349886" d="M12 0h6c.553 0 1 .449 1 1.002v23.998c0 .553-.447 1-1 1h-6c-.553 0-1-.447-1-1v-23.999c0-.552.447-1.001 1-1.001z" /><path fill="#9ACCC3" d="M14 22.001h2v-14.001h-2v14.001zm0-18.001v2h2v-2h-2z" /><path fill="#E2574C" d="M20 6h6c.553 0 1 .449 1 1v18c0 .553-.447 1-1 1h-6c-.553 0-1-.447-1-1v-18c0-.551.447-1 1-1z" /><rect x="5" y="19" fill="#D2AD77" width="2" height="4.002" /><path fill="#2C8172" d="M13 25v-23.999c0-.552.447-1.001 1-1.001h-2c-.553 0-1 .449-1 1.001v23.999c0 .553.447 1 1 1h2c-.553 0-1-.448-1-1z" /><path fill="#C04A40" d="M21 25v-18c0-.551.447-1 1-1h-2c-.553 0-1 .449-1 1v18c0 .553.447 1 1 1h2c-.553 0-1-.448-1-1z" /><path fill="#F7CB8B" d="M19 16h8v-4h-8v4zm0-6v1.002h8v-1.002h-8z" /><g fill="#D2AD77"><rect x="19" y="10" width="2" height="1.002" /><rect x="19" y="12" width="2" height="4" /></g></svg>
                    </Link>
                </div>
                <div className="hidden md:block" />
                <button onClick={() => { setIsOpen(!isOpen) }} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden">
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className={` w-full md:block md:w-auto ${isOpen ? 'block' : 'hidden'}`}>
                    <div className="flex flex-col p-4 md:p-10 gap-y-4 mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
                        <Link href="/">
                            <li>Главная</li>
                        </Link>
                        <Link href="/bookmarks">
                            <li>Закладки</li>
                        </Link>
                        <hr className="h-px border-0 bg-gray-700" />
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
                </div>
            </ul>
        </nav>
    )
}

export default Navbar
