1. What is scope in JavaScript, and why is it important?

The scope is the current context of execution in which values and expressions are "visible" or can be referenced. If a variable or expression is not in the current scope, it will not be available for use. Scopes can also be layered in a hierarchy, so that child scopes have access to parent scopes, but not vice versa.

//Importance of a scope

Preventing Variable Collisions: In large applications or when using multiple libraries, scope helps prevent variables or function names from conflicting with each other. Each scope creates a "container" for variables a

Efficient Memory Management: Variables that are no longer in scope 
(e.g., local variables after a function execution completes) can be garbage collected, which helps in managing memory efficiently and avoiding memory leaks.

Lexical Scoping: JavaScript uses lexical scoping, which means that the scope of a variable is determined by its position within the code. This allows for nested functions to access variables defined in their outer function, promoting code modularity and reusability.

2. Can you explain the difference between global scope and local scope?

Global Scope
In JavaScript, global scope is the widest scope available. Variables declared in global scope are accessible from anywhere in your code, whether it's inside functions, conditional statements, loops, or other blocks of code.

Local Scope
Local scope in JavaScript is like a private room within a building – it's an enclosed space where variables are only accessible from within that specific room.

3. How does JavaScript handle scope in functions compared block-level scope?

Block-Level Scope ;Variables declared with let and const inside curly braces { } (block scope) are block-scoped.
They are only visible within the block in which they are defined, including nested blocks.
Access and Visibility:

Block-scoped variables cannot be accessed outside of their containing block.

4. How do var, let, and const differ in terms of scope?

var
Variables declared with var are function-scoped or globally scoped.
If declared outside a function, they are global variables.
They are hoisted to the top of their scope and initialized with undefined.
They can be re-declared and updated within their scope.

   let greeting = "say Hi";
   let times = 4;

   if (times > 3) {
        let hello = "say Hello instead";
        console.log(hello);// "say Hello instead"
    }
   console.log(hello) // hello is not defined


let / const
Variables declared with let have block scope.
They are hoisted to the top of their block but are not initialized (ReferenceError if accessed before initialization).
They cannot be re-declared within the same scope.
They can be updated within their scope.

<!-- example -->
  let greeting = "say Hi";
    if (true) {
        let greeting = "say Hello instead";
        console.log(greeting); // "say Hello instead"
    }
    console.log(greeting); // "say Hi"


5. What are the implications of declaring a variable without any keyword (i.e., no var, let, or const)?

A variable cannot be declared without a keyword. It will result in an error.
But if the variable already exists, the value of the variable will be changed


6. What is the scope chain, and how does JavaScript use it to resolve variable access?

JavaScript engine uses scopes to find out the exact location or accessibility of variables and that particular process is known as Scope Chain.
Scope Chain means that one variable has a scope (it may be global or local/function or block scope) is used by another variable or function having another scope (may be global or local/function or block scope).
This complete chain formation goes on and stops when the user wishes to stop it according to the requirement.

7. What are some differences between lexical scope and dynamic scope? Which one does JavaScript use?

Lexical Scope:

Definition: Lexical scope (also known as static scope) means that the scope of a variable is determined at compile time.
Scope Resolution: Variables are resolved based on their position in the source code.
Example: In lexical scope, a function can access variables defined in its parent function or outer scope, where it is lexically defined.

function parent(){
    let a = 10;
    function child() {
        console.log(a)
    }
    child()
}

Dynamic Scope:

Definition: Dynamic scope means that the scope of a variable is determined at runtime, based on the flow of control in the program.
Scope Resolution: Variables are resolved based on the current execution context or call stack.
Example: In dynamic scope, a function can access variables from the calling function's scope chain.
Usage: Some older programming languages (like some dialects of Lisp) use dynamic scope, but it's less common in modern languages.


8. What are some differences between lexical scope and dynamic scope? Which one does JavaScript use?

A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.