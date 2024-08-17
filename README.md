# Namaste Node.js Notes 📚

![Namaste Node.js Poster](https://do6gp1uxl3luu.cloudfront.net/banner+and+logos/namaste-node.webp)

This repository contains detailed notes from the **Namaste Node.js** course by **Akshay Saini**. The notes cover key concepts, in-depth explanations, and code examples that help demystify how Node.js works under the hood. Perfect for anyone looking to deepen their understanding of Node.js and its core principles.

Feel free to contribute or use these notes as a reference for your learning journey!

---

## Table of Contents

1. [Episode-01 | Introduction to NodeJS](./Episode%201%20-%20Introduction%20to%20NodeJs/)
2. [Episode-02 | JS on Server](./Episode%202%20-%20JS%20On%20Server/)
3. [Episode-03 | Let's write code](./Episode%203%20-%20Let's%20write%20code/)
4. [Episode-04 | module.export & require](./Episode%204%20-%20module.export%20&%20require/)
5. [Episode-05 | Diving into the NodeJS github repo](./Episode%205%20-%20Diving%20into%20the%20NodeJS/)
6. [Episode-06 | libuv & async IO](./Episode%206%20-%20libuv%20&%20async%20IO/)
7. [Episode-07 | sync, async, setTimeoutZero - code](#episode-07--sync-async-settimeoutzero---code)
8. [Episode-08 | Deep dive into v8 JS Engine](#episode-08--deep-dive-into-v8-js-engine)
9. [Episode-09 | libuv & Event Loop](#episode-09--libuv--event-loop)
10. [Episode-10 | Thread pool in libuv](#episode-10--thread-pool-in-libuv)
11. [Episode-11 | Creating a Server](#episode-11--creating-a-server)
12. [Episode-12 | Databases - SQL & NoSQL](#episode-12--databases---sql--nosql)
13. [Episode-13 | Creating a database & mongodb](#episode-13--creating-a-database--mongodb)


# Namaste Node.js

_Any application that can be written in javascript will eventually be written in javascript_ -- Jeff Atwood. Founder, StackOverflow

## Index

1. [Introduction to Node.js](./Chapter%2001%20-%20Intro%20to%20NodeJS/01_Intro-to-nodejs.md)
    - [What is Node.js](./Chapter%2001%20-%20Intro%20to%20NodeJS/01_Intro-to-nodejs.md#what-is-nodejs)
    - [Why Node.js is created](./Chapter%2001%20-%20Intro%20to%20NodeJS/01_Intro-to-nodejs.md#why-nodejs-is-created)
    - [History of Node.js](./Chapter%2001%20-%20Intro%20to%20NodeJS/01_Intro-to-nodejs.md#history-of-nodejs)
2. [JS on Server](./Chapter%2002%20-%20JS%20on%20Server/02_js-on-server.md)
    - [What is a server](./Chapter%2002%20-%20JS%20on%20Server/02_js-on-server.md#what-is-a-server)
    - [What is a web server](./Chapter%2002%20-%20JS%20on%20Server/02_js-on-server.md#what-is-a-web-server)
    - [What is a Javascript engine](./Chapter%2002%20-%20JS%20on%20Server/02_js-on-server.md#what-is-a-javascript-engine)
    - [How NodeJS enabled Javascript to run not only on browser](./Chapter%2002%20-%20JS%20on%20Server/02_js-on-server.md#how-nodejs-enabled-javascript-to-run-not-only-on-browser)
    - [Why Node.js is required when V8 alone can compile and execute javascript](./Chapter%2002%20-%20JS%20on%20Server/02_js-on-server.md#why-nodejs-is-required-when-v8-alone-can-compile-and-execute-javascript)
3. [Skipping]()
    - [Node.js installation]()
    - [Global object]()
4. [module.exports & require](./Chapter%2004%20-%20module.export%20&%20require/04_module.export-and-require.md)
    - [What is a module](./Chapter%2004%20-%20module.export%20&%20require/04_module.export-and-require.md#what-is-a-module)
    - [Why modules are required](./Chapter%2004%20-%20module.export%20&%20require/04_module.export-and-require.md#why-modules-are-required)
    - [How to use a module](./Chapter%2004%20-%20module.export%20&%20require/04_module.export-and-require.md#how-to-use-a-module)
    - [How to create a module](./Chapter%2004%20-%20module.export%20&%20require/04_module.export-and-require.md#how-to-create-a-module)
    - [Grouping modules together](./Chapter%2004%20-%20module.export%20&%20require/04_module.export-and-require.md#grouping-modules-together)
    - [CommonJS Modules Vs ES Modules](./Chapter%2004%20-%20module.export%20&%20require/04_module.export-and-require.md#commonjs-modules-vs-es-modules)
    - [Default export Vs Named export](./Chapter%2004%20-%20module.export%20&%20require/04_module.export-and-require.md#default-export-vs-named-export)
5. [Diving into the Node.js github repo](./Chapter%2005%20-%20Diving%20into%20the%20NodeJS%20github%20repo/05_diving-into-the-nodejs-github-repo.md)

    - [How variables and functions became private in a module when imported using `require()`](./Chapter%2005%20-%20Diving%20into%20the%20NodeJS%20github%20repo/05_diving-into-the-nodejs-github-repo.md#how-variables-and-functions-became-private-in-a-module-when-imported-using-require)
    - [How `require` method works](./Chapter%2005%20-%20Diving%20into%20the%20NodeJS%20github%20repo/05_diving-into-the-nodejs-github-repo.md#how-require-method-works)
    - [Simple `require` pseudo code](./Chapter%2005%20-%20Diving%20into%20the%20NodeJS%20github%20repo/05_diving-into-the-nodejs-github-repo.md#simple-require-pseudo-code)

6. [libuv & async IO](./Chapter%2006%20-%20libuv%20&%20async%20IO/06_libuv-and-async-io.md)
    - [Synchronous Vs Asynchronous execution](./Chapter%2006%20-%20libuv%20&%20async%20IO/06_libuv-and-async-io.md#synchronous-vs-asynchronous-execution)
    - [Importance of libuv](./Chapter%2006%20-%20libuv%20&%20async%20IO/06_libuv-and-async-io.md#importance-of-libuv)
    - [What is libuv library](./Chapter%2006%20-%20libuv%20&%20async%20IO/06_libuv-and-async-io.md#what-is-libuv-library)
