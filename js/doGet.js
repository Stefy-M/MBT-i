//********************************************************************************
//DOGET.GS
//*********************************************************************************
//This file contains the doGet() function, which serves up the app, 
//responding to get requests with query strings as appropriate to dish out
//new pages.
//*********************************************************************************

function doGet(e) {
    var scriptProperties, sName, url, format, template, faviconUrl, tName, thisRound;
    //faviconUrl = "https://dl.dropboxusercontent.com/s/79q9a1xy2148unf/SpeedScore3Icon.ico";
    return HtmlService.createHtmlOutputFromFile("html/LoginUI.html")
        .setSandboxMode(HtmlService.SandboxMode.IFRAME)
        .addMetaTag('viewport', 'width-device-width, initial-scale=1')
        .setTitle("Welcome to MBT-i")
    // .setFaviconUrl(faviconUrl);
}

function include(filename) {

    return HtmlService.createHtmlOutputFromFile(filename)
        .getContent();
}
