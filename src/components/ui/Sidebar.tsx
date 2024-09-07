"use client";

import { sidebarLinks } from "@/constancts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <section className="sticky left-0 top-0 flex justify-between flex-col h-screen w-fit bg-dark-1 p-6 pt-28 text-white max-sm:hidden">
      <div className="flex flex-col gap-6">
        {sidebarLinks.map((link) => {
          const isActive = pathname === link.route;
          return (
            <Link
              href={link.route}
              key={link.lable}
              className={cn(
                "flex flex-1 gap-4 items-center p-4 rounded-lg justify",
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
              <p className="text-sm font-semibold max-lg:hidden">
                {link.lable}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
