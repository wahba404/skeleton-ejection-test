export default function Heading({ title, padding = true }) {
    const paddingStyles = padding === true ? 'p-4 2xl:px-6 2xl:py-4' : 'p-0';
    return (
        <div className={`flex flex-row w-full ${paddingStyles} text-2xl xl:text3xl text-gray-600 dark:text-gray-200 font-bold`}>{title}</div>
    )
}