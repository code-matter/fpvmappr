import { IncomingMessage } from 'http'
import { NextPage } from 'next'
import { ReactElement, ReactNode } from 'react'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
}

export interface IServerSideProps extends IncomingMessage {
    locale: string
}
