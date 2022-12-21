const { contextBridge } = require('electron');
const mainApi = require('./lib/api');

contextBridge.exposeInMainWorld('mainApi', mainApi);