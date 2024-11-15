# JavaScript Basics

Answer following questions in this file.

## What is JavaScript?

JavaScript is a high-level programming language used in most browsers. It is used to create interactive effects and functions within websites. It follows the ECMAScript standard, which is a scripting language that defines the basic characteristics of languages ​​such as JavaScript.

## About values

### What is a primitive value?

It is the data that is stored directly in a variable. When we assign a value to that variable it is stored in memory. They include values ​​such as int, bool, strings, etc.

### Which are primitive values? Explain them with at least one example for primitive.

string: Hello whats your name
number: 4
bigint: 5000000000000000000000000000000000000000000
boolean: true or false
undefined: the value of variable is not defined
symbol: that's guaranteed to be unique
null: the value does not contain data

## About variables

### What is a variable in JS?

Variables are containers for storing data. They can be declared in different ways.

### How many ways can we define a variable in JS? Is there any not recommended way?

Automatically is not recommended
var
let
const

### Which are the most used var naming conventions in JS?

Variable names must begin with a letter, an underscore (_), or a dollar sign ($).

## About operators

### Which are the main comparison operators in JS? Explain them with at least one example for primitive.

== (5 == '5') -> true;
=== (5 === '5') -> false;
!= (5 != '5') -> false;
!== (5 !== '5') -> true;
> (10 > 5) -> true;
< (10 < 5) -> false;
>= (10 >= 5) -> true;
<= (10 <= 5) -> false;

### Which are the main logical operators in JS? Explain them with at least one example for primitive.

|| The OR operator returns true if at least one of the operands is truthy. If both operands are falsy, it returns the value of the last operand.
&& The AND operator returns true only if both operands are truthy. If one operand is falsy, it returns that falsy value, stopping further evaluation.
! The NOT operator inverts the boolean value of its operand. If the operand is true, it becomes false, and if the operand is false, it becomes true.
?? The nullish coalescing operator returns the right operand when the left operand is null or undefined. Otherwise, it returns the left operand.
