import React from 'react'
import { ConversationChannelPageStyle } from '../../utils/styles'
import { useParams } from 'react-router-dom'

function ConversationPanel() {
    const params = useParams()
    return (
        <ConversationChannelPageStyle>conversation id : {params.id}</ConversationChannelPageStyle>
    )
}

export default ConversationPanel