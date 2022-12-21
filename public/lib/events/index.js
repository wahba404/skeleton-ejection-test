/**
 * Events
 * 
 * Sample events (constants) that are to be used for listeners
 */
const secureStorageEvents = require('./secureStorageEvents');
const algoliaEvents = require('./algoliaEvents');

module.exports = {
    ...secureStorageEvents,
    ...algoliaEvents,
}