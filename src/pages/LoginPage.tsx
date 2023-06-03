import React from 'react'
import LoginForm from '../components/forms/LoginForm'
import styled from 'styled-components'

const Container = styled.div`
   width: 100%;
   height: 100%;
   display: flex;   
   justify-content: center; 
   align-items: center;
   background-color: #1a1a1a;
`;
function LoginPage() {
    return (
        <Container><LoginForm /></Container>
    )
}

export default LoginPage