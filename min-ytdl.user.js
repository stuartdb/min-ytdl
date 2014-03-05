// ==UserScript==
// @name min-ytdl
// @version 0.0
// @namespace https://github.com/stuartdb/min-ytdl
// @author Stuart Baker
// @description Places a youtube-dl command with video link on youtube video pages
// @include *://www.youtube.com/watch*
// @downloadURL https://github.com/stuartdb/min-ytdl/raw/master/min-ytdl.user.js
// @updateURL https://github.com/stuartdb/min-ytdl/raw/master/min-ytdl.meta.js
// @run-at document-end
// ==/UserScript==
console.log("script start");
function find_id() {
    "use strict";
    var i = 0,
        url = "unknown";

    url = document.URL;
    if (url.substring(0,5) == "https") {
        url = url.substring(0,43);
    } else {
        url = url.substring(0,42);
    }

    console.log(url);
    return url;
}

console.log(find_id());
console.log("script end");
