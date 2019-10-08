//sincrono
function f (cb){
    for (var a=0; a<10; a++){
        cb(a);
    }
}

//mine
// function callback(numero){
//     console.log(numero);
// }

// f(callback);

// f((a)=> {console.log(a)})
//////////////////////////////////////////////////////
//asincrono (varias maneras)
// function f(cb) {
//     for (let a = 0; a < 10; a++) {
//         setTimeout(() => {
//             cb(a);
//         }, 0);
//         // cb(a);
//     }
// }
// function f(cb) {
//     for (var a = 0; a < 10; a++) {
//         setTimeout(cb, 0, a);
//         // cb(a);
//     }
// }
f((a)=> {console.log(a)})
console.log("hilo ppal");