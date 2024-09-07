"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import React from "react";
import HamburgerIcon from "@public/icons/hamburger.svg";
import Link from "next/link";
import Logo from "@public/icons/logo.svg";
import { sidebarLinks } from "@/constancts";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src={HamburgerIcon}
          height={36}
          width={36}
          alt="Hamburger icon"
          className="cursor-pointer sm:hidden"
        />
      </SheetTrigger>
      <SheetContent side={"left"} className="border-none bg-dark-1">
        <Link href={"/"} className="flex items-center gap-1">
          <Image
            src={Logo}
            alt="Yoom Logo"
            width={32}
            height={32}
            className="max-sm:size-10"
          />
          <p className="text-[26px] font-extrabold text-white">Yoom</p>
        </Link>

        <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-hidden">
          <SheetClose asChild>
            <section className="flex f-full flex-col gap-6 pt-16 text-white">
              {sidebarLinks.map((link) => {
                const isActive = pathname === link.route;
                return (
                  <SheetClose asChild key={link.route}>
                    <Link
                      href={link.route}
                      key={link.lable}
                      className={cn(
                        "flex flex-1 gap-4 items-center p-4 rounded-lg w-full max-w-60",
                        {
                          "bg-blue-1": isActive,
                        }
                      )}
                    >
                      <Image
                        src={link.imgUrl}
                        alt={link.lable}
                        height={20}
                        width={20}
                      />
                      <p className="font-semibold">{link.lable}</p>
                    </Link>
                  </SheetClose>
                );
              })}
            </section>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
