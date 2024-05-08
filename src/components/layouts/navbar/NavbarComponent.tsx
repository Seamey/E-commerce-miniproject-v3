"use client";

import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar } from "@nextui-org/react";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import { NavbarMenuItem } from "@nextui-org/react";
import { navbarItem } from "./menu";
import { BsCart4 } from "react-icons/bs";
import { useAppSelector } from "../../../redux/hooks";
import { useSession, signIn, signOut } from "next-auth/react"
import { usePathname, useRouter } from "next/navigation";

export default function NavbarComponent() {
  const pathname = usePathname()
  const route = useRouter()
  const add = useAppSelector((state) => state.counter.value)
  const { data: session } = useSession()
 
  if (session) {
    return (
      <Navbar>
        <NavbarBrand>
          <Image
            width={60}
            className="mr-4 rounded-full"
            height={60}
            src={"/assets/pic.jpg"}
            alt={"Logo"}
          />
          <p className="font-bold text-inherit">Shinee</p>
        </NavbarBrand>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {navbarItem.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full text-gray-700 hover:text-orange-350"
                //  color="warning"  
                href={item.path}
              >
                {item.title}
              </Link>
            </NavbarMenuItem>
          ))}

        </NavbarContent>

        <NavbarContent as="div" justify="end">
          <NavbarItem className="flex items-center">
            <Button onClick={()=>route.push("/cart")} className="relative bg-white items-center">
              <BsCart4 className="text-2xl text-center mt-2 opacity-1" />
              <div className="absolute w-[20px] h-[20px] text-center bg-red-400 rounded-[50%] top-0 bottom-10 left-4">
                {add}
              </div>

            </Button>

          </NavbarItem>

          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="secondary"
                // name={session.user?.name}
                size="sm"
                src={session.user?.image as string}
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">{session.user?.email}</p>
              </DropdownItem>

              <DropdownItem key="logout" color="danger" onClick={() => signOut()}>
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>

        </NavbarContent>
      </Navbar>
    );
  }
 
     return (
    <Navbar>
      <NavbarBrand>
        <Image
          width={60}
          className="mr-4 rounded-full"
          height={60}
          src={"/assets/pic.jpg"}
          alt={""}
        />
        <p className="font-bold text-inherit">Shinee</p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {navbarItem.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full text-gray-700 hover:text-orange-350" 
              href={item.path}
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}

      </NavbarContent>

      <NavbarContent as="div" justify="end">
        <NavbarItem className="flex items-center">
          <Button className="relative bg-white">
            <BsCart4 className="text-2xl text-center mt-2 opacity-1" />
            <div className="absolute w-[20px] h-[20px] text-center bg-red-400 rounded-[50%] top-0 bottom-10 left-4">
              {add}
            </div>
          </Button>
          <Button onClick={()=>route.push(`/login`)} className="mx-6" color="warning"  variant="flat">
            Login
          </Button>

        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
  
 
}
