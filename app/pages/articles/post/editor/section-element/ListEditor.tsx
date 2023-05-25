import React, { ReactNode, useEffect, useState } from "react";
import { Article } from "@/app/models/Article";
import TextArea from "@/app/components/TextArea/TextArea";
import { Section } from "@/app/models/Section";
import { SectionElement } from "@/app/models/SectionElement";
import AutoLabelTabs from "@/app/components/Tabs/AutoLabelTabs";
import PostEditorOptionDropdown from "@/app/components/menu/PostEditorOptionDropdown";

interface Props {
  article: Article;
  setArticle: (article: Article) => void;
  seKey: number;
  sKey: number;
}

const ListEditor = (props: Props) => {
  const { article, setArticle, seKey, sKey } = props;
  const [value, setValue] = useState<string>("0");

  const getArticleClone = (): Article => {
    return JSON.parse(JSON.stringify(article));
  };

  const onItemEdit = (
    item: string,
    itemIndex: number,
    seKey: number,
    sKey: number
  ) => {
    const newArticle: Article = getArticleClone();
    const targetSection: Section = newArticle.sections[sKey];
    const targetSectionElement: SectionElement = targetSection.elements[seKey];
    targetSectionElement.data[itemIndex] = item;
    setArticle(newArticle);
  };

  const data = article.sections[sKey].elements[seKey].data;

  const getTabElements = () => {
    return data.map((item: string, itemKey: number) => (
      <TextArea
        key={`item-s${sKey}-se${seKey}-i${itemKey}`}
        defaultValue={item}
        onChange={(e) => onItemEdit(e.target.value, itemKey, seKey, sKey)}
        rows={5}
      />
    ));
  };

  useEffect(() => {}, [value]);

  const onClickInsertLastMenu = () => {
    const newArticle = getArticleClone();
    const existingData = newArticle.sections[sKey].elements[seKey].data;
    setValue(existingData.length.toString());
    existingData.push("");
    setArticle(newArticle);
  };

  const onClickDeleteMenu = () => {
    const newArticle = getArticleClone();
    newArticle.sections[sKey].elements[seKey].data.splice(parseInt(value), 1);
    setArticle(newArticle);
    setValue("0");
  };

  const getOptions = (): ReactNode => {
    return (
      <PostEditorOptionDropdown
        className="text-right"
        tabsType="element"
        onClickInsertLastMenu={onClickInsertLastMenu}
        onClickDeleteMenu={onClickDeleteMenu}
      />
    );
  };

  return (
    <>
      <AutoLabelTabs
        className="mt-10"
        value={value}
        setValue={(newValue) => setValue(newValue)}
        elements={getTabElements()}
        labelPrefix="Item"
        tabsSiblingReactNode={getOptions()}
      />
    </>
  );
};

export default ListEditor;
