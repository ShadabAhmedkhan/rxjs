"use strict";
var rx_1 = require("rxjs/rx");
var numbers = [1, 5, 10];
var source = rx_1.Observable.create(function (observer) {
    var index = 0;
    var produceValue = function () {
        observer.next(numbers[index++]);
        if (index < numbers.length) {
            setTimeout(produceValue, 2000);
        }
        else {
            observer.complete();
        }
    };
    produceValue();
}).map(function (n) { return n * 2; })
    .filter(function (n) { return n > 4; });
source.subscribe(function (value) { return console.log("value: " + value); }, function (e) { return console.log("error: " + e); }, function () { return console.log("completed"); });
// class MyObserver implements Observer<number> {
//     next(value){
//         console.log(`value: ${value}`);
//     }
//     error(e){
//         console.log(`error: ${e}`);
//     }
//     completed(){
//         console.log("complete");
//     }
// }
// source.subscribe(new MyObserver()); 
