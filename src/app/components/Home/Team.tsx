/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Container } from "../common/Container";

import { TeamCard } from "../common/TeamCard";
import { useScroll } from "@/context";

const teamArr = [
  {
    img: "/Team1.png",
    role: "CEO AND FOUNDER",
    name: "Dack Thomas",
    description:
      "Dack leads Nimbi with strategic vision, driving innovation and growth within the token development project.",
  },
  {
    img: "/Team2.png",
    role: "CHIEF TECHNICAL OFFICER",
    name: "Narek Terteryan",
    description:
      "Narek oversees technical strategy and development, ensuring innovative, secure, and scalable infrastructure.",
  },
  {
    img: "/Team3.png",
    role: "WEB & SMART CONTRACT DEVELOPER",
    name: "Alex Schilling",
    description:
      "Alex develops secure smart contracts and web interfaces, ensuring seamless user interactions within Nimbi.",
  },
  {
    img: "/Team4.png",
    role: "SMART CONTRACT DEV AND AUDITOR",
    name: "Mujahid Ali",
    description:
      "Ali writes and audits smart contracts, ensuring security and reliability through rigorous testing.",
  },
  {
    img: "/Team5.png",
    role: "BLOCKCHAIN / FULL-STACK DEVELOPER",
    name: "Tony Gonzales",
    description:
      "Tony builds and maintains blockchain infrastructure and user-facing applications, ensuring efficiency and security.",
  },
  {
    img: "/Team6.png",
    role: "UI/UX DESIGNER ",
    name: "Hovhannes Yeganyan",
    description:
      "Hovo designs intuitive and visually appealing user interfaces to enhance user satisfaction and engagement.",
  },
  {
    img: "/Team7.png",
    role: "WEB3 GAME DEVELOPER",
    name: "Brian",
    description:
      "Brian creates engaging Web3 games, integrating blockchain technology for innovative and secure gaming experiences.",
  },
  {
    img: "/Team8.png",
    role: "UX WRITER/CONTENT STRATEGIST",
    name: "Dean Eskich",
    description:
      "Dean crafts clear, user-friendly content and guides, ensuring a cohesive and seamless user experience.",
  },
];
export const Team = () => {
  const sectionRefs: any = useScroll();

  return (
    <Container>
      <div className="flex flex-col gap-5 items-center" ref={sectionRefs.team}>
        <h2 className="text-4xl font-medium text-center w-full">Team</h2>
        <div className="flex justify-center">
          <p className="lg:w-[45%] capitalize text-center">
            Decentralized Collaboration is at the heart of our mission. We are
            proud to partner with industry leaders, innovators, and like-minded
            projects to drive forward our vision of a decentralized future.
            Together, we're building bridges, fostering innovation, and creating
            opportunities for growth and advancement in the blockchain space.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:w-[74%] gap-4">
          {teamArr.map((item, i) => (
            <TeamCard data={item} key={i} />
          ))}
        </div>
      </div>
    </Container>
  );
};
