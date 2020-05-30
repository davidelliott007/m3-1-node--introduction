# 3.1.1 - Welcome to Node.Js

<img src="https://media0.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif" style="min-width: 50%;" />

---

## Node.Js

---

### What is Node?

- A server runtime
- A way to run JS locally

---

It's like the JS environment in the browser, but with no DOM (no `window`, no `document.createElement`)

---

Node comes built in with utilities for:

- loading files on the local machine
- Resolving paths
- Become an HTTP server (like LiveServer)
- Loading large files

---

We'll be using it as a _backend server_.

What are some other languages/frameworks that can be used instead?

---

### Why Node?

---

### Binaries

On your hard drive on your computer you have many files that called **binaries**

For example: Chrome, Photoshop, VS Code, iMovie, World of Warcraft, etc...

---

### Processes

When you _execute_ a binary, it creates something called a **process**.

There are two ways of executing a binary.

- double-clicking its icon
- typing its binary name in the terminal

---

A binary is like an architectural plan, and a process is like a building.

Many buildings can be built from the same plan.

---

### Notable Binaries

- NodeJs (used to interpret JS code)
- `yarn` (used to import modules written by others)

---

#### Example

It's possible to cook everything from scratch without needing another human being...

It involves

- build farm equipment
- grow crops
- self-manufacture cooking equipment
- etc.

_Clearly it's best to use things that's already built._

---

Enter [NPM](https://www.npmjs.com/https://www.npmjs.com/)

npm is a tool that lets you download code written by others.

This can save you a substantial amount of time. You don't _always_ have to reinvent the wheel.

---

In this course, we will be using `yarn` to install npm packages.

`yarn` commands are a little simpler, but we could have also chosen `npm`.

---

### package.json

This file is created by `npm`. There is _one_ file per project.

It contains all the names of all the modules needed for the project.

---

#### Example

You want your friend to cook a specific meal. So you send him the recipe.

##### What about the ingredients? You can either

- ship him/her all of the ingredients
- give him a list of ingredients and leave it to him/her to get them himself.

_The package.json is that ingredient list, and the code is the recipe._

---

### What is a module?

A module, or library, is a set of files, usually written by someone else.

- These reside inside of the `node_modules` folder.
- You can import node modules the `yarn` command.

```
// example (this will add the 'moment' module)
yarn add moment
```

This will add a module to the node_modules folder as well as update the `package.json` file.

---

To install all of a project's dependencies, you type `yarn install`.

All of the dependencies listed in the packages.json will be installed.

---

### Importing

To use a module, you import it with `require`:

```js
const multiply = require('multiply');

multiply(3, 6);
```

---

[Next lecture: Express](../lecture-2-express)
