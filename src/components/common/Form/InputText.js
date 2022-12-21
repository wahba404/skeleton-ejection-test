export const InputText = ({ onChange, name, value, type="text", placeholder="", disabled = false }) => {
    return (
        <input 
            type={type} 
            name={name} 
            value={value} 
            onChange={onChange} 
            placeholder={placeholder} 
            className="p-2 rounded focus:outline-none text-gray-600 bg-gray-200 font-bold text-sm lg:text-base 2xl:text-lg w-full" 
            disabled={disabled}
        />
    )
};