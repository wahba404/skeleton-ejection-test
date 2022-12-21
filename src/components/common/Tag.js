export const Tag = ({ text, color = null, textColor = 'text-gray-200', textSize = 'text-xs xl:text-sm 2xl:text-sm' }) => (
    <span className={`flex flex-row rounded ${color !== null ? color : 'bg-indigo-700'} px-2 ${textSize} font-bold ${textColor} whitespace-nowrap items-center justify-center`}>{text}</span>
)