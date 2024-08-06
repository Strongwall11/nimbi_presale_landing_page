"use client"
import React, { createContext, useRef, useContext, ReactNode } from "react";

type SectionRefs = {
  buy: React.RefObject<HTMLElement>;
  works: React.RefObject<HTMLElement>;
  collection: React.RefObject<HTMLElement>;
  team: React.RefObject<HTMLElement>;
  supporting: React.RefObject<HTMLElement>;
  faq: React.RefObject<HTMLElement>;
};

const ScrollContext = createContext<SectionRefs | null>(null);

export const ScrollProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const sectionRefs: SectionRefs = {
    buy: useRef<HTMLElement>(null),
    works: useRef<HTMLElement>(null),
    collection: useRef<HTMLElement>(null),
    team: useRef<HTMLElement>(null),
    supporting: useRef<HTMLElement>(null),
    faq: useRef<HTMLElement>(null),
  };

  return (
    <ScrollContext.Provider value={sectionRefs}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = (): SectionRefs => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScroll must be used within a ScrollProvider");
  }
  return context;
};
