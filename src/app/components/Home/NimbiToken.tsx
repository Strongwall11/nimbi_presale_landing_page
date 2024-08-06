import React from "react";
import { Working } from "./NimbiWorks/Working";
import { Mission } from "./NimbiWorks/Mission";
import { AboutNimbi } from "./NimbiWorks/AboutNimbi";
import { BuyNimbi } from "./NimbiWorks/BuyNimbi";
import { WhitePaper } from "./NimbiWorks/WhitePaper";
import { useScroll } from "@/context";

export const NimbiToken = () => {
  const sectionRefs: any = useScroll();

  return (
    <div
      className="flex flex-col gap-4 mt-32 lg:mt-4
    items-center justify-center"
      ref={sectionRefs.works}
    >
      <AboutNimbi />
      <Working />
      <Mission />
      <BuyNimbi />
      <WhitePaper />
    </div>
  );
};
