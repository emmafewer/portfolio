"use client";
import Link from "next/link";
import Image from "next/image";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <Navbar maxWidth={"2xl"}>
      <NavbarBrand>
        <Link href={"/"}>
          <Image
            src="/bicycle.svg"
            alt="bicycle"
            width={50}
            height={50}
            priority
          />
        </Link>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            color="default"
            href={pathname == "/resume" ? "/" : "/resume"}
            variant="bordered"
            radius={"full"}
          >
            {pathname == "/resume" ? "Home" : "Resume"}
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
