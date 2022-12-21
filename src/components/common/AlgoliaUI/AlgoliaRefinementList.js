import React from 'react';
import { connectRefinementList } from 'react-instantsearch-dom';
import { Tag } from '../Tag';

const AlgoliaRefinementsList = ({ items, refine }) => {
    return (
        <ul className="flex flex-col space-y-1 w-full">
            {items.map(item => (
            <li 
                key={item.label}
                className="px-2 py-1 cursor-pointer hover:text-indigo-600 hover:bg-gray-800 rounded justify-between flex flex-row xl:flex-row"
                onClick={event => {
                    event.preventDefault();
                    refine(item.value);
                }}
            >
                <span className={`text-sm text-gray-300 hover:text-indigo-500 ${item.isRefined && 'font-bold text-green-500'}`}>{item.label}</span>
                <Tag text={item.count} color="bg-gray-700" textSize="text-xs" />
            </li>
            ))}
        </ul>
    )
};

export default connectRefinementList(AlgoliaRefinementsList);
