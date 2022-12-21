/**
 * algoliaApi.js
 * 
 * This is a stub sample that can be used as a template for other api's 
 */
// ipcRenderer that must be used to invoke the events
const { ipcRenderer } = require("electron");
/**
 * Sample
 *
    const {
        ALGOLIA_LIST_INDICES,
    } = require('../events');
 */

const algoliaApi = {
    // SAMPLE
    // listIndices:(application) => ipcRenderer.invoke(ALGOLIA_LIST_INDICES, application),
};

module.exports = algoliaApi;