/**
 * Comprehensive JavaScript Learning Roadmap
 * Includes Phases, Deep-Dive Examples, and Curated Resources.
 */

const learningPhases = [
  {
    phase: "Phase 1: Foundations & Core Logic",
    timeline: "1-2 weeks",
    description: "Mastering the fundamental building blocks of the language.",
    topics: [
      {
        title: "Variables, Scope & Hoisting",
        example: `
// Hoisting example
console.log(a); // undefined (hoisted)
var a = 5; 

// Block scope
{
  let b = 10;
  const c = 20;
}
// console.log(b); // ReferenceError`,
        details: "Understand 'var' vs 'let/const', function vs block scope, and the temporal dead zone."
      },
      {
        title: "Primitive vs Reference Types",
        example: `
let x = 10; let y = x; y = 20; // x remains 10
let obj1 = { val: 10 }; let obj2 = obj1; obj2.val = 20; // obj1.val is now 20`,
        details: "Learn how memory works for strings/numbers vs objects/arrays."
      },
      {
        title: "Logic & Control Flow",
        example: `
const status = age >= 18 ? 'Adult' : 'Minor'; // Ternary
const user = null ?? 'Guest'; // Nullish coalescing`,
        details: "Master truthy/falsy values, short-circuiting, and modern operators."
      }
    ]
  },
  {
    phase: "Phase 2: Functional & Data-Driven JS",
    timeline: "2-4 weeks",
    description: "Learning to manipulate data efficiently and handle the DOM.",
    topics: [
      {
        title: "Closures & Higher-Order Functions",
        example: `
function makeCounter() {
  let count = 0;
  return () => ++count; // Closure: remembers 'count'
}
const counter = makeCounter();`,
        details: "Essential for state management and private variables."
      },
      {
        title: "Advanced Array Methods",
        example: `
const sum = [1, 2, 3, 4].reduce((acc, curr) => acc + curr, 0);
const names = users.filter(u => u.active).map(u => u.name);`,
        details: "Declarative programming using .reduce, .some, .every, .find, and .flatMap."
      },
      {
        title: "DOM & Event Delegation",
        example: `
document.querySelector('#parent').addEventListener('click', (e) => {
  if (e.target.matches('.child')) console.log('Child clicked!');
});`,
        details: "Efficient event handling by attaching listeners to parent elements."
      }
    ]
  },
  {
    phase: "Phase 3: OOP & Asynchronous Patterns",
    timeline: "4-6 weeks",
    description: "Building scalable architectures and handling network requests.",
    topics: [
      {
        title: "Prototypal Inheritance & 'this'",
        example: `
function Person(name) { this.name = name; }
Person.prototype.greet = function() { return \`Hi, I'm \${this.name}\`; };
// 'this' depends on call site!`,
        details: "Understanding the prototype chain, .call(), .apply(), and .bind()."
      },
      {
        title: "Promises & Async/Await Deep Dive",
        example: `
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));
async function run() {
  await wait(1000);
  console.log('Done');
}`,
        details: "Microtasks vs Macrotasks, Promise.all, Promise.allSettled, and error boundaries."
      }
    ]
  },
  {
    phase: "Phase 4: Advanced Patterns & Internals",
    timeline: "Ongoing",
    description: "The 'Senior' topics: Meta-programming and the JS Engine.",
    topics: [
      {
        title: "Proxies & Reflect",
        example: `
const user = { name: 'Bob' };
const proxy = new Proxy(user, {
  get(target, prop) {
    console.log(\`Accessing \${prop}\`);
    return target[prop];
  }
});`,
        details: "Used by modern frameworks (like Vue 3) for reactivity."
      },
      {
        title: "The Event Loop",
        details: "How the Call Stack, Web APIs, Task Queue, and Microtask Queue interact."
      }
    ]
  }
];

const resources = {
  foundations: ["MDN Web Docs", "JavaScript.info", "Eloquent JavaScript"],
  advanced: ["You Don't Know JS Yet (Book Series)", "Frontend Masters (Deep Dive courses)"],
  newsletters: ["JS Weekly", "Frontend Focus", "Bytes.dev"],
  practice: ["Exercism (JS Track)", "Codewars", "Advent of Code"]
};

console.log("Roadmap Loaded Successfully.");
