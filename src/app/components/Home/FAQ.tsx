"use client";
import React from "react";
import { Container } from "../common/Container";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { useScroll } from "@/context";

const faq = [
  {
    que: "What is a pre-sale?",
    anser:
      "A crypto presale, or token presale, is an event where tokens are sold before they are made available to the general public through an Initial Coin Offering (ICO) or other crowdfunding methods. This stage offers early backers a chance to buy tokens at a lower price, with the expectation that the value will increase once the cryptocurrency launches publicly.",
  },
  {
    que: "What is erc-404",
    anser: `ERC-404 is a contract template designed to facilitate transactions involving both ERC-721 and ERC-20 tokens.2 It aims to introduce "semi-fungibility" by bundling interchangeable ERC-20 tokens with unique ERC-721 NFTs.1 ERC-404 combines the features of both to create semi-fungible tokens, enabling fractional ownership of NFTs and combining ERC-20 and ERC-721 concepts.`,
  },
  {
    que: "What is the nimbi ecosystem?",
    anser:
      "This is the wolfpack nimbi has built for us all to help support him and his mission to keep everything decentralized. join his wolfpack and support his mission.",
  },
  {
    que: "How do I claim my tokens?",
    anser:
      "Once the presale ends, connect your wallet and press the claim button.",
  },
  {
    que: "Why is decentralization in cryptocurrency so important?",
    anser:
      "Decentralization is important as it ensures the integrity and security of the blockchain network and aligns with the principles of transparency, trust, and peer-to-peer transactions that cryptocurrencies aim to achieve.2 Blockchain technology is used to increase security and anonymity, as transactions are protected by elaborate mathematical procedures, making them difficult to hack.",
  },
  {
    que: "What is Crypto Dust Converter?",
    anser:
      "With CDC, you can finally say goodbye to those pesky leftovers in your wallet. Convert your crypto dust into the Nimbi ecosystem and unleash a world of possibilities!",
  },
  {
    que: "What is the Crypto Lottery?",
    anser: "Everything is open source and transparent with Crypto Lotto!",
  },
];
export const FAQ = () => {
  const sectionRefs: any = useScroll();

  return (
    <Container>
      <div
        className="flex flex-col items-center gap-4 text-left w-full"
        ref={sectionRefs.faq}
      >
        <h2 className="text-2xl lg:text-3xl font-medium lg:w-[74%]">Frequently Asked Questions</h2>
        <hr className="lg:w-[74%]"/>
        <div className="lg:w-[75%]">
          <Accordion
            itemClasses={{
              title: "text-white",
            }}
          >
            {faq.map((item, i) => (
              <AccordionItem
                key={i}
                aria-label="Accordion 1"
                title={item.que}
                className="border-b text-sm"
              >
                {item.anser}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </Container>
  );
};
