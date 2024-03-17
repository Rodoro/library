import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/common/Card'
import React from 'react'
import RegisterForm from './RegisterForm'

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
        </Card>
      </div>
    </div>
  )
}

export default RegisterScreen
