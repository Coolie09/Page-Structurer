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
    for (let i=0, max=all.length; i < max; i++) {addBorder(arr[i]); arr[i].addEventListener("mouseover", e => {e.target.style.border = "solid green 5px";  }); arr[i].addEventListener("mouseout", e => {e.target.style.border = "solid black 1px"; e.target.style.zindex = "10000px"; })}
}


function addBorder(element) {
    element.style.border = "solid black 1px";
}

// function removeUNTags(arr) {
//     let idx = [];
//     arr.forEach(e => {
//         if (e.tagName == "STYLE" || e.tagName == "SCRIPT") {
//             idx.push(arr.indexOf(e))
//         }
//     })

//     idx.forEach(e => {
//         if (!(e > -1)) console.error("An orror occured! Please try again or contact Coolie09 on GitHub! Thank you!")
//         else arr.splice(e, 1);
//     })
//     console.log(idx)
//     return arr
// }

// function getEveryChild(arr) {
//     let l = Object.entries(obj).length+1
//     arr.forEach(e => {
//         obj[l] = [];
//         obj[Object.entries(obj).length].push(e);
//     })
//     // concat()
//     if (lookForMore(obj)) getEveryChild(obj.entries());
//     return true
// }

// function lookForMore(prop) {
//     prop[Object.entries(prop).length-1].forEach(e => {
//         if (e.children.length > 0) return true
//     })
//     return false
// }

// function concat() {
//    ((Object.entries(obj).length)-1) = [];
//     return (Object.entries(obj).length-1)
// }

// function filter(arr) {
//     console.warn(arr.filter(e => e.tagName != "SCRIPT" || e.tagName != "NOSCRIPT" || e.tagName != "STYLE"))
// }
// function interThrowAll(arr) {
//     let d = []
//     for (let i=0, max=all.length; i < max; i++) {d.push(arr[i]);}
//     console.log(d);// return d
// }