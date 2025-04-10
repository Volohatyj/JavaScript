'use strict';

// console.log('document.body');
// console.log(document.body);
// console.log(document.body.childNodes);
// console.log(document.body.lastChild);
// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);
// console.log(document.documentElement);

// console.log(document.querySelector('#current'));
// console.log(document.querySelector('#current').parentNode);
// console.log(document.querySelector('#current').parentNode.parentNode);

// console.log(document.querySelector('[data-current="3"]'));
// console.log(document.querySelector('[data-current="3"]').previousSibling);
// console.log(document.querySelector('[data-current="3"]').nextSibling);
// console.log(document.querySelector('[data-current="3"]').nextElementSibling);
// console.log(document.querySelector('[data-current="3"]').nextSibling.nextSibling);

const childNodes = document.body.childNodes;
for (let node of childNodes) {
    if (node.nodeName != '#text') {
        console.log(node);
    };
};