import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/common/Card'
import React from 'react'
import RegisterForm from './RegisterForm'
import Link from 'next/link'

const RegisterScreen = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='w-96'>
        <Card>
          <CardHeader>
            <CardTitle>Регистрация</CardTitle>
            <CardDescription>Создайте свой новый аккаунт!</CardDescription>
          </CardHeader>

          <CardContent>
            <RegisterForm />
          </CardContent>

          <CardFooter>
            <div className="text-center mb-6">- ИЛИ -</div>
            <Link href="/login" className="block text-center">
              Войдите в систему с существующей учетной записью
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default RegisterScreen
