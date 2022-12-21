const path = require('path');
const { readFileSync, writeFileSync, existsSync, mkdirSync, openSync, closeSync, readdir, unlink, unlinkSync, readdirSync } = require('fs');

function ensureDirectoryExistence(filePath) {
    var dirname = path.dirname(filePath);
    if (existsSync(dirname)) {
      return true;
    }
    ensureDirectoryExistence(dirname);
    mkdirSync(dirname);
}

/**
 * getFileContents
 * 
 * Will attempt to get the file contents 
 * and will generate directory and file if this does not exist.
 * 
 * @param {string} filepath path to the file
 * @returns 
 */
function getFileContents(filepath) {
    try {
        // lets first make sure all is there...
        ensureDirectoryExistence(filepath);

        // and now lets read the file...
        let fileContents = JSON.stringify([]);
        let fileContentsArray = [];
        if (existsSync(filepath)) {
            fileContents = readFileSync(filepath, 'utf8');
            fileContentsArray = JSON.parse(fileContents);
        } else {
            // we should make the file...
            closeSync(openSync(filepath, 'w'));
        }
        
        return fileContentsArray;
    } catch(e) {
        console.log(e.message);
        return [];
    }
}

function writeToFile(filename, data) {
    try {
        // write the new pages configuration back to the file
        return writeFileSync(filename, data);
    } catch(e) {
        return false;
    }
}

/**
 * 
 * @param {string} directory 
 * @returns 
 */
function removeFilesFromDirectory(directory, excludeFiles = []) {
    return directory !== '' && directory && readdir(directory, (err, files) => {
        if (err) throw err;
      
        for (const file of files) {
            console.log(file);
            if (!excludeFiles.includes(file)) {
                unlinkSync(path.join(directory, file), err => {
                    if (err) throw err;
                });
            }
        }
      });
}


module.exports = { ensureDirectoryExistence, getFileContents, writeToFile, removeFilesFromDirectory }