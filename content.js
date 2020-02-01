// var firstHref = $("a[href^='http']").eq(0).attr("href");
// var res = "SooHiiiiaan:" + firstHref
// console.log(res);

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      var firstHref = $("a[href^='http']").eq(0).attr("href");

      alert(firstHref);
    }
  }
);