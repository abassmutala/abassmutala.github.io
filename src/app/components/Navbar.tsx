import Link from "next/link";
import { NavItem } from "../types";
import clsx from "clsx";
import MobileMenuButton from "./ui/MobileMenuButton";

interface NavProps {
  items?: NavItem[];
  children?: React.ReactNode;
}

export default function Navbar({ items, children }: NavProps) {

  return (
    <header className="w-full h-16 px-6 md:px-8 max-w-7xl mx-auto bg-background">
      <div className="h-full">
        <div className="h-full py-2 md:py-3 flex items-center justify-between border-b border-[rgb(93,93,93)]">
          <div className="">
            <Link href="/" className="flex items-center justify-center text-primary">
              <h4 className=" text-primary text-2xl md:text-3xl font-bold font-heading">am.</h4>
            </Link>
          </div>
          <MobileMenuButton items={items}/>
          {/* <div className="flex gap-6 md:gap-10"> */}
            {items?.length ? (
              <nav className="hidden md:flex">
                {items?.map((item, index) => (
                  <Link
                    key={index}
                    href={item.disabled ? "#" : item.href}
                    className={clsx(
                      "p-5 flex items-center font-medium hover:font-bold transition-all",
                      item.disabled
                        ? "text-foreground/60"
                        : "text-primary",
                      item.disabled && "cursor-not-allowed opacity-80"
                    )}
                  >
                    {item.title}
                  </Link>
                ))}
              </nav>
            ) : null}
            {/* {showMobileMenu && items && (
              <MobileNav items={items}>{children}</MobileNav>
            )} */}
          {/* </div> */}
        </div>
      </div>
    </header>
  );
}
