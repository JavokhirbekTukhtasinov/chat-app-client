import React from 'react'
import { ConversationSidebarStyle } from '../../utils/styles'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import { FaPenSquare } from 'react-icons/fa'
const Header = styled.header`
display: flex;
width: inherit;
justify-content: space-between;
padding: 15px;
box-sizing: border-box;
border-bottom: 1px solid #aaaa;

`;

function ConversationSlider() {
    const navigate = useNavigate()
    return (
        <ConversationSidebarStyle>
            <Header>
                <h1>Conversations</h1>
                <FaPenSquare size={35} />
            </Header>
        </ConversationSidebarStyle>
    )
}

export default ConversationSlider