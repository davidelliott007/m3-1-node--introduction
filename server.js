'use strict';

// import the needed node_modules.
const express = require('express');
const morgan = require('morgan');
const url = require('url');

// We need to "require" the files whose content we reference in this file.
const exercisesP1 = require('./__workshop/exercisesP1');

const PORT = 8000;

let questions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
let current_question = "1"
const q6 = (req, res) => res.render('pages/question6', {questions, current_question} );
const q7 = (req, res) => res.render('pages/question7', {questions, current_question});
const q8 = (req, res) => res.render('pages/question8', {questions, current_question});
const q9 = (req, res) => res.render('pages/question9', {questions, current_question});
const q10 = (req, res) => res.render('pages/question10', {questions, current_question});
const davePage = (req, res) => res.render('pages/dave');
const fourOhFour = (req, res) => res.render('pages/fourOhfour');

const homepage = (req, res) => res.render('pages/homepage');


express()
    // This will give us will log more info to the console. see https://www.npmjs.com/package/morgan
    .use(morgan('tiny'))
    // Any requests for static files will go into the public folder
    // This is where our CSS lives!
    .use(express.static('public'))


    // We are using ejs as our templating engine. see https://ejs.co/
    .set('view engine', 'ejs')

    // endpoints
    .get('/question1', exercisesP1.q1)
    .get('/question2', exercisesP1.q2)
    .get('/question3', exercisesP1.q3)
    .get('/question4', exercisesP1.q4)
    .get('/question5', exercisesP1.q5)
    .get('/question6', q6)
    .get('/question7', q7)
    .get('/question8', q8)
    .get('/question9', q9)
    .get('/question10', q10)
    .get('/', homepage)

    // this serves up the homepage
    // .get('/', (req, res) => {
    //     res.send('This is the homepage... it\'s empty :(');
    // })

    // this is our catch all endpoint. If a user navigates to any endpoint that is not
    // defined above, they get to see our 404 page.
    // .get('*', (req, res) => {
    //     res.status(404);
    //     res.send('404... This is not the page you are looking for.');
    // })
    .get('*', fourOhFour)



    // Node spins up our server and sets it to listen on the PORT we defined above.
    .listen(PORT, () => console.log(`Listening on port ${PORT}`));