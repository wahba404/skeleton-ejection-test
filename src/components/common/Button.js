import React from "react";

class Button extends React.Component {

    handleOnClick = (e) => {
        if (this.props.disabled === false) {
            this.props.onClick(e);
        }
    }

    render() {
        const {
            title,

            color,
            textColor,
            block,
            hoverColor
        } = this.props;

        const width = block === true ? 'w-full' : '';
        const textSize = 'text-lg lg:text-xl xl:text-xl 2xl:text-2xl'
        const padding = 'p-2 lg:p-4 xl:p-6';

        return (
            <div onClick={this.handleOnClick} className={`flex flex-row justify-center items-center ${padding} ${color} ${textColor} ${hoverColor} rounded ${width} cursor-pointer ${textSize} font-bold`}>{title}</div>
        )
    }
}

Button.defaultProps = {
    title: 'Cancel',
    onClick(){},
    disabled: false,
    color: 'bg-gray-700',
    hoverColor: 'hover:bg-gray-800',
    textColor: 'text-gray-200',
    block: false
}

export default Button;