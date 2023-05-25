import React from "react";
import Select, { ValueLabel } from "@/app/components/Select/Select";
import { Article } from "@/app/models/Article";
import { SectionElement } from "@/app/models/SectionElement";
import ParagraphEditor from "@/app/pages/articles/post/editor/section-element/ParagraphEditor";
import ListEditor from "@/app/pages/articles/post/editor/section-element/ListEditor";
import { ElementType } from "@/app/home/ElementType";

interface Props {
  article: Article;
  setArticle: (article: Article) => void;
  sKey: number;
  seKey: number;
  element: SectionElement;
}

const SectionElementEditor = (props: Props) => {
  const { article, setArticle, sKey, seKey, element } = props;

  const getVL = (v: string, l: string): ValueLabel => {
    return { value: v, label: l };
  };

  const valueLabelList: ValueLabel[] = [
    getVL(ElementType.PARAGRAPH.toString(), ElementType.PARAGRAPH.toString()),
    getVL(
      ElementType.UNORDERED_LIST.toString(),
      ElementType.UNORDERED_LIST.toString()
    ),
    getVL(
      ElementType.ORDERED_LIST.toString(),
      ElementType.ORDERED_LIST.toString()
    ),
  ];

  const renderParagraphEditor = (
    seKey: number,
    sKey: number,
    text?: string
  ) => {
    return (
      <ParagraphEditor
        article={article}
        setArticle={setArticle}
        defaultValue={text}
        seKey={seKey}
        sKey={sKey}
      />
    );
  };

  const renderListEditor = (seKey: number, sKey: number, items: string[]) => {
    return (
      <ListEditor
        article={article}
        setArticle={setArticle}
        seKey={seKey}
        sKey={sKey}
      />
    );
  };

  const getArticleClone = (): Article => {
    return JSON.parse(JSON.stringify(article));
  };

  const onTypeSelect = (e: any, seKey: number, sKey: number) => {
    const newArticle = getArticleClone();
    let element: SectionElement = newArticle.sections[sKey].elements[seKey];
    if (e.target.value === ElementType.PARAGRAPH) {
      element.type = ElementType.PARAGRAPH;
      element.data = "";
    } else if (e.target.value === ElementType.UNORDERED_LIST) {
      element.type = ElementType.UNORDERED_LIST;
      element.data = [""];
    } else if (e.target.value === ElementType.ORDERED_LIST) {
      element.type = ElementType.ORDERED_LIST;
      element.data = [""];
    }
    setArticle(newArticle);
  };

  return (
    <>
      <div>
        <Select
          defaultValue={element.type}
          valueLabelList={valueLabelList}
          onChange={(e) => onTypeSelect(e, seKey, sKey)}
        />
      </div>
      {element.type === ElementType.PARAGRAPH &&
        renderParagraphEditor(seKey, sKey, element.data)}
      {element.type === ElementType.UNORDERED_LIST &&
        renderListEditor(seKey, sKey, element.data)}
      {element.type === ElementType.ORDERED_LIST &&
        renderListEditor(seKey, sKey, element.data)}
    </>
  );
};

export default SectionElementEditor;
