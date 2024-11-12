"use client";

import { NavItem, SocialLink } from "@/app/types";
import Link from "next/link";
import React from "react";
import { Icons } from "../icons";

function MobileMenuButton({ items }: { items: NavItem[] | undefined }) {
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);

  return (
    <>
      <button
        type="button"
        title="show mobile navigation"
        className="relative flex items-center space-x-2 text-primary md:hidden p-3 hover:bg-primary/20 rounded-full"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? <Icons.close /> : <Icons.menu />}
      </button>
      {showMobileMenu && (
        <section className="absolute inset-x-0 top-16 w-screen bg-background z-30">
          <nav className="w-full text-primary">
            <ul className="w-full px-6 py-4 divide-y divide-primary">
              {items?.map((item) => (
                <li key={item.title} className="w-full">
                  <Link href={item.href} className="w-full py-3 hover:bg-primary/20">
                    <p className="py-3">{item.title}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </section>
      )}
    </>
  );
}

export default MobileMenuButton;
