/**
 * dialogController.js
 * 
 * Open a dialog window for choosing files
 */
const { dialog } = require('electron');

const showDialog = (win, message) => {
    dialog.showOpenDialog({ properties: ['openFile'], filters: [{ name: 'CSV', extensions: ['csv']}] })
        .then(result => {
            const filepath = result.filePaths[0];
            // let's make sure this is a csv file.
            if (filepath) {
                win.webContents.send('file-chosen', { filepath });
            } else {
                win.webContents.send('file-chosen-error', { message: "Error choosing file" });
            }
        }).catch(e => win.webContents.send('file-chosen-error', 'Please choose a csv file.'));
};

const fileChosenError = (win, message) => {
    win.webContents.send('file-chosen-error', message);
}

module.exports = {
    showDialog,
    fileChosenError
};