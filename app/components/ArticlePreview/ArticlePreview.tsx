import React from "react";
import {Section} from "@/app/models/Section";
import {Article} from "@/app/models/Article";
import SectionPreview from "@/app/components/ArticlePreview/SectionPreview";

const ArticlePreview = (article: Article) => {
    return (
        <>
            <h1 className="text-lg">{article.title}</h1>
            {article.sections.map((section: Section, index: number) => {
                return (
                    <div key={index}>
                        <SectionPreview section={section}/>
                    </div>
                );
            })}
        </>
    );
};

export default ArticlePreview;
