# Page-Structurer
# Warning! ⚠️
This code may contain (unlikely) a few bugs! Please contact me in therefor in the issues section! Thx a lot! <br>
It is important, to have installed the chrome extension "tamperkey"!

# What does this script do?
This script allows you, to analyse HTML-Pages an to see, how they are constructed. <br>
To analyse them analog, the script creates a PDF-File with the hole HTML-Tag-tree <br>
This is very useful when it comes to understand, how pages are buildt and which features they use! <br>
# How does this script work? 
Therefore, you have to press <b> e </b> on your keyboard, <br>
and confirm the alert coming! <br>
This is, as usual, easily changable in the code! 
``` 
window.addEventListener("mouseover", e => { 
  if (e.key == "<b><i>e</i></b>") {
      [...]
    }
})
```
While hovering over the elements, the title'll show the element-tag-name and markt its section with an green color <br>
<strong>This feature will be extended soon with more detailed information!</strong><br>
<br>
This color is also changable to any other:
```
function addBorder(element) {
    element.style.border = "solid black 1px";
}

arr[i].addEventListener("mouseover", e => {e.target.style.border = "solid green 5px"; [...]})
```

# Future Add-Ons
- create PDF-File of HTML-Tag-tree for printing it (++)
- better information readout when hovering over elements (++)
- reverse the marking (exit the script) (+-)

## legend
(++)≙ very soon <br>
(+-)≙ probably soon <br>
(-) ≙ not soon
<br>


This script is subject to the MIT-License! Please note and respect this!<br>
@Coolie09 Copyright© 2022
