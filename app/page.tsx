'use client'
import ReactMarkdown from "react-markdown";
import {useState} from "react";
import EditorWithPreview from "@/app/pages/articles/post/EditorWithPreview";

export default function Home() {

    const [text, setText] = useState<string>('');

  return (<EditorWithPreview />)
}
