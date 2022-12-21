import { connectSearchBox } from "react-instantsearch-core";

const AlgoliaSearchBoxConnected = ({ currentRefinement, refine, disabled = false }) => (
    <div className="w-full flex flex-row flex-grow">
        <input
            type="search"
            value={currentRefinement}
            onChange={event => refine(event.currentTarget.value)}
            className={`${disabled === true && 'bg-gray-400'} w-full p-2 2xl:p-4 text-base 2xl:text-lg rounded text-indigo-800 font-bold bg-gray-200 dark:bg-indigo-300 focus:outline-none`}
            placeholder="Search"
            disabled={disabled}
        />
    </div>
);

const AlgoliaSearchBox = connectSearchBox(AlgoliaSearchBoxConnected);
export default AlgoliaSearchBox;