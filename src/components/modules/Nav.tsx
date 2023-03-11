import Link from 'next/link'

export type TNav = {}

const Nav = ({}: TNav) => {
    return (
        <div>
            <Link href='/'>Home</Link>
            <Link href='map'>Map</Link>
        </div>
    )
}

export default Nav
