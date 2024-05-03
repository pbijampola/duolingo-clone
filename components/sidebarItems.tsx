"use client"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
type Props={
    label:string
    href:string
    icon?:any
  
}
export const SidebarItems = ({label,href,icon,}:Props) => {
    const pathname=usePathname()
    const isActive=pathname===href
    return (
        <Button variant={isActive ? "sidebarOutline":"sidebar"} className="justify-start h-[52px]" asChild>
           <Link href={href}>
           <Image src={icon} alt={label} width={24} height={24} className="mr-4" />

           {label}
           </Link>
        </Button>
    )
}