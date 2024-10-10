'use client'

import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
} from '@nextui-org/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const MyHeader = () => {
    const pathname = usePathname()
    return (
        <Navbar maxWidth="full">
            <NavbarContent justify="start">
                <NavbarBrand>
                    <p>My Portfolio</p>
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent justify="center">
                <NavbarItem isActive={pathname === '/'}>
                    <Link color="foreground" href="/" aria-current="page">
                        About
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={pathname === '/projects'}>
                    <Link
                        color="foreground"
                        href="/projects"
                        aria-current="page"
                    >
                        Projects
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={pathname === '/misc'}>
                    <Link color="foreground" href="#">
                        Misc
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end"></NavbarContent>
        </Navbar>
    )
}

export default MyHeader
