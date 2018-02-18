// this is the background code...

// listen for our browerAction to be clicked
//chrome.browserAction.onClicked.addListener(function (tab) {
	// for the current tab, inject the "inject.js" file & execute it
//	chrome.tabs.executeScript(tab.ib, {
//		file: 'inject.js'
//	});
//});
/*chrome.webRequest.onBeforeRequest.addListener(
	function(details){
		chrome.tabs.executeScript(tab.ib, {
			file: 'inject.js'
		});
	},
	{
    	urls: ["<all_urls>"],
    	types: ["main_frame"]
  	},
  	["blocking"]
);*/
chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    console.log(details.url);
    if (!details.url.startsWith("http://localhost:8080")) {
      return { redirectUrl: "http://localhost:8080/#/lander" };
    }
  },
  {
    urls: ["<all_urls>"], // or <all_urls>
    types: ["main_frame", "sub_frame"]
  },
  ["blocking"]
);