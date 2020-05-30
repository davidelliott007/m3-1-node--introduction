// Getting familiar with EJS and the project folder/file structure.

// Question 1
// -----------------------------------------------
const q1 = (req, res) => {
  // there is nothing to do here for this question

  res.render('pages/question1');
};
// -----------------------------------------------

// Question 2
// -----------------------------------------------
const q2 = (req, res) => {
  // pass this variable to the ejs file and render it in the answer box.
  const sentence = '<p>This is the way.</p>';

  res.render('pages/question2', {});
};
// -----------------------------------------------

// Question 3
// -----------------------------------------------
const q3 = (req, res) => {
  // pass this information to ejs file and render it in the answer box.
  const homer = {
    imageUrl:
      'https://vignette.wikia.nocookie.net/simpsons/images/0/02/Homer_Simpson_2006.png',
    name: 'Homer Jay Simpson',
    dob: 'May 12, 1956',
    profession: 'Low-level Safety Inspector',
    favoriteFood: 'Donuts',
    favoriteBeverage: 'Duff Beer',
  };

  res.render('pages/question3');
};
// -----------------------------------------------

// Question 4
// -----------------------------------------------
const q4 = (req, res) => {
  const popularGirlNames = ['Olivia', 'Ruby', 'Emily', 'Grace', 'Jessica'];

  res.render('pages/question4');
};
// -----------------------------------------------

// Question 5
// -----------------------------------------------
const q5 = (req, res) => {
  const popularGirlNames = ['Olivia', 'Ruby', 'Emily', 'Grace', 'Jessica'];

  res.render('pages/question5');
};
// -----------------------------------------------

// We export the functions so that they may be 'required' or imported in other files.
module.exports = { q1, q2, q3, q4, q5 };
