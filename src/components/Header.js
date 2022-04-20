import React from 'react';
import { CodeIcon } from "@heroicons/react/solid";

export const Headers = ({ text }) => {
    return <div className="flex flex-col w-full mt-10 mb-10">
        <CodeIcon className="mx-auto inline-block w-10 mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-3 text-white">
            {text}
        </h1>
    </div>
}