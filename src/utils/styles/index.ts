import styled from 'styled-components'


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