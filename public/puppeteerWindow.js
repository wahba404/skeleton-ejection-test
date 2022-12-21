const { BrowserWindow, app } = require("electron");
const pie = require("puppeteer-in-electron")
// const puppeteer = require("puppeteer-core");

const createPuppeteerWindow = async (browser, windows, url = 'https://www.algolia.com') => {

    console.log(browser);
 
    const puppeteerWindow = new BrowserWindow();
    windows.add(puppeteerWindow);
    // handle the closed and deletion of the window
    puppeteerWindow.on("closed", () => {
        windows.delete(puppeteerWindow);
        puppeteerWindow = null;
    });
    await puppeteerWindow.loadURL(url);

    const page = await pie.getPage(browser, puppeteerWindow);
    console.log(page.url());
//   window.destroy();
}

module.exports = {
    createPuppeteerWindow
};
