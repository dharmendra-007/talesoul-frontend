import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

interface NavLink {
  linkText: string;
  link: string;
  type: string;
}
interface DrawerProps {
  navLinks: NavLink[];
}

export default function Drawer({ navLinks }: DrawerProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu />
      </SheetTrigger>
      <SheetContent className="pt-10 px-4">
        <div className="flex flex-col gap-2 w-full">
          {navLinks.map((link, index) => (
            <Link href={link.link} key={index}>
              <Button
                variant="outline"
                className={
                  link.type === "link"
                    ? "w-full"
                    : "bg-[#F16D5C] px-4 py-2 rounded-xl text-white font-semibold w-full"
                }
              >
                {link.linkText}
              </Button>
            </Link>
          ))}
        </div>

        <SheetFooter className="flex justify-center items-center text-center">
          <p>All rights reaserved @TaleSoul</p>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
} 