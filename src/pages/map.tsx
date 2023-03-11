import { getSession, useSession } from 'next-auth/react'

interface Imap {
    session: any
}

const Map = ({}: Imap) => {
    const { data: session } = useSession()
    return <div>{session?.user?.email}</div>
}

export default Map
