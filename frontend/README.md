# Tripping.com Front End Engineering Code/Design Challenge

Hi there!

Thanks for your interest in joining the [Tripping.com](https://tripping.com) Engineering Team! We're excited at the possibility of working with you.
We've put together a short open ended question to allow you to demonstrate your engineering skills. Please take all of the time you need to complete this task - we're hoping it won't take more than an hour of your time :)

We wish you the best of luck and can't wait to see what you create!

Thanks,

The Tripping.com Engineering Team

## Overview

We've provided you with a simple NodeJS app to allow you to create a To Do Application

We would like for you to create a basic To Do app where we can add tasks, tick off completed tasks and see what has been completed and what remains to be done.

## Features

Our setup includes:
* A simple server to get you up and running quickly
* A SCSS precompiler for CSS (If you prefer writing this way -- we do!)
* A Babel transpiler so you can write in ES6 if preferred (Writing in ES5 is accepted too)
* [Font Awesome](http://fontawesome.io/icons/) icons if you would like to include icons:

## Getting Started

To use this application, you will need to download and install [NodeJS](https://nodejs.org/download/).

Once you have NodeJS installed, clone this repository to your local machine:
```
git clone git@github.com:tripping/tripping-challenges.git
```

Next, install the NPM dependencies:
```
cd tripping-challenges
npm install
```

And start the local server:
```
npm run start
```

Once the server is running, you can access the start page (index.html) by opening your browser to http://localhost:3000.

To stop the server, press CTRL-C.

## Requirements

The project is open ended, so feel free to create the HTML however you'd like, style the app in any way you'd like, and store the data in any way you like.

All submissions are accepted as long as we can:
* Create new To Do entries
* Tick off completed entries
* See completed and remaining entries

We would recommend:
* Writing using HTML5, SCSS and ES6 classes
* Storing data using LocalStorage / SessionStorage / IndexedDB

Please do not use any other libraries / frameworks other than the ones already imported into the application - we'd love to see your own code implementations rather than how you use Bootstrap or jQuery!

## How The Application Is Set Up

All work should be completed in the /public folder

### HTML
You should only have to work in the index.html. We have already imported Babel and Font Awesome for you if you'd like to use these

### CSS
CSS should be written in the SCSS files - these will then be compiled by the server into a single index.css file and automatically imported for you

We recommend using a component / module set up
* Your entry point is index.scss, which will import all of your components and modules
* Components are small reusable pieces of code - things like inputs, buttons, checkboxes etc. One component === one file
* Modules are groups of components - things like header, footer, large forms, navbars etc. Use module scss files to apply any css which doesn't fit into individual components

We've also included a components/base.scss file which has some basic code in it -- feel free to change it as you need to

### JS
All JS development should be wirtten in js/index.js, but should be separated out into individual classes.

You shouldn't have to change anything in app.js - this is the file which configures the server and sets up the features we have listed above

## Ideas
Here are some ideas for you to consider when completing your task:
* Form Validation
* Drag and drop ability to reorder tasks
* Undo functionality
* Searching / Filtering tasks
* Multiple columns for multiple To Do lists

To be clear, these aren't requirements -- they're simply a list of ideas to inspire you should you find you complete the main task quickly.

## Submission

On completion of the task, there are 2 ways to send your code to us:
* Zip up the project directory and email it to us at eng@tripping.com with the subject "{Your Name} - Front End Code Challenge"
* Fork this repository, commiting your changes, and submiting a [Pull Request](https://github.com/tripping/tripping-challenges/pulls) to us

## Questions?

You can either write us a [GitHub issue](https://github.com/tripping/tripping-challenges/issues) or email us at eng@tripping.com
