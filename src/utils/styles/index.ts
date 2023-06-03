import styled from 'styled-components'
import { PageProps } from './styleTypes'


export const DARK = '#13131313'

export const GRAY = '#8f8f8f'

export const InputField = styled.input`
font-family: "Inter";
background-color: inherit;
outline: none;
border: none;
color: #fff;
font-size: 18px;
width: 100%;
box-sizing: border-box;
padding: 0
`


export const InputContainer = styled.div`
background-color: #131313;
padding: 12px 16px;
border-radius: 10px;
width: 100%;
box-sizing: border-box;
margin: 5px 0;
`

export const InputLabel = styled.label`
color: #8f8f8f;
display: block;
margin: 4px 0;
`



export const SubmitBotton = styled.button`
background-color: #2b09ff;
color: #fff;
width: 100%;
margin-top: 5px;
padding-block: 20px;
outline: none;
border: none;
font-size: 18px;
border-radius: 10px;
font-family: 'Inter';
cursor: pointer;
&:hover {
   opacity: 0.8
};

&:focus{
    border: 1px solid #ffff;
}
`


export const Page = styled.div<PageProps>`
background-color: #1a1a1a;
width: 100%;
height: 100%;
justify-content: ${({ justifyContent }) => justifyContent};
display: ${({ display }) => display};
align-items: ${({ alignItems }) => alignItems}
`

export const ConversationSidebarStyle = styled.aside`
width: 350px;
height: 100%;
background-color: #1f1f1f;
border-right: 1px solid #aaa;
`


export const ConversationChannelPageStyle = styled.div``