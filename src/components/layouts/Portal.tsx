import { ReactElement } from 'react'
import useWaitForHydration from '@/hooks/useWaitForHydration'

interface IPortal {
    children: ReactElement
    page?: string
}

/**
 * Component : Layout > Portal
 * ---
 * Layout for the portal side of the application.
 */

const Portal = ({ children }: IPortal) => {
    const [isHydrated, loader] = useWaitForHydration()
    if (!isHydrated) return loader

    return (
        <div className='portal' data-cy='portal'>
            {/* <Nav /> */}
            <div>NAV</div>
            <section className='portal-content'>{children}</section>
        </div>
    )
}

export default Portal
