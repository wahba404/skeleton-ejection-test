/**
 * algoliaController.js
 * 
 * This is a sample controller that is called from the electron.js file
 * 
 * The electron.js file contains listeners from the renderer that will call 
 * the controller methods as seen below.
 */
const algoliasearch = require('algoliasearch');
const events = require('../events');

const algoliaController = {

    /**
     * loadPagesForApplication
     * Load the pages for the application <userdata>/appId/pages.json
     * - filter out the indices that are "rule" indices
     * 
     * @param {BrowserWindow} win the main window
     * @param {string} appId the application id from Algolia
     */
    listIndices: (win, application) => {
        try {
            const searchClient = algoliasearch(
                application['appId'],
                application['key']
            );
            searchClient.listIndices()
                .then(({ items }) => {
                    const filtered = items.filter(item => item.name.substring(0,7) !== 'sitehub');
                    win.webContents.send(events.ALGOLIA_LIST_INDICES_COMPLETE, filtered );
                })
                .catch(e => {
                    win.webContents.send(events.ALGOLIA_LIST_INDICES_ERROR, { error: e.message });
                })
        } catch(e) {
            win.webContents.send(events.ALGOLIA_LIST_INDICES_ERROR, { error: e.message });
        }
    },

};

module.exports = algoliaController;