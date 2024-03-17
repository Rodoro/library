import FormInput from '@/components/interface/FormInput'
import React from 'react'

const RegisterForm = () => {
    return (
        <form>
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
        </form>
    )
}

export default RegisterForm
