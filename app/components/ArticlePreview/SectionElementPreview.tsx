import React from "react";
import {SectionElement} from "@/app/models/SectionElement";
import {ElementType} from "@/app/home/ElementType";

const SectionElementPreview = (element: SectionElement) => {
    let renderedData = element.data;

    function getListItems() {
        return (
            <>
                {element.data.map((li: string, index: number) => {
                    return (
                        <li className="ml-20 mt-1" key={index}>
                            {li}
                        </li>
                    );
                })}
            </>
        );
    }

    if (element.type === ElementType.PARAGRAPH) {
        renderedData = <p className="ml-10 mt-3">{renderedData}</p>;
    } else if (element.type === ElementType.UNORDERED_LIST) {
        renderedData = <ul className="list-disc"> {getListItems()} </ul>;
    } else if (element.type === ElementType.ORDERED_LIST) {
        renderedData = <ol className="list-decimal"> {getListItems()} </ol>;
    }

    return <> {renderedData} </>;
};

export default SectionElementPreview;
