import React from "react";
import ArticlePreview from "@/app/components/ArticlePreview/ArticlePreview";
import {Article} from "@/app/models/Article";

interface Props {
    article: Article;
}

const PostPreview = (props: Props) => {
    const {article} = props;

    const haveTitle = article.title.length > 0;
    const haveSections = article.sections.length > 0;
    const canDisplayArticle = haveTitle || haveSections;

    return (
        <div className=" mt-10 md:mt-0 resize-y h-[750px] overflow-scroll ">
            <h3 className="select-none mb-3">Preview 🖥️</h3>
            <div className="p-10 ">
                {canDisplayArticle && <ArticlePreview {...article} />}
                {!canDisplayArticle && <p>No contents to display</p>}
            </div>
        </div>
    );
};

export default PostPreview;
