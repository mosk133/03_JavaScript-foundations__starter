/*
    What would each of these lines of code do:

    1. true && console.log("moo");
    2. false && console.log("moo moo?")
    3. true || console.log("hello friend");
    4. false || console.log("bye friend");

    Once you see the results, write in a comment why it works that way
*/

// 1.
true && console.log("moo");
// && (AND) operator in JavaScript only evaluate the second operand if the first one is true.
// Since true && console.log("moo") has a true as the first operand, it will proceed to execute console.log("moo").


// 2.
false && console.log("moo moo?");
// && (AND), JavaScript stops evaluating as soon as it encounters a false on the left side
// console.log("moo moo?") is never reached or executed here.


// 3.
true || console.log("hello friend");
// || (OR) operators in JavaScript will stop evaluating as soon as they encounter true on the left side.
// Since the first operand is true, JavaScript doesn't console.log("hello friend"), nothing is printed.


// 4.
false || console.log("bye friend");
// || (OR) operator, JavaScript only evaluates the second operand if the first one is false.
// Here, false || console.log("bye friend") has a false as the first operand, it moves to execute console.log("bye friend").
