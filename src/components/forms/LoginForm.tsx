import React from 'react'
import styles from './index.module.scss'
import { InputContainer, InputField, InputLabel, SubmitBotton } from '../../utils/styles'
import { Link } from 'react-router-dom'



function LoginForm() {
    const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
    }
    return (
        <form className={styles.form}>
            <InputContainer>
                <InputLabel htmlFor='email'>Email</InputLabel>
                <InputField id='email' type='email' />
            </InputContainer>
            <InputContainer>
                <InputLabel htmlFor='password'>Password</InputLabel>
                <InputField id='password' type='text' />
            </InputContainer>
            <SubmitBotton onClick={handleSubmit}>Login</SubmitBotton>
            <div style={{ width: '100%', display: 'flex', marginTop: 10, justifyContent: 'center' }}>
                <span style={{ marginRight: 5 }}>Don't have an account ? </span> <Link to={'/'}> register</Link>
            </div>
        </form>
    )
}

export default LoginForm