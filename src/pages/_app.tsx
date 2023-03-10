import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import Portal from '@/components/layouts/Portal'
import { message } from 'antd'
import { NextPageWithLayout } from '@/types/page'
import PortalContext from '@/contexts/PortalContext'
import Head from 'next/head'

interface IApp extends AppProps {
    session: any
}
interface AppPropsWithLayout extends AppProps {
    Component: NextPageWithLayout
}

export default function App({
    Component,
    pageProps: { session, ...pageProps },
}: AppPropsWithLayout): AppPropsWithLayout | any {
    const getLayout =
        Component.getLayout ?? ((page: any) => <Portal>{page}</Portal>)

    const [messageAPI, contextHolder] = message.useMessage()
    return (
        <SessionProvider session={session}>
            <Head>
                <title>Create Next App</title>
                <meta
                    name='description'
                    content='Generated by create next app'
                />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <PortalContext.Provider value={{ messageAPI }}>
                {contextHolder}
                {getLayout(<Component {...pageProps} />)}
            </PortalContext.Provider>
        </SessionProvider>
    )
}
