import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ClerkLoaded, ClerkLoading, SignInButton, SignUpButton, SignedIn ,SignedOut} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Link from "next/link";



export default function Home() {
  return (
    <div className="max-w-[988px] mx-auto flex-1 flex flex-col w-full lg:flex-row items-center justify-center p-4 gap-2 ">
     <div className="relative w-[240px] h-[240px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0">
      <Image src="/header.svg" alt="header" fill/>
     </div>
     <div className="flex flex-col items-center justify-center">
      <h1 className="text-lg lg:text-3xl font-bold text-neutral-600 max-w-[428px] text-center">The free, fun, and effective way to learn a language!</h1>
     
      <div className="flex flex-col items-center gap-y-3 max-w-[330px] w-full">
        <ClerkLoading>
          <Loader className=" h-5 w-5 text-muted-foreground animate-spin"/>
        </ClerkLoading>
        <ClerkLoaded>
          <SignedOut>
            <SignUpButton mode="modal" afterSignInUrl="/learn" afterSignUpUrl="/learn">
              <Button variant="secondary" size="lg" className="w-full mt-4">Get Started</Button>
            </SignUpButton>

            <SignInButton mode="modal" afterSignInUrl="/learn" afterSignUpUrl="/learn">
              <Button variant="primaryOutline" size="lg" className="w-full">I already have an account</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            
            <Button size="lg" variant="secondary" className="w-full mt-4" asChild>
              <Link href="/learn">
                Continue Learning
                </Link>
  
              </Button>
          </SignedIn>
        </ClerkLoaded>
      </div>
     
     </div>
     
    </div>
  )
}
