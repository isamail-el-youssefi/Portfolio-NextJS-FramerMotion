import { useActiveSectionContext } from "@/context/active-section-context";
import { links } from "@/lib/data";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

type SectionName = (typeof links)[number]["name"];

export default function useSectionInView(
  sectionname: SectionName,
  threshold: number = 0.75
) {
  const { ref, inView } = useInView({
    threshold: threshold,
  });
  const { setActiveSelection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSelection(sectionname);
    }
  }, [inView, setActiveSelection, sectionname]);
  return { ref };
}
