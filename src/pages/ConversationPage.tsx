import React from 'react'
import ConversationSlider from '../components/conversations/ConversationSlider'
import { Page } from '../utils/styles'
import { Outlet, useParams } from 'react-router-dom'
import ConversationChannelPage from './ConversationChannelPage'
import ConversationPanel from '../components/conversations/ConversationPanel'

function ConversationPage() {

    const { id } = useParams()
    return (
        <Page display='flex'>
            <ConversationSlider />
            {id &&
                <ConversationPanel />
            }
            {/* <Outlet /> */}
        </Page>
    )
}

export default ConversationPage