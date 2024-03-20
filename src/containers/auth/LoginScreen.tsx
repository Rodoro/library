import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/common/Card'
import React from 'react'
import LoginForm from './LoginForm'

const LoginScreen = () => {
    return (
        <div className='flex flex-col items-center'>
            <div className='w-96'>
                <Card>
                    <CardHeader>
                        <CardTitle>Вход</CardTitle>
                        <CardDescription>Войдите в свой аккаунт!</CardDescription>
                    </CardHeader>

                    <CardContent>
                        <LoginForm />
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default LoginScreen