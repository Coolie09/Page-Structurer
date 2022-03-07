// ==UserScript==
// @name         PageStructurer
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Shows structured page and lets you change it!
// @author       Coolie09
// @match        https://*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.de
// @grant        none
// ==/UserScript==

"use strict"
let obj = {};

var all = document.getElementsByTagName("*");
let nA = Array.from(all);

window.addEventListener("keydown", e => {
    if (e.key == "e") {
        let w = confirm("Show page structure? This may take max. 2 minutes (Depends on your memorie size!)")
        if (w) interThrowAllExp(nA);
        else console.error("Aborded program!")
    }
})

function interThrowAllExp(arr) {
    for (let i=0, max=all.length; i < max; i++) {addBorder(arr[i]); arr[i].addEventListener("mouseover", e => {e.target.style.border = "solid green 5px";  addTitle(e)}); arr[i].addEventListener("mouseout", e => {e.target.style.border = "solid black 1px"; e.target.style.zindex = "10000px"; })}
}

function addTitle(object) {
    object.target.setAttribute("title", `<${object.target.localName}>`)
    // object.setAttribute("title", `${object.target.tagname}`)
}


function addBorder(element) {
    element.style.border = "solid black 1px";
}
