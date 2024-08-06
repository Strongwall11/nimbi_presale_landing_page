import React from "react";
import { Discover } from "./Collection/Discover";
import { OpenSource } from "./Collection/OpenSource";
import { Web3 } from "./Collection/Web3";
import { Partners } from "./Collection/Partners";
import { Tokenomics } from "./Collection/Tokenomics";
import { TokenDetails } from "./Collection/TokenDetails";
import { JoinCommuntity } from "./Collection/JoinCommuntity";
import { useScroll } from "@/context";

export const Collection = () => {
  const sectionRefs: any = useScroll();

  return (
    <div
      className="flex flex-col gap-4
    items-center justify-center"
      ref={sectionRefs.collection}
    >
      <Discover />
      <OpenSource />
      <Web3 />
      <Partners />
      <Tokenomics />
      <TokenDetails />
      <JoinCommuntity />
    </div>
  );
};
