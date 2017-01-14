"use strict";
var rx_1 = require("rxjs/rx");
var numbers = [1, 5, 10];
var source = rx_1.Observable.create(function (observer) {
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var n = numbers_1[_i];
        observer.next(n);
    }
    observer.complete();
});
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
