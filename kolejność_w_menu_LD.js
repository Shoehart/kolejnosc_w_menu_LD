// ==UserScript==
// @name         Kolejnoœæ w menu - ver 2.
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Przestawia kolejnoœæ w menu w LD
// @author       RShT
// @match        https://servicedesk.net.pp/SD_Operator.WebAccess/wd/*
// ==/UserScript==

function swap(theArray, index1, index2) {
  var temp = theArray[index2];
  theArray[index2] = theArray[index1];
  theArray[index1] = temp;
}

var list = document.getElementById('shortcutButtonPanel');
var items = list.childNodes;
var itemsArr = [];
for (var i in items) {
    if (items[i].nodeType == 1) { // get rid of the whitespace text nodes
        itemsArr.push(items[i]);
    }
}

itemsArr[0].style.display = 'none';
itemsArr[6].style.display = 'none';
itemsArr[11].style.display = 'none';
itemsArr[12].style.display = 'none';
itemsArr[17].style.display = 'none';

//             X  Y    // x = stara pozycja, y = nowa pozycja w menu
swap(itemsArr, 0, 1);
swap(itemsArr, 1, 10);
swap(itemsArr, 4, 15);
swap(itemsArr, 5, 13);
swap(itemsArr, 6, 15);
swap(itemsArr, 7, 16);
swap(itemsArr, 8, 17);
swap(itemsArr, 8, 14);
swap(itemsArr, 10, 14);

for (i = 0; i < itemsArr.length; ++i) {
  list.appendChild(itemsArr[i]);
}