"use client"

import { links } from "@/lib/data";
import React, { createContext, useState } from "react";

// traditional way
// type SectionName = "Home" | "About" | "Projects" | "Skills" | "Experience" | "Contact"
type SectionName = (typeof links)[number]["name"];
type ActiveSectionContextProviderType = { children: React.ReactNode };

type ActiveSectionContextType = {
  activeSelection: SectionName;
  setActiveSelection: React.Dispatch<React.SetStateAction<SectionName>>;
};
export const activeSectionContext = createContext<ActiveSectionContextType | null>(
  null
);

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderType) {
  const [activeSelection, setActiveSelection] = useState<SectionName>("Home");

  return (
    <activeSectionContext.Provider
      value={{ activeSelection, setActiveSelection }}
    >
      {children}
    </activeSectionContext.Provider>
  );
}
