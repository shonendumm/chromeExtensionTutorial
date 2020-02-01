// This code below will run every time in every tab:
// var firstHref = $("a[href^='http']").eq(0).attr("href");
// var res = "SooHiiiiaan:" + firstHref
// console.log(res);
// If we leave it as this.

// Page or Tab specific scripts
// Listens for message - can be from background.js when extension button is clicked
chrome.runtime.onMessage.addListener( 
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      var firstHref = $("a[href^='http']").eq(0).attr("href"); //select and read 1st link

      alert(firstHref);
      chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstHref});
    }
  }
);