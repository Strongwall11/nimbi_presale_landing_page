import { Button } from "@nextui-org/react";
import React from "react";
import CountdownTimer from "../CountdownTimer";

export const Timer = () => {
  return (
    <div className=" w-full bg-primary border-b border-secondary p-2 flex flex-col justify-center items-center gap-2 md:gap-12 md:flex-row">
      <h2 className="font-medium">Private Sell Starts</h2>
      <CountdownTimer />
      <Button className="hidden w-[143px] p-2 md:flex justify-center items-center rounded bg-[#2E3A41] text-sm text-white">
        Buy Now
      </Button>
    </div>
  );
};
