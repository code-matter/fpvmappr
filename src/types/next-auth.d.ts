import { User } from 'models/user.model'

declare module 'next-auth' {
    interface Session {
        idToken: string
        accessToken: string
        user: User
    }

    interface Account {
        id_token: string
        access_token?: string
        user: User
    }
}
