/**
 * index.js
 * 
 * Add all of your methods that have been exported for convenience.
 */
const { showDialog, fileChosenError } = require('./dialogController');
const { isEncryptionAvailable, saveData, getData } = require('./secureStoreController');
const { listIndices } = require('./algoliaController');

module.exports = {
    showDialog,
    fileChosenError,
    isEncryptionAvailable,
    listIndices,
    saveData,
    getData
}