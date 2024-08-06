/* eslint-disable react/no-unescaped-entities */
import { Button, Input, Progress } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import Crypto from "../../../../public/CRYPTO.svg";
import { CustInput } from "../common/CustInput";
import { useScroll } from "@/context";
import { useWalletInfo, useWeb3Modal } from "@web3modal/wagmi/react";

export const Banner = () => {
  const sectionRefs: any = useScroll();
  const { walletInfo } = useWalletInfo();
  const { open } = useWeb3Modal();

  return (
    <div className="relative h-[892px] top-32 lg:top-10" ref={sectionRefs.buy}>
      <Image src="/Home.png" fill objectFit="cover" alt="Home" />
      <div className="relative top-16 lg:top-40 flex flex-col lg:flex-row justify-center items-center gap-[30px] lg:gap-[138px] p-4">
        <div className="flex flex-col gap-7 lg:w-[800px] items-center">
          <h2 className="capitalize text-4xl md:text-6xl lg:text-7xl text-center font-medium">
            unite humanity with just your{" "}
            <span className="text-[#00E0FF]">Crypto Dust</span>
          </h2>
          <p className="capitalize md:text-xlfont-medium text-left lg:pl-14 w-[90%]">
            join Nimbi's wolfpack and make change together and have fun along
            the way. we need to start the clock on top for presale.
          </p>
        </div>
        <div className="w-[344px] rounded-md border border-[#767F84] bg-opacity-37 backdrop-blur-[2px] px-2 py-4 flex flex-col gap-3">
          <h2 className="text-[#8AD9F4] text-2xl font-semibold text-center">
            $1,608,782.11
          </h2>
          <div className="flex flex-col gap-2 text-sm">
            <span className="flex justify-between">
              <p>91.93% of goal raised</p>
              <span>0%</span>
            </span>
            <Progress
              aria-label="Loading..."
              value={90}
              color="secondary"
              size="md"
            />
            <h2>$1,750,000</h2>
          </div>

          <div className="flex flex-col items-center text-sm gap-1">
            <span className="font-bold">4039 Participants</span>
            <span>Listing Price = $0.05</span>
          </div>
          <span className="text-center text-[#E6F7FD] font-bold">
            1NIMBI = $0.021
          </span>

          <div className="font-medium flex justify-between items-center">
            <Button className="flex items-center bg-transparent border rounded w-[160px] text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
              >
                <path
                  d="M9.75 18C14.7206 18 18.75 13.9706 18.75 9C18.75 4.02944 14.7206 0 9.75 0C4.77944 0 0.75 4.02944 0.75 9C0.75 13.9706 4.77944 18 9.75 18Z"
                  fill="#627EEA"
                />
                <path
                  d="M10.0302 2.25V7.23938L14.2472 9.12375L10.0302 2.25Z"
                  fill="white"
                  fillOpacity="0.602"
                />
                <path
                  d="M10.0301 2.25L5.8125 9.12375L10.0301 7.23938V2.25Z"
                  fill="white"
                />
                <path
                  d="M10.0302 12.357V15.7472L14.25 9.909L10.0302 12.357Z"
                  fill="white"
                  fillOpacity="0.602"
                />
                <path
                  d="M10.0301 15.7472V12.3564L5.8125 9.909L10.0301 15.7472Z"
                  fill="white"
                />
                <path
                  d="M10.0302 11.5723L14.2472 9.12374L10.0302 7.24049V11.5723Z"
                  fill="white"
                  fillOpacity="0.2"
                />
                <path
                  d="M5.8125 9.12374L10.0301 11.5723V7.24049L5.8125 9.12374Z"
                  fill="white"
                  fillOpacity="0.602"
                />
              </svg>
              <span>ETH</span>
            </Button>
            <Button className="flex items-center bg-transparent border rounded w-[160px] text-white">
              <Image src={Crypto} alt="Crypto" />
              <span>USDT</span>
            </Button>
          </div>
          <div className="mt-8 text-back flex flex-col gap-4">
            <CustInput
              label="Amount in USDT you pay"
              placeholder="1000"
              type="number"
            />
            <CustInput
              label="Amount in NIMBI you receive"
              placeholder="47,619"
              type="number"
            />
            {walletInfo?.name ? (
              <Button color="secondary" className="rounded font-medium">
                Buy
              </Button>
            ) : (
              <Button
                color="secondary"
                className="rounded font-medium"
                onClick={() => open()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <g clipPath="url(#clip0_3052_2312)">
                    <path
                      d="M4.58337 14.1667C5.27373 14.1667 5.83337 13.607 5.83337 12.9167C5.83337 12.2263 5.27373 11.6667 4.58337 11.6667C3.89302 11.6667 3.33337 12.2263 3.33337 12.9167C3.33337 13.607 3.89302 14.1667 4.58337 14.1667Z"
                      fill="white"
                    />
                    <path
                      d="M15.8333 2.5H4.16667C3.062 2.50132 2.00296 2.94073 1.22185 3.72185C0.440735 4.50296 0.00132321 5.562 0 6.66667L0 13.3333C0.00132321 14.438 0.440735 15.497 1.22185 16.2782C2.00296 17.0593 3.062 17.4987 4.16667 17.5H15.8333C16.938 17.4987 17.997 17.0593 18.7782 16.2782C19.5593 15.497 19.9987 14.438 20 13.3333V6.66667C19.9987 5.562 19.5593 4.50296 18.7782 3.72185C17.997 2.94073 16.938 2.50132 15.8333 2.5ZM4.16667 4.16667H15.8333C16.4964 4.16667 17.1323 4.43006 17.6011 4.8989C18.0699 5.36774 18.3333 6.00363 18.3333 6.66667H1.66667C1.66667 6.00363 1.93006 5.36774 2.3989 4.8989C2.86774 4.43006 3.50363 4.16667 4.16667 4.16667ZM15.8333 15.8333H4.16667C3.50363 15.8333 2.86774 15.5699 2.3989 15.1011C1.93006 14.6323 1.66667 13.9964 1.66667 13.3333V8.33333H18.3333V13.3333C18.3333 13.9964 18.0699 14.6323 17.6011 15.1011C17.1323 15.5699 16.4964 15.8333 15.8333 15.8333Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3052_2312">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Connect Wallet
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
