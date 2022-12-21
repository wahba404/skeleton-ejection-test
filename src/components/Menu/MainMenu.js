import React from "react";
import { Panel } from "../common";
import { withRouter } from "../common/WrappedComponent";
import MainMenuItem from "./MainMenuItem";

class MainMenu extends React.Component {
    render() {
        return (
            <>
                <MainMenuItem onClick={() => this.props.navigate('/bulk-rules-from-csv')} title="Generate Bulk Rules from CSV File" />
                <MainMenuItem onClick={() => this.props.navigate('/rules-manager')} title="Visual Rules Configuration" />
            </>
        );
    }
}

export default withRouter(MainMenu);