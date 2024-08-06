"use client";
import { useScroll } from "@/context";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useWalletInfo } from "@web3modal/wagmi/react";
import React, { useEffect, useState } from "react";
import useActiveSection from "@/useActiveSection";
import { twMerge } from "tailwind-merge";
import { Roboto_Condensed } from "next/font/google";

interface HeaderProp {
  menuActive: boolean;
  setMenuActive: (value: boolean) => void;
}
const navList = [
  {
    name: "Buy",
    url: "buy",
  },
  {
    name: "How its works",
    url: "works",
  },
  {
    name: "Collection",
    url: "collection",
  },
  {
    name: "Team",
    url: "team",
  },
  {
    name: "Supporting dapps",
    url: "supporting",
  },
  {
    name: "FAQ",
    url: "faq",
  },
];
const roboto_conde = Roboto_Condensed({ subsets: ["latin"] });

export const Header = ({ menuActive, setMenuActive }: HeaderProp) => {
  const sectionRefs: any = useScroll();
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (section: string) => {
    const target = sectionRefs[section].current;
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 200,
        behavior: "smooth",
      });
    }
  };
  const { open } = useWeb3Modal();
  const { walletInfo } = useWalletInfo();
  const activeSection = useActiveSection(sectionRefs);

  return (
    <>
      <header
        className={twMerge(
          roboto_conde.className,
          "hidden relative lg:flex justify-around items-center py-4 px-[200px] border-b border-gray-100 bg-black bg-opacity-40 backdrop-blur-sm z-[999]",
          scrollPosition > 30 && "bg-white bg-opacity-100 text-black"
        )}
      >
        <div className="cursor-pointer" onClick={() => scrollToSection("buy")}>
          {scrollPosition > 30 ? (
            <Image src="/Logowhite.png" width={100} height={100} alt="logo" />
          ) : (
            <Image src="/Logo.png" width={100} height={100} alt="logo" />
          )}
        </div>
        <div className="flex gap-8 items-center">
          {navList.map((nav) => (
            <span
              onClick={() => scrollToSection(nav.url)}
              className={twMerge(
                "font-medium text-sm cursor-pointer",
                activeSection === nav.url && "p-1 border-b-2 border-secondary"
              )}
              key={nav.name}
            >
              {nav.name}
            </span>
          ))}
          <Button
            className="bg-secondary w-[143px] py-[6px] py-[8px] text-white rounded font-medium"
            onClick={() => open()}
          >
            {walletInfo?.name ? (
              <span className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M3.3335 8.00002L6.66683 11.3334L12.6668 4.66669"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Connected
              </span>
            ) : (
              "Connect Wallet"
            )}
          </Button>
        </div>
      </header>
      <header
        className={twMerge(
          roboto_conde.className,
          "lg:hidden relative flex justify-between items-center px-6 py-2 border-b border-gray-100 bg-black bg-opacity-40 backdrop-blur-sm z-[999]",
          scrollPosition > 30 && "bg-white bg-opacity-100 text-black"
        )}
      >
        <div className="flex items-center gap-4">
          <span onClick={() => setMenuActive(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M16.7083 9.16667H3.29167C2.85444 9.16667 2.5 9.52111 2.5 9.95833V10.0417C2.5 10.4789 2.85444 10.8333 3.29167 10.8333H16.7083C17.1456 10.8333 17.5 10.4789 17.5 10.0417V9.95833C17.5 9.52111 17.1456 9.16667 16.7083 9.16667Z"
                fill={scrollPosition > 30 ? "#000000" : "#ffff"}
              />
              <path
                d="M16.7083 13.3333H3.29167C2.85444 13.3333 2.5 13.6878 2.5 14.125V14.2083C2.5 14.6456 2.85444 15 3.29167 15H16.7083C17.1456 15 17.5 14.6456 17.5 14.2083V14.125C17.5 13.6878 17.1456 13.3333 16.7083 13.3333Z"
                fill={scrollPosition > 30 ? "#000000" : "#ffff"}
              />
              <path
                d="M16.7083 5H3.29167C2.85444 5 2.5 5.35444 2.5 5.79167V5.875C2.5 6.31223 2.85444 6.66667 3.29167 6.66667H16.7083C17.1456 6.66667 17.5 6.31223 17.5 5.875V5.79167C17.5 5.35444 17.1456 5 16.7083 5Z"
                fill={scrollPosition > 30 ? "#000000" : "#ffff"}
              />
            </svg>
          </span>
          <div
            className="cursor-pointer"
            onClick={() => scrollToSection("buy")}
          >
            {scrollPosition > 30 ? (
              <Image src="/Logowhite.png" width={100} height={100} alt="logo" />
            ) : (
              <Image src="/Logo.png" width={100} height={100} alt="logo" />
            )}
          </div>
        </div>
        <Button
          className="bg-secondary max-w-[143px] py-[6px] py-[8px] text-white rounded font-medium"
          onClick={() => open()}
        >
          {walletInfo?.name ? (
            <span className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M3.3335 8.00002L6.66683 11.3334L12.6668 4.66669"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Connected
            </span>
          ) : (
            "Connect Wallet"
          )}
        </Button>
      </header>
      {menuActive && (
        <div className="fixed top-0 w-full md:w-[50%] h-full bg-[#242D32] flex flex-col gap-20 z-[999] items-center justify-center">
          <span
            className="absolute top-4 right-4"
            onClick={() => setMenuActive(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M17 7L7 17M17 17L7 7"
                stroke="#626B7F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <Image src="/Logo.png" width={100} height={100} alt="logo" />

          <div className="flex flex-col gap-5  items-center">
            {navList.map((nav) => (
              <span
                onClick={() => {
                  setMenuActive(false);
                  scrollToSection(nav.url);
                }}
                className="text-sm cursor-pointer"
                key={nav.name}
              >
                {nav.name}
              </span>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
