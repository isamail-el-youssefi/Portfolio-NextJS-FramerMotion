"use client";

import { links } from "@/lib/data";
import React, { createContext, useContext, useState } from "react";

// traditional way
// type SectionName = "Home" | "About" | "Projects" | "Skills" | "Experience" | "Contact"
type SectionName = (typeof links)[number]["name"];
type ActiveSectionContextProviderType = { children: React.ReactNode };

type ActiveSectionContextType = {
  activeSelection: SectionName;
  setActiveSelection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};
export const activeSectionContext =
  createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderType) {
  const [activeSelection, setActiveSelection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0); // we need to keep track
  // of this to disable the observer termporirly when user click on link in header

  return (
    <activeSectionContext.Provider
      value={{
        activeSelection,
        setActiveSelection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </activeSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(activeSectionContext);
  if (context === null) {
    throw new Error(
      "useActiveSection must be used within an ActiveSectionContextProvider"
    );
  }
  return context;
}
