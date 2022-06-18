export const JsQuestion = [
  {
    id: 1,
    question: 'Inside which HTML element do we put the JavaScript?',
    options: [
      {
        title: '<script>',
        correct: true,
      },
      {
        title: '<scripting>',
        correct: false,
      },
      {
        title: 'js',
        correct: false,
      },
      {
        title: 'javascript',
        correct: false,
      },
    ],
  },
  {
    id: 2,
    question: 'The external JavaScript file must contain the <script> tag.',
    options: [
      {
        title: 'True',
        correct: true,
      },
      {
        title: 'False',
        correct: false,
      },
      {
        title: 'Should in Css file',
        correct: false,
      },
      {
        title: 'None at Above',
        correct: false,
      },
    ],
  },
  {
    id: 3,
    question: 'Where is the correct place to insert a JavaScript?',
    options: [
      {
        title: 'The <head> section',
        correct: false,
      },
      {
        title: 'The <body> section',
        correct: false,
      },
      {
        title: 'Both the <head> section and the <body> section are correct',
        correct: true,
      },
      {
        title: 'None at Above',
        correct: false,
      },
    ],
  },
  {
    id: 4,
    question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
    options: [
      {
        title: '<script src="xxx.js"',
        correct: true,
      },
      {
        title: '<script href="xxx.js"',
        correct: false,
      },
      {
        title: '<script name="xxx.js"',
        correct: false,
      },
      {
        title: '<script id="xxx.js"',
        correct: false,
      },
    ],
  },
  {
    id: 5,
    question: 'How do you create a function in JavaScript?',
    options: [
      {
        title: 'function() myFunction',
        correct: false,
      },
      {
        title: 'function myFunction()',
        correct: true,
      },
      {
        title: 'myFunction()',
        correct: false,
      },
      {
        title: 'function:myFunction()',
        correct: false,
      },
    ],
  },
  {
    id: 6,
    question: 'How do you call a function named "myFunction"?',
    options: [
      {
        title: 'call function myFunction()',
        correct: false,
      },
      {
        title: 'call myFunction()',
        correct: false,
      },
      {
        title: 'myFunction()',
        correct: true,
      },
      {
        title: 'console.log(myFunction)',
        correct: false,
      },
    ],
  },
  {
    id: 7,
    question: 'How to write an IF statement in JavaScript?',
    options: [
      {
        title: 'if i == 5 then',
        correct: false,
      },
      {
        title: 'if i = 5 then',
        correct: false,
      },
      {
        title: 'if i = 5',
        correct: false,
      },
      {
        title: 'if(i == 5)',
        correct: true,
      },
    ],
  },
  {
    id: 8,
    question: 'How to write an IF statement for executing some code if "i" is NOT equal to 5 ?',
    options: [
      {
        title: 'if i <> 5 ',
        correct: false,
      },
      {
        title: 'if(i <> 5)',
        correct: false,
      },
      {
        title: 'if i =! 5 then',
        correct: false,
      },
      {
        title: 'if(i != 5)',
        correct: true,
      },
    ],
  },
  {
    id: 9,
    question: 'How does a WHILE loop start ?',
    options: [
      {
        title: 'while(i <= 10)',
        correct: true,
      },
      {
        title: 'while(i <= 10; i++)',
        correct: false,
      },
      {
        title: 'while(i++)',
        correct: false,
      },
      {
        title: 'while i = 1 to 10',
        correct: false,
      },
    ],
  },
  {
    id: 10,
    question: 'How does a FOR loop start?',
    options: [
      {
        title: 'for i = 1 to 5',
        correct: false,
      },
      {
        title: 'for(i = 0; i <= 5)',
        correct: false,
      },
      {
        title: 'for(i = 0; i <= 5; i++)',
        correct: true,
      },
      {
        title: 'for(i = 0; i <= 5;)',
        correct: false,
      },
    ],
  },
];

const shuffle = (array) => {
  for (let i = array.length - 1; i >= 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    array.push(array[randomIndex]);
    array.splice(randomIndex, 1);
  }
  return array;
};

shuffle(JsQuestion);
console.log(shuffle(JsQuestion));
// for (let i = 0; i < 10; i++) {
//   const object = shuffle(JsQuestion);
//   console.table('shuffle ke-', i, object);
// }
