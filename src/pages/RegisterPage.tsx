import React from 'react'
import RegisterForm from '../components/forms/RegisterForm'
import styled from 'styled-components'

const Container = styled.div`
   width: 100%;
   height: 100%;
   display: flex;   
   justify-content: center; 
   align-items: center;
   background-color: #1a1a1a;
`;
function AuthenticatinPage() {
    return (
        <Container> <RegisterForm /></Container>
    )
}

export default AuthenticatinPage