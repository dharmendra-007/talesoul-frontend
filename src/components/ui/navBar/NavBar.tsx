'use client';

import Link from "next/link";
import React, { useEffect} from "react";
import Drawer from "../drawer/Drawer";
import Logo from "../logo";
import { usePathname, useRouter } from "next/navigation";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { apiFetch } from "@/lib/api";
import { useAuthStore } from "@/store/authStore";
import { toast } from "sonner";

const navLinks = [
  { linkText: "Why Us", link: "/#about", type: "link" },
  { linkText: "Consultant", link: "/consultant", type: "link" },
  { linkText: "Community", link: "/community", type: "link" },
  { linkText: "Soul Coin", link: "/soulcoin", type: "link" },
  { linkText: "Blog", link: "/blog", type: "link" },
];

export default function NavBar() {
  const pathname = usePathname();
  const router = useRouter();
  const { isAuthenticated, login, logout } = useAuthStore();

  // Detect authentication from cookie
  useEffect(() => {
    if (typeof window !== "undefined") {
      const accessToken = localStorage.getItem("talesoul_access");
      if (accessToken) login();
    }
  }, [login]);


  const handleLogout = async () => {
      try {
        logout();

        localStorage.removeItem("talesoul_access");
        document.cookie = "talesoul_refresh=; Max-Age=0; path=/;";

        router.replace("/");
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
    <div className="h-[70px] w-screen bg-background flex justify-between items-center lg:px-30 px-8
      xl:shadow-[0_4px_18px_0_#00000014] z-50 fixed">
      
      <Logo />

      <div className="hidden xl:flex items-center gap-6">
        {navLinks.map((link, index) => {
          const isActive =
            link.link === pathname ||
            (pathname.startsWith(link.link) && link.link !== "/");

          return (
            <Link
              className={
                `para1 ${
                  isActive ? "after:scale-x-100 !text-secondary font-bold" : ""
                }`
              }
              href={link.link}
              key={index}
            >
              {link.linkText}
            </Link>
          );
        })}

        {!isAuthenticated ? (
          <Link
            href="/login"
            className="text-primary-foreground shadow-xs bg-primary text-[0.9rem] rounded-4xl 
            hover:bg-[#e07d70] cursor-pointer px-5 py-2 font-medium flex items-center justify-center"
          >
            Sign In
          </Link>
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="cursor-pointer w-8 h-8 border shadow-sm">
                <AvatarImage src="/images/user.png" alt="User" className="bg-primary object-contain"/>
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-40" align="end">
              <DropdownMenuItem onClick={() => router.push("/profile")}>
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem className="text-red-600" onClick={handleLogout}>
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>

      <div className="xl:hidden">
        <Drawer navLinks={navLinks} />
      </div>
    </div>
  );
}
