/**
 * Additional styles that may not be included in our files, but may exist in templates, etc.
 */
const extraStyles = [
    'bg-white bg-red-500 bg-gray-200 bg-gray-300',
    'items-stretch',
    'px-4',
    'object-contain',
    'object-cover',
    'rounded-b rounded-t rounded-r rounded-l',
    'object-contain h-48 w-96 object-scale-down'
];

const t = "<div key={{objectID}} className=\"flex flex-col p-10 rounded bg-white h-full items-stretch space-y-4\">\n<div class=\"flex flex-col items-center justify-center\">\n    <img src={{image_link}} class=\"flex w-full h-full rounded bg-white\" />\n</div>\n<div class=\"flex flex-col bg-white\">\n<div class=\"text-base font-bold text-gray-800\">{{title}}</div>\n<div class=\"text-xs text-gray-600 truncate\">{{description}}</div>\n<div class=\"flex flex-row justify-between\">\n    <span class=\"font-bold\">${{price}}</span><span class=\"font-bold\">{{available}}</span>\n</div>\n</div>\n</div>";