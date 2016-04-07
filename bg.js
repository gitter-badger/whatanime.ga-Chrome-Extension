var imageOnClick = function (info, tab) {
  chrome.storage.sync.get({
    autoSearch: true
  }, function(options) {
    if(options.autoSearch){
        window.open("https://whatanime.ga/?auto&url="+info.srcUrl);
    }
    else{
        window.open("https://whatanime.ga/?url="+info.srcUrl);
    }
  });
  
};

var title = "Search on whatanime.ga";
var id = chrome.contextMenus.create({"title": title, "contexts":["image"], "onclick": imageOnClick});