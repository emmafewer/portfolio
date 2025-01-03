'use client'
import Link from "next/link";
import Image from "next/image";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button} from "@nextui-org/react";


export default function NavBar() {
    return (
            <Navbar isBordered>
                <NavbarBrand>
                    <Image src="/cat-typing3.png" alt="logo" width={70} height={70} />
                </NavbarBrand>
                <NavbarContent justify="end">
                    <NavbarItem>
                        <Button as={Link} color="primary" href="/resume" variant="flat">
                            Resume
                        </Button>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
    );
}