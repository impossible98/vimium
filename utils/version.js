"use strict";
function getCurrentVersion() {
    return chrome.runtime.getManifest().version;
}