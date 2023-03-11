import { createContext } from 'react'
import { MessageInstance } from 'antd/es/message/interface'

type PortalContext = {
    messageAPI?: MessageInstance
}

export default createContext<PortalContext>({})
