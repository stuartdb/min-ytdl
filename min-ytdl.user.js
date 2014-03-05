// ==UserScript==
// @name min-ytdl
// @version 0.1
// @namespace https://github.com/stuartdb/min-ytdl
// @author Stuart Baker
// @description Places a youtube-dl command with video link on youtube video pages
// @include *://www.youtube.com/watch*
// @downloadURL https://github.com/stuartdb/min-ytdl/raw/master/min-ytdl.user.js
// @updateURL https://github.com/stuartdb/min-ytdl/raw/master/min-ytdl.meta.js
// @run-at document-end
// ==/UserScript==
function get_url() {
    "use strict";
    var url = "unknown";

    url = document.URL;
    if (url.substring(0, 5) === "https") {
        url = url.substring(0, 43);
    } else {
        url = url.substring(0, 42);
    }
    return url;
}

function insert_details(url) {
    "use strict";
    var html,
        anchor,
        command;

    command = "youtube-dl " + url;
    html = '<input class="yt-uix-form-input-text"';
    html += ' value="' + command + '" type="text"';
    html += ' style="width: 100%; border: none; text-align: center; font-weight: bold;">';
    anchor = document.getElementById("watch7-content");
    anchor.insertAdjacentHTML('afterbegin', html);
}
insert_details(get_url());
