import React from "react";

class MainSection extends React.Component {
    render() {
        return (
            <div className="flex flex-col bg-gray-900 h-full overflow-hidden w-full">{this.props.children}</div>
        )
    }
}

export default MainSection;