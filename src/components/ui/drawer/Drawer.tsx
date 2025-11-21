"use client"

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { apiFetch } from "@/lib/api";
import { useAuthStore } from "@/store/authStore";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface NavLink {
  linkText: string;
  link: string;
  type: string;
}
interface DrawerProps {
  navLinks: NavLink[];
}

export default function Drawer({ navLinks}: DrawerProps) {
  const router = useRouter();
  const { isAuthenticated, logout } = useAuthStore();

  const handleLogout = async () => {
        try {
          logout()
          localStorage.removeItem("talesoul_access");
          document.cookie = "talesoul_refresh=; Max-Age=0; path=/;";
  
          router.refresh();
          await apiFetch("/accounts/logout/", { method: "POST" });
        } catch (error: unknown) {
          let message = "Failed to log out";
          if (error instanceof Error) {
          message = error.message;
          }
          toast.error(message);
        }
      };
      
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu />
      </SheetTrigger>
      <SheetTitle className="sr-only"/>
      <SheetContent className="px-4 z-[60]">
        <div className="flex flex-col gap-2 w-full pt-10">
          {navLinks.map((link, index) => (
            <Link href={link.link} key={index}>
              <Button
                variant="outline"
                className={
                  link.type === "link"
                    ? "w-full py-5"
                    : "bg-[#F16D5C] px-4 py-5 rounded-4xl text-white font-semibold w-full"
                }
              >
                {link.linkText}
              </Button>
            </Link>
          ))}
        {!isAuthenticated ? (
          <Link
            href="/login"
            className="text-primary-foreground shadow-xs bg-primary text-[0.9rem] rounded-4xl 
            hover:bg-[#e07d70] cursor-pointer px-5 py-2 font-medium flex items-center justify-center"
          >
            Sign In
          </Link>
        ) : (
          <Button variant={"ghost"} onClick={handleLogout} className="text-primary-foreground shadow-xs bg-primary text-[0.9rem] rounded-4xl 
            hover:bg-[#e07d70] cursor-pointer px-5 py-2 font-medium flex items-center justify-center">Logout</Button>
        )}

        </div>

        <SheetFooter className="flex justify-center items-center text-center">
          <p className="para2">All rights reaserved @TaleSoul</p>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
} 