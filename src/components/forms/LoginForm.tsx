import React from 'react'
import styles from './index.module.scss'
import { InputContainer, InputField, InputLabel, SubmitBotton } from '../../utils/styles'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'



function LoginForm() {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = (data: any) => {

    }
    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <InputContainer>
                <InputLabel htmlFor='email'>Email</InputLabel>
                <InputField id='email' type='email' {...register('email', { required: 'Email is required!' })} />
            </InputContainer>
            <InputContainer>
                <InputLabel htmlFor='password'>Password</InputLabel>
                <InputField id='password' type='password'  {...register('password', { required: 'Password is required!' })} />
            </InputContainer>
            <SubmitBotton >Login</SubmitBotton>
            <div style={{ width: '100%', display: 'flex', marginTop: 10, justifyContent: 'center' }}>
                <span style={{ marginRight: 5 }}>Don't have an account ? </span> <Link to={'/'}> register</Link>
            </div>
        </form>
    )
}

export default LoginForm