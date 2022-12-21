import React from "react";
import { connectCurrentRefinements } from "react-instantsearch-dom";
import { Tag } from "../Tag";

const AlgoliaCurrentRefinements = ({ items }) => (
    <ul className="flex flex-row space-x-2">
      {items.map(item => (
        <li key={item.label}>
          {item.items ? (
            <React.Fragment>
              <ul className="flex flex-row space-x-2 text-xs">
                <span>{item.label}</span>
                {item.items.map(nested => (
                  <Tag key={`current-nested-${nested.label}`} text={nested.label} color="bg-green-700" textSize="text-xs" />
                ))}
              </ul>
            </React.Fragment>
          ) : (
            <Tag text={item.label} color="bg-indigo-900" textSize="text-xs"/>
          )}
        </li>
      ))}
    </ul>
  );


export default connectCurrentRefinements(AlgoliaCurrentRefinements)