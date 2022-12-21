import React from "react";
import { MainLayout, withRouter, Heading, ButtonIcon } from "../common";
import SettingsPanel from "./SettingsPanel";

const mainApi = window.mainApi;
const { events } = mainApi;

class SettingsManager extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            applications: null,
            settings: null
        }
    }

    componentDidMount = () => {
        mainApi.removeAllListeners();
        mainApi.on(events.SECURE_STORE_GET_APPLICATIONS_COMPLETE, this.apiHandleGetApplicationsComplete);
        mainApi.on(events.SECURE_STORE_GET_APPLICATIONS_ERROR, this.apiHandleGetApplicationsError);

        // settings
        mainApi.on(events.SETTINGS_GET_COMPLETE, this.apiHandleGetSettingsComplete);
        mainApi.on(events.SETTINGS_GET_ERROR, this.apiHandleGetSettingsError);

        // API Calls
        mainApi.secure.getApplications();
        mainApi.settings.getSettings();
    }

    apiHandleGetSettingsComplete = (e, message) => {
        console.log('settings', message);
        this.setState({ settings: message.settings });
    }

    apiHandleGetSettingsError = (e, message) => {
        console.log('settings error ', message);
        this.setState({ settings: null });
    }

    apiHandleGetApplicationsComplete = (e, message) => {
        this.setState({
            applications: message
        })
    }

    apiHandleGetApplicationsError = (e, message) => {
        this.setState({
            applications: null
        })
    }
   

    handleOpenConfigDirectory = () => {
        mainApi.openConfigDirectory();
    }

    render() {
        const { applications } = this.state;
        return applications !== null ? (
            <MainLayout padding={true} showMenu={true}>
                <div className="flex flex-col w-full h-full bg-gray-900 rounded">
                    <div className="flex flex-row justify-between items-center pr-4">
                        <Heading title="Settings" />
                        <ButtonIcon icon="file" onClick={this.handleOpenConfigDirectory} />
                    </div>
                    <SettingsPanel settings={this.state.settings} />
                </div>
            </MainLayout>
        ) : (<div>test</div>)
    }
}

export default withRouter(SettingsManager);