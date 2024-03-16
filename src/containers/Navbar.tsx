import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav>
            <ul className='container flex justify-around items-center mt-6 mb-6'>
                <div className='flex gap-2'>
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
                    <Link href="/login">
                        <li>Войти</li>
                    </Link>
                    <Link href="/register">
                        <li>Зарегистрироватся</li>
                    </Link>
                </div>
            </ul>
        </nav>
    )
}

export default Navbar
