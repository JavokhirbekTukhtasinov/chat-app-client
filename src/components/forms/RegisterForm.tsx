import React from 'react'
import { InputContainer, InputField, InputLabel, SubmitBotton } from '../../utils/styles'
import styles from './index.module.scss'
import { Link } from 'react-router-dom'
function RegisterForm() {

    const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
    }
    return (
        <form className={styles.form}>
            <InputContainer>
                <InputLabel htmlFor='email'>Email</InputLabel>
                <InputField id='email' type='email' />
            </InputContainer>
            <section style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                <InputContainer style={{ marginRight: 5 }}>
                    <InputLabel htmlFor='firstName'>First Name</InputLabel>
                    <InputField id='firstName' type='text' />
                </InputContainer>
                <InputContainer style={{ marginLeft: 5 }}>
                    <InputLabel htmlFor='lastName'>Last Name</InputLabel>
                    <InputField id='lastName' type='text' />
                </InputContainer>
            </section>
            <InputContainer>
                <InputLabel htmlFor='password'>Password</InputLabel>
                <InputField id='password' type='text' />
            </InputContainer>
            <SubmitBotton onClick={handleSubmit}>Submit</SubmitBotton>
            <div style={{ width: '100%', display: 'flex', marginTop: 10, justifyContent: 'center' }}>
                <span style={{ marginRight: 5 }}>Already have an account ? </span> <Link to={'/login'}> login</Link>
            </div>
        </form>
    )
}

export default RegisterForm