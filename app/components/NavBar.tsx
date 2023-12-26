import Image from "next/image";
import Link from "next/link";
import Logo from '../../public/netflix_logo.svg'

interface linkProps {
    name:string;
    href:string
}

const links : linkProps[]= [
    { name: "Home", href: "/home" },
  { name: "Tv Shows", href: "/home/shows" },
  { name: "Movies", href: "/home/movies" },
  { name: "Recently Added", href: "/home/recently" },
  { name: "My List", href: "/home/user/list" },
]

export default function Navbar(){
    return (
        <>
            <div className="w-full max-w-7xl mx-auto items-center justify-between px-5 sm:px-6 py-5 lg:py-8 flex">
                <div className="flex items-center">
                    <Link href='/home' className="w-32">
                        <Image 
                        src={Logo}
                        alt="Netflex Logo"
                        priority
                        />
                    </Link>
                    <ul className="lg:flex gap-x-4 ml-14 hidden"></ul>
                </div>
            </div>
        </>
    )
}