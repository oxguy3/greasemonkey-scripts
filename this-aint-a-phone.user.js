// ==UserScript==
// @name         This Ain't A Phone
// @namespace    https://schiff.io
// @version      1
// @description  Automatically redirect from mobile webpages to the non-mobile equivalent
// @author       Hayden Schiff (oxguy3)
// @match        *://*.m.wikipedia.org/*
// @match        *://mobile.nytimes.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // Checks if the location is a mobile site, and returns the URL of the non-mobile equivalent
    // Params: loc: window.location
    // Returns: string of new URL, or false if no match
    function checkLocation(loc) {
        var destination = false;

        // Wikipedia
        if (loc.host.endsWith('.m.wikipedia.org')) {
            destination = loc.href.replace(/\.m\.wikipedia\.org/i, '.wikipedia.org');
        }

        // The New York Times
        if (loc.host == 'mobile.nytimes.com') {
            destination = loc.href.replace(/\/\/mobile.nytimes.com/i, '//www.nytimes.com');
        }

        return destination;
    }

    var destination = checkLocation(window.location);
    if (destination !== false) {
        window.location.href = destination;
    }
})();
