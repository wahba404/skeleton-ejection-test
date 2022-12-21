import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function ButtonIcon({ onClick, bgColor = 'bg-gray-800',  hoverColor = 'hover:bg-indigo-600', icon = 'xmark', text = null, block = false, textSize = 'text-xs lg:text-base 2xl:text-base'}) {
    return (
        <div 
            onClick={onClick} 
            className={`flex flex-row ${bgColor} ${hoverColor} text-gray-200 rounded font-medium items-center justify-center cursor-pointer p-2 ${textSize} ${block && 'w-full'} whitespace-nowrap`}
        >
            <FontAwesomeIcon icon={icon} className="h-5 w-5" />{text !== null && (<span className={text === '' ? 'ml-0':'ml-2'}>{text}</span>)}
        </div>
    )
} 