// function x() {
//     let a = 10
//     function y() {
//         console.log(a)
//     }
//     y()
// }

// x()

// console.log(["ajay", "sahani", "geeta"].slice(1, 2))
// let a = [1, 2, 3, 4].splice(3, 0, "ajay", "sahani")
// console.log(a)

// Data Structure and algorithm

// function getName(x, y) {
//     if (x === 0) {
//         return y
//     }
//     return function (x, y)
// }

// getName()\

// function getName(n) {
//     if (n == 0 || n == 1) return n;

//     if (n % 3 != 0) return 0;

//     return getName(n / 3)
// }

// let a = getName(3)
// console.log(a)

function f() {
    console.log(`before the loop: i=${i}`)

    for (var i = 0; i < 3; i += 1) {
        setTimeout(() => {
            console.log(`inside the loop: i=${i}`)
        }, 1000)
    }

    console.log(`after the loop: i=${i}`)
}

f()

console.log(a)

var a = 10