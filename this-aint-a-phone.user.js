// ==UserScript==
// @name         This Ain't A Phone
// @namespace    https://schiff.io
// @version      2
// @description  Automatically redirect from mobile webpages to the non-mobile equivalent
// @author       Hayden Schiff (oxguy3)
// @match        *://*.m.wikipedia.org/*
// @match        *://mobile.nytimes.com/*
// @match        *://m.xkcd.com/*
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

        // New York Times
        if (loc.host == 'mobile.nytimes.com') {
            destination = loc.href.replace(/\/\/mobile\.nytimes\.com/i, '//www.nytimes.com');
        }

        // Twitter
        if (loc.host == 'mobile.twitter.com') {
            destination = loc.href.replace(/\/\/mobile\.twitter\.com/i, '//twitter.com');
        }

        // Wikipedia
        if (loc.host.endsWith('.m.wikipedia.org')) {
            destination = loc.href.replace(/\.m\.wikipedia\.org/i, '.wikipedia.org');
        }

        // xkcd
        if (loc.host == 'm.xkcd.com') {
            destination = loc.href.replace(/\/\/m\.xkcd\.com/i, '//xkcd.com');
        }

        return destination;
    }

    var destination = checkLocation(window.location);
    if (destination !== false) {
        window.location.href = destination;
    }
})();
