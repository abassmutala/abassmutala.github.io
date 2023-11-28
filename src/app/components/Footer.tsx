import Link from "next/link";
import React from "react";
import { footerConfig } from "../config/Footer";
import { Icons } from "./icons";

function Footer() {
  return (
    <footer className="bg-primary" id="contact">
      <div className="py-6 md:py-8 lg:py-12">
        <div className="relative px-6 md:px-8 max-w-screen-xl mx-auto text-background">
          <div className="flex flex-col md:flex-row items-start gap-y-8">
            <div className="w-full md:max-w-[50%] lg:max-w-[60%]">
              <h5 className="text-xl md:text-2xl font-bold text-background">
                {/* For any enquiries, collaborations, or even a simple chat, please reach out to me via e-mail or one of my many social media profiles.  */}
                Feel free to reach out to me for collaborations, enquiries,
                recommendations, or just a friendly chat. Let&apos;s get in touch!
              </h5>
            </div>
            <div className="w-full md:max-w-[50%] lg:max-w-[40%] text-start md:text-end">
              <div className="flex flex-col items-start md:items-end">
                {footerConfig.chatLinks?.map((item) => (
                  <Link
                    key={item.name}
                    href={item.link}
                    target="_blank"
                    className="w-full max-w-min whitespace-nowrap py-3"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 md:mt-12 flex flex-col md:flex-row-reverse md:items-center justify-between gap-y-4">
            <div className="flex-shrink w-auto flex items-center justify-between md:gap-x-8">
              {footerConfig.socialLinks?.map((item) => {
                const Icon = Icons[item.icon!];
                return (
                  <Link
                    key={item.name}
                    href={item.link}
                    target="_blank"
                    className="p-3 hover:scale-[120%] duration-500 transform"
                    title={item.name}
                  >
                    <Icon className="w-6 h-6 fill-background" />
                  </Link>
                );
              })}
            </div>
            <div className="w-full">
              <h4 className=" text-background text-2xl md:text-3xl font-bold font-heading">
                am.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
