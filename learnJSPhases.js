// Phases, Examples, and Resources for Learning JavaScript

const learningPhases = [
  {
    phase: "Phase 1: Basics of JavaScript",
    timeline: "1-2 weeks",
    description: "Focus on understanding how the language works at a fundamental level.",
    topics: [
      {
        title: "Variables and Data Types",
        example: "let name = 'Alice'; const age = 25; let isStudent = true;",
        details: "Learn the difference between let, const, and var. Understand primitives vs objects."
      },
      {
        title: "Operators and Control Flow",
        example: "if (age >= 18) { console.log('Adult'); } else { console.log('Minor'); }",
        details: "Logical operators (&&, ||, !), comparison (===), and loops (for, while, for...of)."
      },
      {
        title: "Functions",
        example: "function greet(user) { return `Hello, ${user}!`; }",
        details: "Declaration, parameters, return values, and scope basics."
      }
    ]
  },
  {
    phase: "Phase 2: Intermediate JavaScript",
    timeline: "2-4 weeks",
    description: "Move from syntax to interacting with the environment and managing data structure.",
    topics: [
      {
        title: "DOM Manipulation",
        example: "const btn = document.querySelector('#myBtn'); btn.addEventListener('click', () => alert('Clicked!'));",
        details: "Selecting elements, changing styles/attributes, and handling user events."
      },
      {
        title: "Arrays and Objects",
        example: "const numbers = [1, 2, 3]; const doubled = numbers.map(n => n * 2);",
        details: "Master methods like .map(), .filter(), .reduce(). Understand object destructuring and spread operators."
      },
      {
        title: "ES6+ Features",
        example: "const add = (a, b) => a + b; const { name, age } = user;",
        details: "Arrow functions, template literals, destructuring, and rest/spread syntax."
      }
    ]
  },
  {
    phase: "Phase 3: Advanced JavaScript",
    timeline: "4-6 weeks",
    description: "Understand the 'under the hood' mechanics and handle complex operations.",
    topics: [
      {
        title: "Asynchronous JavaScript",
        example: "async function fetchData() { const response = await fetch(url); const data = await response.json(); }",
        details: "The Event Loop, Callbacks, Promises, and the modern Async/Await syntax."
      },
      {
        title: "Prototypes and Classes",
        example: "class Animal { constructor(name) { this.name = name; } speak() { console.log('Hi'); } }",
        details: "Prototypal inheritance, 'this' keyword binding, and the Class syntax (syntactic sugar)."
      },
      {
        title: "Modules",
        example: "export const myFunc = () => {}; import { myFunc } from './myModule.js';",
        details: "Organizing code with ES Modules (import/export) and understanding scope within modules."
      }
    ]
  },
  {
    phase: "Phase 4: Ecosystem and Professional Tools",
    timeline: "Ongoing",
    description: "Applying JS in real-world environments with industry-standard tools.",
    topics: [
      {
        title: "Node.js and NPM",
        example: "npm install express; const express = require('express');",
        details: "Running JS on the server, managing packages, and building CLI tools."
      },
      {
        title: "Frameworks (React/Vue/Next.js)",
        example: "function App() { return <h1>Hello World</h1>; }",
        details: "State management, component architecture, and routing."
      },
      {
        title: "Testing and Tooling",
        example: "test('adds 1 + 2 to equal 3', () => { expect(sum(1, 2)).toBe(3); });",
        details: "Unit testing with Jest/Vitest, linting with ESLint, and bundling with Vite/Webpack."
      }
    ]
  }
];

const learningResources = {
  documentation: [
    { name: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", type: "Reference" },
    { name: "JavaScript.info", url: "https://javascript.info/", type: "Deep Dive" }
  ],
  interactive: [
    { name: "FreeCodeCamp", url: "https://www.freecodecamp.org/", type: "Curriculum" },
    { name: "Codecademy", url: "https://www.codecademy.com/", type: "Interactive" },
    { name: "Exercism", url: "https://exercism.org/tracks/javascript", type: "Practice" }
  ],
  video: [
    { name: "The Net Ninja (YouTube)", url: "https://www.youtube.com/@NetNinja", type: "Tutorials" },
    { name: "Frontend Masters", url: "https://frontendmasters.com/", type: "Professional" }
  ],
  books: [
    { name: "You Don't Know JS Yet", author: "Kyle Simpson" },
    { name: "Eloquent JavaScript", author: "Marijn Haverbeke" }
  ]
};

console.log("Updated JS Learning Guide:");
console.log("Phases:", JSON.stringify(learningPhases, null, 2));
console.log("Resources:", JSON.stringify(learningResources, null, 2));
