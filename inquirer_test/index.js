import inquirer from 'inquirer';

inquirer
  .prompt([
    /* Pass your questions in here */
    {
      input : 'input',
      name : 'input_type',
      message : 'What is your name?',
      default : 'Ellen'
    },
    {
      type : 'list',
      name : 'list question',
      message : 'Who is your favorite character in Marvel Comics?',
      choices : ['Ironman', 'Captain America', 'Thor', 'Spiderman'],
      default : 'Hulk'
    },
    {
      type : 'checkbox',
      name : 'checkbox question',
      message : 'Who is your favorite character in DC Comics?',
      choices : ['Superman', 'Batman', 'Wonderwoman', 'Flash'],
      default : 'Aquaman'
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers);
  });

  /*
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
  */