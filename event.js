
var bodyContext = {
    "id": "newsBody",
    "title": "select an article",
    "contexts": ["selection"]
};
var headlineContext= {
    "id": "newsheadline",
    "title": "select as title",
    "contexts": ["selection"]
};



chrome.contextMenus.create(bodyContext);
chrome.contextMenus.create(headlineContext);


chrome.contextMenus.onClicked.addListener(function (cd) {
    if (cd.menuItemId == "newsBody") {
        newsBody = cd.selectionText;
        chrome.storage.sync.set({
            "body": newsBody
        }, function () {});
 
    }
});

chrome.contextMenus.onClicked.addListener(function (cd) {
    if (cd.menuItemId == "newsheadline") 
    {
        newsHeadline = cd.selectionText;
        chrome.storage.sync.set(
            {
                "headline": newsHeadline
            }, function () 
            {});
           
    }
});