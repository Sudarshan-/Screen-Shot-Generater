function screenshot() {

    chrome.tabs.captureVisibleTab(null, {
        format: "jpeg",
        quality: 100
    }, function (dataUrl) {
        //console.log("Inside");
        //console.log(dataUrl);
        //document.getElementById('preview').src=dataUrl;
        window.open(dataUrl);
    });
}
screenshot();
