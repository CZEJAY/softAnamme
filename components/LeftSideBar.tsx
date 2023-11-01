"use client"

import { sidebarLinks } from "@/constants";
import { usePathname, useRouter }  from "next/navigation"
import Link from "next/link"
import Image from "next/image";
import { Command } from "./ui/command";
import SideBarDModal from "./commanModal";

const LeftSideBar = () => {
  const router = useRouter()
  const pathname = usePathname()
  return (
    <section className="custom-scrollbar leftsidebar">
      <div className="flex w-full flex-1 flex-col gap-6 px-6">
        {sidebarLinks.map((link) => {
          const isActive = (pathname.includes(link.route) && link.route.length > 1) || pathname === link.route;
          return (
            <Link
              key={link.label}
              href={link.route}
              className={`leftsidebar_link ${isActive && 'bg-primary-500'}`}
            >
              <Image 
                src={link.imgURL}
                alt={link.label}
                width={24}
                height={24}
              />

              <p className="text-light-1 max-lg:hidden">{link.label}</p>
            </Link>
          )
        })}
      </div>

      <div className="mt-10 px-6">
        <div className="block md:hidden">
          <div className="block cursor-pointer">
            <Image
              src="/assets/logout.svg"
              alt="logout"
              width={24}
              height={24}
            />
            <p className="text-light-1 max-lg:hidden gap-4 p-4">Logout</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LeftSideBar