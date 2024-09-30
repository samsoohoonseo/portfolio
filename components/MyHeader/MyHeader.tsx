import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
} from '@nextui-org/react'
import Link from 'next/link'

const MyHeader = () => {
    return (
        <Navbar maxWidth="full">
            <NavbarContent justify="start">
                <NavbarBrand>
                    <p>My Portfolio</p>
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent justify="center">
                <NavbarItem isActive>
                    <Link color="foreground" href="/" aria-current="page">
                        About
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link
                        color="foreground"
                        href="/projects"
                        aria-current="page"
                    >
                        Projects
                    </Link>
                </NavbarItem>
                <NavbarItem>
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
