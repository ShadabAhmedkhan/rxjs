import {Observable, Observer} from "rxjs/rx"; // import module rxjs

let numbers =[1, 5, 10]; //create varible number in to array
let source =Observable.from(numbers);
class MyObserver implements Observer<number> {
    next(value){
        console.log(`value: ${value}`);
    }
    error(e){
        console.log(`error: ${e}`);
    }
    completed(){
        console.log("complete");
    }
}
source.subscribe(new MyObserver());