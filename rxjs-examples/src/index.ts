import { from, interval } from "rxjs";
import { map, take, combineAll } from 'rxjs/operators';
// import { Observable } from 'rxjs';
// var observable = Observable.create((observer:any) => {
//     observer.next('Hello World!');
//     observer.next('Hello Again!');
//     observer.complete();
//     observer.next('Bye');
// })

// const source = from([1, 2, 3, 4, 5]);
// //add 10 to each value
// const example = source.pipe(map((val) =>  val + 10));

// example.subscribe((data) => {
//     console.log(data + ' - ');
// });
// observable.subscribe(
//     (x:any) => logItem(x),
//     (error: any) => logItem ('Error: ' + error),
//     () => logItem('Completed')
// );
// function logItem(val:any) {
//     var node = document.createElement("li");
//     var textnode = document.createTextNode(val);
//     node.appendChild(textnode);
//     document.getElementById("list").appendChild(node);
// }

// emit every 1s, take 2
const source$ = interval(1000).pipe(take(2));
// map each emitted value from source to interval observable that takes 5 values
const example$ = source$.pipe(
  map(val =>
    interval(1000).pipe(
      map(i => `Result (${val}): ${i}`),
      take(5)
    )
  )
);
let result = example$.pipe(combineAll());
 result.subscribe(x=> console.log(x));

 export class MyClass {
     public myFunction (){
         console.log("Hello");
     }
 }

