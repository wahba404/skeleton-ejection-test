import React from "react";

class Panel extends React.Component {
    render() {
        const { padding, horizontal, backgroundColor } = this.props;
        return (
            <div className={`flex ${horizontal === true ? 'flex-row' : 'flex-col'} w-full h-full ${padding === true ? 'p-4' : 'p-0'} ${backgroundColor !== null && backgroundColor} rounded`}>
                {this.props.children}
            </div>
        )
    }
}

Panel.defaultProps = {
    horizontal: false,
    padding: true,
    backgroundColor: 'bg-gray-800'
}

export default Panel;