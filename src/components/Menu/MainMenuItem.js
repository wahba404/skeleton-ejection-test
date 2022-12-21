import React from "react";

class MainMenuItem extends React.Component {
    render() {
        const { onClick, title, description } = this.props;
        return (
            <div onClick={onClick} className="flex w-full flex-col bg-gray-800 hover:bg-violet-900 cursor-pointer rounded space-y-2 p-4">
                <div className="text-gray-200 font-bold text-xl">{title}</div>
                <div className="text-gray-400 text-sm">{description}</div>
            </div>
        );
    }
}

MainMenuItem.defaultProps = {
    onClick(){},
    title: '',
    description: 'Click and find out more!'
}
export default MainMenuItem;