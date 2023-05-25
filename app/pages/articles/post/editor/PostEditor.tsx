import React, {ReactNode, useState} from "react";
import {Article} from "@/app/models/Article";
import SectionEditor from "@/app/pages/articles/post/editor/SectionEditor";
import {Section} from "@/app/models/Section";

import AutoLabelTabs from "@/app/components/Tabs/AutoLabelTabs";
import SmartTextField from "@/app/components/TextField/SmartTextField";
import "./PostEditor.css";
import PostEditorOptionDropdown from "@/app/components/menu/PostEditorOptionDropdown";

interface Props {
    article: Article;
    setArticle: (article: Article) => void;
}

const PostEditor = (props: Props) => {
    const {article, setArticle} = props;
    const [sectionTab, setSectionTab] = useState<string>("0");

    const getArticleClone = (): Article => {
        return JSON.parse(JSON.stringify(article));
    };

    const setNewArticleTitle = (text: string) => {
        let newArticle = getArticleClone();
        newArticle.title = text;
        setArticle(newArticle);
    };

    const getTabElements = () => {
        return article.sections.map((section: Section, index: number) => (
            <SectionEditor
                key={`section-key-${index}`}
                article={article}
                setArticle={setArticle}
                sectionKey={index}
                section={section}
            />
        ));
    };

    const onClickInsertLastMenu = () => {
        const newArticle: Article = getArticleClone();
        const newSection = {
            title: `Section ${newArticle.sections.length + 1} title`,
            elements: [],
        };
        setSectionTab(newArticle.sections.length.toString());
        newArticle.sections.push(newSection);

        setArticle(newArticle);
    };

    const onClickDeleteMenu = () => {
        const newArticle = getArticleClone();
        newArticle.sections.splice(parseInt(sectionTab), 1);
        setArticle(newArticle);
        setSectionTab("0");
    };

    const getOptions = (): ReactNode => {
        return (
            <PostEditorOptionDropdown
                className="text-right"
                tabsType="section"
                onClickInsertLastMenu={onClickInsertLastMenu}
                onClickDeleteMenu={onClickDeleteMenu}
            />
        );
    };

    return (
        <div>
            <h3 className="select-none mb-5">Editor 📝</h3>

            <SmartTextField
                id="articleTitle"
                label="Article Title"
                maxLength={70}
                defaultValue={article.title}
                setText={setNewArticleTitle}
            />

            <AutoLabelTabs
                className="mt-10 "
                value={sectionTab}
                setValue={setSectionTab}
                elements={getTabElements()}
                labelPrefix="Section"
                tabsSiblingReactNode={getOptions()}
            />
        </div>
    );
};

export default PostEditor;
