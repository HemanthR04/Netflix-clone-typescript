"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/netflix_logo.svg";
import { usePathname } from "next/navigation";
import { Bell, SearchIcon } from "lucide-react";
import Search from "../search/page";
import UserNav from "../components/UserNav";
import { Input } from "@/components/ui/input";

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
        </div>

        <div className="flex items-center gap-x-8">
          <UserNav />
        </div>
      </div>
      <div className="mt-24 space-y-8">
        <h1 className="text-3xl font-medium text-center">Use our AI to find top movie suggestions</h1>
        <Input className="max-w-4xl mx-auto" />
      </div>
    </>
  );
}
