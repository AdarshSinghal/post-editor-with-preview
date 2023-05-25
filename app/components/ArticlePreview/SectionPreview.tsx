import React from "react";
import { SectionElement } from "@/app/models/SectionElement";
import SectionElementPreview from "@/app/components/ArticlePreview/SectionElementPreview";
import { Section } from "@/app/models/Section";

interface Props {
  section: Section;
}

const SectionPreview = (props: Props) => {
  const { section } = props;
  return (
    <div>
      <h2 className="mt-5 text-base" key={section.title}>
        {section.title}
      </h2>
      {section.elements.map((element: SectionElement, index: number) => {
        return <SectionElementPreview key={index} {...element} />;
      })}
    </div>
  );
};

export default SectionPreview;
