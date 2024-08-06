import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

type CardData = {
  img: string;
  role: string;
  name: string;
  description: string;
};
interface TeamCardProp {
  data: CardData;
}
export const TeamCard = ({ data }: TeamCardProp) => {
  return (
    <Card
      radius="lg"
      className="flex flex-col gap-2 border-2 border-[#5C666C] md:max-w-[280px] lg:max-w-[286px] bg-[#334047] p-2"
    >
      <Image
        alt="Woman listing to music"
        className="w-full rounded object-cover"
        src={data.img}
        width={200}
        height={200}
      />

      <CardBody className="flex flex-col gap-2">
        <h2 className="text-secondary font-bold">{data.role}</h2>
        <h1 className="text-white text-2xl font-bold border-b w-auto">
          {data.name}
        </h1>
        <p className="text-[#EBECED] text-sm">{data.description}</p>
      </CardBody>
    </Card>
  );
};
