"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import ThemeSwitcher from "./ThemeSwitcher";
import { FaShieldAlt } from "react-icons/fa";
import { FaBookBookmark } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

import { FaDiscord } from "react-icons/fa";


export default function NavBar() {
  const menuItems = ["Documentation", "Purchase", "Support Discord"];

  return (
    <Navbar isBlurred maxWidth="">
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>
      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <span className="font-bold text-inherit text-lg">WX AntiCheat</span>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-5" justify="center">
        <NavbarBrand>
          <span className="font-bold text-2xl flex gap-3 justify-left items-left">
            <FaShieldAlt className="my-1" /> WX AntiCheat
          </span>
        </NavbarBrand>
        <NavbarItem>
          <Button as={Link} href="https://docs.0wx.space" variant="light">
            <FaBookBookmark /> Documentation
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} href="#pricing" variant="light">
            <FaShoppingCart /> Purchase
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} href="https://dsc.gg/wxscripts" variant="light">
            <FaDiscord />Support Discord
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden sm:flex">

        </NavbarItem>
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full" href="#" size="lg" color="foreground">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
