import React from 'react'
import { InputContainer, InputField, InputLabel, SubmitBotton } from '../../utils/styles'
import styles from './index.module.scss'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
function RegisterForm() {
    const { handleSubmit, register, formState: { errors } } = useForm()
    const onSubmit = (data: any) => {
        console.log(data)
    }
    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <InputContainer>
                <InputLabel htmlFor='email'>Email</InputLabel>
                <InputField id='email' type='email' {...register('email', { required: 'Email is requird!' })} />
            </InputContainer>
            <section style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                <InputContainer style={{ marginRight: 5 }}>
                    <InputLabel htmlFor='firstName'>First Name</InputLabel>
                    <InputField id='firstName' type='text' {...register('firstName', { required: 'First Name is required!' })} />
                </InputContainer>
                <InputContainer style={{ marginLeft: 5 }}>
                    <InputLabel htmlFor='lastName'>Last Name</InputLabel>
                    <InputField id='lastName' type='text'   {...register('lasttName', { required: 'Last Name is required!' })} />
                </InputContainer>
            </section>
            <InputContainer>
                <InputLabel htmlFor='password'>Password</InputLabel>
                <InputField id='password' type='text'  {...register('password', { required: 'Password is required!' })} />
            </InputContainer>
            <SubmitBotton >Submit</SubmitBotton>
            <div style={{ width: '100%', display: 'flex', marginTop: 10, justifyContent: 'center' }}>
                <span style={{ marginRight: 5 }}>Already have an account ? </span> <Link to={'/login'}> login</Link>
            </div>
        </form>
    )
}

export default RegisterForm