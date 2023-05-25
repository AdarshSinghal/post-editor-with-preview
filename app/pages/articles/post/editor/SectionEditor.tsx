import React, {ReactNode, useState} from "react";
import {SectionElement} from "@/app/models/SectionElement";
import {Article} from "@/app/models/Article";
import {Section} from "@/app/models/Section";
import SectionElementEditor from "@/app/pages/articles/post/editor/section-element/SectionElementEditor";
import AutoLabelTabs from "@/app/components/Tabs/AutoLabelTabs";
import SmartTextField from "@/app/components/TextField/SmartTextField";
import {ElementType} from "@/app/home/ElementType";
import PostEditorOptionDropdown from "@/app/components/menu/PostEditorOptionDropdown";

interface Props {
    article: Article;
    setArticle: (article: Article) => void;
    sectionKey: number;
    section: Section;
}

const SectionEditor = (props: Props) => {
    const {article, setArticle, sectionKey, section} = props;
    const [elementTab, setElementTab] = useState<string>("0");

    const getArticleClone = (): Article => {
        return JSON.parse(JSON.stringify(article));
    };

    const setSectionTitle = (index: number, text: string) => {
        const newArticle: Article = getArticleClone();
        const newSection: Section = newArticle.sections[index];
        newSection.title = text;
        setArticle(newArticle);
    };

    const elements = article.sections[sectionKey].elements;

    const getTabElements = () => {
        return elements.map((sectionElement: SectionElement, seKey: number) => (
            <SectionElementEditor
                key={`section-${sectionKey}-element-${seKey}`}
                article={article}
                setArticle={setArticle}
                sKey={sectionKey}
                seKey={seKey}
                element={sectionElement}
            />
        ));
    };

    const onClickInsertLastMenu = () => {
        const newArticle: Article = getArticleClone();
        const targetSection: Section = newArticle.sections[sectionKey];
        const newElement: SectionElement = {
            data: "New Paragraph",
            type: ElementType.PARAGRAPH,
        };
        setElementTab(targetSection.elements.length.toString());
        targetSection.elements.push(newElement);
        setArticle(newArticle);
    };

    const onClickDeleteMenu = () => {
        const newArticle = getArticleClone();
        newArticle.sections[sectionKey].elements.splice(parseInt(elementTab), 1);
        setArticle(newArticle);
        setElementTab("0");
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
        <div>
            <SmartTextField
                id={`section-${sectionKey}`}
                label={`Title for Section ${sectionKey + 1}`}
                maxLength={70}
                defaultValue={section.title}
                setText={(text) => setSectionTitle(sectionKey, text)}
            />
            <AutoLabelTabs
                className="mt-10"
                value={elementTab}
                setValue={setElementTab}
                elements={getTabElements()}
                labelPrefix="Element"
                tabsSiblingReactNode={getOptions()}
            />
        </div>
    );
};

export default SectionEditor;
