import React from "react";
import TextArea from "@/app/components/TextArea/TextArea";
import {Article} from "@/app/models/Article";
import {Section} from "@/app/models/Section";
import {SectionElement} from "@/app/models/SectionElement";

interface Props {
    article: Article;
    setArticle: (article: Article) => void;
    defaultValue?: string;
    seKey: number;
    sKey: number;
}

const ParagraphEditor = (props: Props) => {
    const {article, setArticle, defaultValue = "", seKey, sKey} = props;

    const getArticleClone = (): Article => {
        return JSON.parse(JSON.stringify(article));
    };

    const setParagraph = (paragraph: string, seKey: number, sKey: number) => {
        const newArticle: Article = getArticleClone();
        const targetSection: Section = newArticle.sections[sKey];
        const targetSectionElement: SectionElement = targetSection.elements[seKey];
        targetSectionElement.data = paragraph;
        setArticle(newArticle);
    };

    return (
        <TextArea
            defaultValue={defaultValue}
            rows={10}
            onChange={(e) => setParagraph(e.target.value, seKey, sKey)}
        />
    );
};

export default ParagraphEditor;
