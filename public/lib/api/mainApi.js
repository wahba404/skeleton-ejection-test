/**
 * mainApi.js
 * 
 * All of your sub-apis will live in this file, simply import the api you create 
 * and add to the mainApi. The mainApi will be exposed to the renderer using the electron bridge.
 * 
 */
const { ipcRenderer, shell } = require('electron');
const secureStoreApi = require('./secureStoreApi');
const algoliaApi = require('./algoliaApi');

// Events constants
const events = require('../events');

const mainApi = {

    // keep these for general use
    on: (event, fn) => ipcRenderer.addListener(event, fn),
    removeAllListeners:() => ipcRenderer.removeAllListeners(),
    removeListener:(name, fn) => ipcRenderer.removeListener(name, fn),

    // api's begin here
    algolia: algoliaApi,
    secureStoreApi: secureStoreApi,

    // included these in the bridge
    events: {...events},
}

module.exports = mainApi;