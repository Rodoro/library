"use client"
import Button from '@/components/interface/Button';
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import React from 'react'
import BookSlider from './BookSlider';
import BookFilter from '@/components/BookFilter';

const Screen = () => {
    const router = useRouter();
    const { data: session, status: sessionStatus } = useSession();

    if (sessionStatus === "loading") {
        return <p>Загрузка...</p>
    }

    return (
        <>
            {session && session.user?.role === 'admin' ? (
                <BookSlider />
            ) : (
                <div className="flex flex-col items-center justify-center h-screen">
                    <h1>У вас нету доступа к это странице</h1>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => { router.replace("/") }}>На главную</button>
                </div>
            )}
        </>

    )
}

export default Screen
