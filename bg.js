var imageOnClick = function (info, tab) {
  window.open("https://whatanime.ga/?url="+info.srcUrl);
};

var title = "Search on whatanime.ga";
var id = chrome.contextMenus.create({"title": title, "contexts":["image"], "onclick": imageOnClick});