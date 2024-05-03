import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { SidebarItems } from "./sidebarItems"
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs"
import { Loader } from "lucide-react"

type Props = {
    className?: string
}
const Links =[
    {
        label:"Learn",
        href:"/learn",
        icon:"/learning.png"
    },
    {
        label:"Leaderboard",
        href:"/leaderboard",
        icon:"/ranking.png"
    },{
        label:"Quests",
        href:"/quests",
        icon:"/quests.png"
    },
    {
        label:"Shop",
        href:"/shop",
        icon:"/shop.png"
    }
]

export const Sidebar = ({ className }: Props) => {
    return (
        <div className={cn(" h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col", className)}>
            <Link href="/learn">
                <div className="pt-8 pl-4 pb-7 flex item-center gap-x-3">
                    <Image src="/lingo-logo.svg" alt="duolingo logo" width={150} height={150} className="rounded" />
                </div>
            </Link>
            <div className="flex flex-col gap-y-2 flex-1">
                {Links.map((link)=>{
                    return <SidebarItems key={link.href} label={link.label} href={link.href} icon={link.icon}/>
                })}
            </div>
            <div className="p-4">
                <ClerkLoading>
                    <Loader className=" h-5 w-5 text-muted-foreground animate-spin"/>
                </ClerkLoading>
                <ClerkLoaded>
                    <UserButton afterSignOutUrl="/" />
                </ClerkLoaded>
            </div>
        </div>
    )
}