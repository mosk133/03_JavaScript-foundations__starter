/* 
    1. Define function 'getTypeOf', which receives a value as paramenter and returns the type of this value
        Use typeof to ckech the types for each of the main 5 primitive types (string, number, boolean, null, undefined)
    2. Log the result of any function call.
*/

// 1.
function getTypeOf(value) {
        return typeof value;
    }

// 2.
console.log(getTypeOf("Hello"));
console.log(getTypeOf(123));
console.log(getTypeOf(true));
console.log(getTypeOf(null));
console.log(getTypeOf(undefined));
