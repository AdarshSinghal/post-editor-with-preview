"use client";
import React, {useEffect, useState} from "react";
import {Article} from "@/app/models/Article";
import PostPreview from "@/app/pages/articles/post/PostPreview";
import PostEditor from "@/app/pages/articles/post/editor/PostEditor";

interface Props {
    setText?: (text: Article) => void;
    showIntro?: boolean;
}

const EditorWithPreview = ({setText, showIntro = true}: Props) => {
    const dummyArticle = {
        title: "API Routes",
        sections: [
            {
                title: "Introduction",
                elements: [
                    {
                        type: "Paragraph",
                        data: "API routes provide a solution to build your API with Next.js. Any file inside the folder pages/api is mapped to /api/* and will be treated as an API endpoint instead of a page.",
                    },
                    {
                        type: "Paragraph",
                        data: "They are server-side only bundles and won't increase your client-side bundle size.",
                    },
                ],
            },
            {
                title: "Use Cases",
                elements: [
                    {
                        type: "Paragraph",
                        data: "Some of the use cases for API Routes are:",
                    },
                    {
                        type: "Unordered List",
                        data: [
                            "Masking the URL of an external service.",
                            "Using Environment Variables on the server to securely access external services.",
                        ],
                    },
                ],
            },
            {
                title: "Response Helpers",
                elements: [
                    {
                        type: "Paragraph",
                        data: "The Server Response object, (often abbreviated as res) includes a set of Express.js-like helper methods to improve the developer experience and increase the speed of creating new API endpoints.",
                    },
                    {
                        type: "Ordered List",
                        data: [
                            "Masking the URL of an external service.",
                            "Using Environment Variables on the server to securely access external services.",
                        ],
                    },
                ],
            },
        ],
    };

    const [article, setArticle] = useState<Article>(dummyArticle);

    useEffect(() => {
        if (setText) {
            setText(article);
        }
    }, [article, setText]);

    return (
        <div>
            {showIntro && <div className='grid grid-cols-12'>
                <div className='col-span-8'>
                    <p className='p-5 text-2xl font-bold'>An editor with dynamic Preview generation</p>
                </div>
                <div className='col-span-4'>
                    <p className='text-sm text-right p-5 text-indigo-500 hover:text-black select-none'>Created by Adarsh
                        Singhal</p>
                </div>

            </div>
            }


            <div className="md:grid md:grid-cols-2 md:space-x-14 mt-10 mx-5">
                <PostEditor article={article} setArticle={setArticle}/>
                <PostPreview article={article}/>
            </div>
        </div>

    );
};

export default EditorWithPreview;
