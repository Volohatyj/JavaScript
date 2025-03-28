"use strict"
 function first(lang, callback){
    console.log(`Я вчу ${lang}`);
    callback();
 }

function second() {
    console.log("Ура!");
}

first('JS', second);