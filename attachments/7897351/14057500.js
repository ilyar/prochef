// ==UserScript==
// @name        Chef Wiki Cleanup
// @namespace   http://icyblue.org/code/userscripts/
// @description Clean up Chef Wiki
// @include     http://wiki.opscode.com/#
// ==/UserScript==

var footer = document.getElementById('footer');
if (footer) {
    footer.parentNode.removeChild(footer);
}