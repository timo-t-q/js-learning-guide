/**
 * ULTIMATE JAVASCRIPT MASTERY ROADMAP
 * -----------------------------------
 * From variables to WebGL, performance optimization, and architectural patterns.
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
// Hoisting: Function vs Var
sayHi(); // Works! Functions are fully hoisted.
function sayHi() { console.log("Hi!"); }

console.log(myVar); // undefined (declaration hoisted, assignment not)
var myVar = "value";

// Block Scope & TDZ (Temporal Dead Zone)
{
  // console.log(myLet); // ReferenceError: Cannot access 'myLet' before initialization
  let myLet = "safe";
}`,
        details: "Learn 'var' vs 'let/const', function vs block scope, and the temporal dead zone."
      },
      {
        title: "Primitive vs Reference Types & Shallow vs Deep Copy",
        example: `
// Shallow copy problem
let user = { name: "Alice", details: { age: 25 } };
let copy = { ...user };
copy.details.age = 30; // BOTH user and copy age are now 30!

// Deep copy (Modern)
let deepCopy = structuredClone(user);
deepCopy.details.age = 35; // User age remains 30`,
        details: "Understand heap vs stack, reference sharing, and how to safely clone nested data."
      }
    ]
  },
  {
    phase: "Phase 2: Functional Mastery & Data Transformation",
    timeline: "2-3 weeks",
    description: "Writing declarative, clean, and reusable code.",
    topics: [
      {
        title: "Closures & Currying",
        example: `
// Currying: Partial Application
const multiply = (a) => (b) => a * b;
const double = multiply(2);
console.log(double(5)); // 10

// Private State via Closures
const createVault = (secret) => ({
  getSecret: () => secret,
  setSecret: (newSecret) => { secret = newSecret; }
});`,
        details: "Functions that remember their lexical environment. Vital for React hooks and functional programming."
      },
      {
        title: "The Reduce Power-Tool",
        example: `
const orders = [{p:10}, {p:20}, {p:30}];
const total = orders.reduce((sum, order) => sum + order.p, 0);

// Grouping data with reduce
const users = [{id:1, role:'admin'}, {id:2, role:'user'}, {id:3, role:'admin'}];
const grouped = users.reduce((acc, user) => {
  (acc[user.role] = acc[user.role] || []).push(user);
  return acc;
}, {});`,
        details: "Transforming any array into any other structure (object, single value, or new array)."
      }
    ]
  },
  {
    phase: "Phase 3: Asynchronous JS & Browser Internals",
    timeline: "3-4 weeks",
    description: "Handling concurrency, networking, and the Event Loop.",
    topics: [
      {
        title: "The Event Loop: Microtasks vs Macrotasks",
        example: `
console.log('Start'); // 1. Synchronous
setTimeout(() => console.log('Timeout'), 0); // 4. Macrotask
Promise.resolve().then(() => console.log('Promise')); // 3. Microtask
console.log('End'); // 2. Synchronous`,
        details: "Crucial for debugging race conditions and performance bottlenecks. Understand how JS handles 'concurrency'."
      },
      {
        title: "Advanced Promise Patterns",
        example: `
// Racing multiple fetches
const fastFetch = Promise.race([
  fetch('/api/primary'),
  fetch('/api/backup'),
  new Promise((_, reject) => setTimeout(() => reject('Timeout'), 5000))
]);

// Running in sequence (not parallel)
const urls = ['/1', '/2', '/3'];
for (const url of urls) {
  const data = await fetch(url).then(r => r.json());
  console.log(data);
}`,
        details: "Promise.all, Promise.allSettled, Promise.any, and iterative async patterns."
      }
    ]
  },
  {
    phase: "Phase 4: Architecture & Design Patterns",
    timeline: "4-6 weeks",
    description: "Building production-grade, maintainable applications.",
    topics: [
      {
        title: "Object-Oriented Design Patterns",
        example: `
// Singleton Pattern
class Database {
  constructor() {
    if (Database.instance) return Database.instance;
    Database.instance = this;
    this.connection = "Connected";
  }
}

// Observer Pattern (Pub/Sub)
class EventEmitter {
  constructor() { this.events = {}; }
  on(name, fn) { (this.events[name] = this.events[name] || []).push(fn); }
  emit(name, data) { (this.events[name] || []).forEach(fn => fn(data)); }
}`,
        details: "Learn Singletons, Observers, Factories, and Modules to structure large apps."
      },
      {
        title: "Clean Architecture & SOLID",
        details: "Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion in JS."
      }
    ]
  },
  {
    phase: "Phase 5: Performance, Graphics & Specialized APIs",
    timeline: "Ongoing Mastery",
    description: "Pushing JS to the limit with low-level APIs and heavy computation.",
    topics: [
      {
        title: "Web Workers & Multi-threading",
        example: `
// main.js
const worker = new Worker('worker.js');
worker.postMessage({ data: heavyArray });
worker.onmessage = (e) => console.log('Done:', e.data);

// worker.js
onmessage = (e) => {
  const result = performHeavyCalc(e.data); // Runs on background thread!
  postMessage(result);
};`,
        details: "How to run expensive calculations without freezing the UI (OffscreenCanvas, heavy data processing)."
      },
      {
        title: "Memory Management & Profiling",
        details: "Detecting memory leaks, understanding the Garbage Collector, and using Chrome DevTools Performance tab."
      },
      {
        title: "Graphics with Canvas & WebGL",
        example: `
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'blue';
ctx.fillRect(10, 10, 150, 100);`,
        details: "Building games, data visualizations (D3.js), and 3D experiences (Three.js)."
      }
    ]
  }
];

const specializedResources = {
  advanced_patterns: [
    { name: "Patterns.dev", desc: "Design patterns for modern JS/React apps." },
    { name: "Refactoring.Guru", desc: "Deep dive into classical design patterns." }
  ],
  performance: [
    { name: "Web.dev (Google)", desc: "The gold standard for web performance guides." },
    { name: "V8 Blog", desc: "Understand how the JS engine compiles your code." }
  ],
  security: [
    { name: "OWASP Top 10", desc: "Essential security checklist for web apps." },
    { name: "Snyk Advisor", desc: "Check your npm packages for vulnerabilities." }
  ],
  newsletters: ["JS Weekly", "Bytes.dev", "Frontend Focus", "Node Weekly"],
  deep_learning: ["JavaScript.info (Modern Tutorial)", "You Don't Know JS Yet (Book Series)"]
};

console.log("ULTIMATE JS ROADMAP LOADED.");
console.log("Explore 'learningPhases' and 'specializedResources' for deep study.");
