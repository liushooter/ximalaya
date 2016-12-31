chrome.runtime.onMessage.addListener(function(msg, sender, sendRespone){
  if(msg.action == "download" && msg.status == "ok") {
    chrome.extension.getBackgroundPage().link_data = msg.data;
  }
});
