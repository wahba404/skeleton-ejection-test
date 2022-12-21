/**
 * SettingsPanel
 * 
 * Allow the user to configure the following:
 * 1. Local storage directory (so we dont overwrite their configuration!)
 * 2. Index to Algolia? Store the local configuration files to an Algolia index? (off by default) (checkboxes for which configs to save)
 * 3. Generate rules index? (see 2)
 */
import React, { useState } from "react";
import { Button, Panel } from "../common";
import { InputText } from "../common/Form";


function handleConfigurationStorage(path) {
    console.log(path);
}

function handleToggleRulesIndex(e) {

}

const SettingsPanel = ({ settings, onSave, onCancel }) => {
    console.log('settings ', settings);

    const rulesIndex = settings !== null ? ('rules_index' in settings ? settings['rules_index'] : false) : false;
    const localDir = settings !== null ? ('local_dir' in settings ? settings['local_dir'] : '') : '';
    const fullName = settings !== null ? ('full_name' in settings ? settings['full_name'] : '') : '';
    const email = settings !== null ? ('email' in settings ? settings['email'] : '') : '';

    const [configIndexRules, setConfigIndexRules] = useState(rulesIndex);
    const [configLocalDirectory, setConfigLocalDirectory] = useState(localDir);
    const [configFullName, setConfigFullName] = useState(fullName);
    const [configEmail, setConfigEmail] = useState(email);
    
    return settings !== null && (
        <div className="flex flex-col space-y-4 h-full">
        <Panel>
            <div className="flex flex-col space-y-4">
                {/* path to local config files */}
                <div className="flex flex-col justify-between bg-indigo-900 p-6 rounded">
                    <div className="flex flex-col text-base text-gray-300 justify-start space-y-2">
                        <p className="text-lg font-bold text-gray-300">Path to Application Config Files</p>
                        <p>The Sitehub application will store your configuration files at the following path.</p>
                        <InputText
                            type="text"
                            name={'local_dir'}
                            onChange={(e) => setConfigLocalDirectory(e.target.value)}
                            value={configLocalDirectory || ''}
                            placeholder="Local Storage directory"
                            disabled
                        />
                    </div>
                </div>

                {/* full name */}
                <div className="flex flex-col justify-between bg-indigo-900 p-6 rounded">
                    <div className="flex flex-col text-base text-gray-300 justify-start space-y-2">
                        <p className="text-lg font-bold text-gray-300">Full Name</p>
                        <p>Full name is used to set the owner/author during content creation, editing and deletion.</p>
                        <InputText
                            type="text"
                            name={'full_name'}
                            onChange={(e) => setConfigFullName(e.target.value)}
                            value={configFullName} 
                            placeholder="First Last"
                            disabled
                        />
                    </div>
                </div>

                 {/* email */}
                 <div className="flex flex-col justify-between bg-indigo-900 p-6 rounded">
                    <div className="flex flex-col text-base text-gray-300 justify-start space-y-2">
                        <p className="text-lg font-bold text-gray-300">Email Address</p>
                        <p>Email address is solely used for user identification purposes.</p>
                        <InputText
                            type="text"
                            name={'email'}
                            onChange={(e) => setConfigEmail(e.target.value)}
                            value={configEmail} 
                            placeholder="you@example.com"
                            disabled
                        />
                    </div>
                </div>

                 {/* rules index */}
                 <div className="flex flex-col justify-between bg-indigo-900 p-6 rounded">
                    {/* <div className="flex flex-col text-base text-gray-300 justify-start space-y-2">
                        <p className="text-lg font-bold text-gray-300">Index Rules upon Application Load</p>
                        <p>Generate an index containing the Algolia rules to be used for audit purpose.</p>
                        <InputText
                            type="text"
                            name={'rules'}
                            onChange={handleConfigurationStorage}
                            value={settings !== null ? settings['rules'] : ''} 
                            placeholder="First Last"
                            disabled
                        />
                    </div> */}

                    <div className="flex flex-row items-start space-x-4">
                      <input
                        id="search_enabled"
                        name="search_enabled"
                        type="checkbox"
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded mt-2"
                        onChange={() => setConfigIndexRules(!configIndexRules)}
                        checked={configIndexRules}
                      />
                      <div className="flex flex-col text-base text-gray-300 justify-start">
                        <label htmlFor="search_enabled" className="font-bold text-gray-300 text-lg">
                          Index the Algolia Rules in Account
                        </label>
                        <p>A Rules index will be generated in the AppId account if this box is checked</p>
                      </div>
                    </div>
                </div>
            </div>
        </Panel>
        <div>
            <Button title="Save Changes" />
        </div>
        </div>
    )
};

export default SettingsPanel;