// this is the code which will be injected into a given page...

(function() {

	// just place a div at top right
	/*var div = document.createElement('main');
	div.style.position = 'fixed';
	div.style.top = 0;
	div.style.right = 0;
	div.textContent = 'Injected!';
	document.body.appendChild(div);

    alert('inserted self... giggity');*/

    var s = document.createElement("script");
    s.src = chrome.extension.getURL("script.js");
    s.onload = function() {
      this.remove();
    };
    (document.head || document.documentElement).appendChild(s);
    
    
})();