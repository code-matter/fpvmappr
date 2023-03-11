import Head from 'next/head'
import { Inter } from 'next/font/google'
import { getSession } from 'next-auth/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
            <main>im an app</main>
        </>
    )
}

export const getServerSideProps = async (context: any) => {
    const session = await getSession(context)
    console.log('session', session)
    if (!session) {
        return {
            redirect: { destination: '/login' },
        }
    }
    return { props: {} }
}
