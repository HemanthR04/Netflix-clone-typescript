"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/netflix_logo.svg";
import { usePathname } from "next/navigation";
import { Bell, SearchIcon } from "lucide-react";
import UserNav from "./UserNav";
import Search from "../search/page";

interface linkProps {
  name: string;
  href: string;
}

const links: linkProps[] = [
  { name: "Home", href: "/home" },
  { name: "Tv Shows", href: "/home/shows" },
  { name: "Movies", href: "/home/movies" },
  { name: "Recently Added", href: "/home/recently" },
  { name: "My List", href: "/home/user/list" },
];

export default function Navbar() {
  const pathName = usePathname();
  return (
    <>
      <div className="w-full max-w-7xl mx-auto items-center justify-between px-5 sm:px-6 py-5 lg:py-8 flex">
        <div className="flex items-center">
          <Link href="/home" className="w-32">
            <Image src={Logo} alt="Netflex Logo" priority />
          </Link>
          <ul className="lg:flex gap-x-4 ml-14 hidden">
            {links.map((link, idx) => (
              <div key={idx}>
                {pathName === link.href ? (
                  <li>
                    <Link
                      href={link.href}
                      className="text-white font-semibold underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ) : (
                  <li>
                    <Link
                      href={link.href}
                      className="text-gray-400 font-normal"
                    >
                      {link.name}
                    </Link>
                  </li>
                )}
              </div>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-x-8">
        <Link href="/search">
            <SearchIcon className="w-5 h-5 text-gray-300 cursor-pointer"/>
          </Link>
          <Bell className="w-5 h-5 text-gray-300 cursor-pointer" />
          <UserNav />
        </div>
      </div>
    </>
  );
}
