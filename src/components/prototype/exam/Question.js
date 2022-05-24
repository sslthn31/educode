export const Question = [
  {
    id: 1,
    question: 'This is Question',
    options: [
      {
        title: 'A',
        correct: true,
      },
      {
        title: 'B',
        correct: false,
      },
      {
        title: 'C',
        correct: false,
      },
      {
        title: 'D',
        correct: false,
      },
    ],
  },
  {
    id: 2,
    question: 'This is Question 2',
    options: [
      {
        title: 'A',
        correct: false,
      },
      {
        title: 'B',
        correct: false,
      },
      {
        title: 'C',
        correct: true,
      },
      {
        title: 'D',
        correct: false,
      },
    ],
  },
  {
    id: 3,
    question: 'This is Question 3',
    options: [
      {
        title: 'A',
        correct: false,
      },
      {
        title: 'B',
        correct: false,
      },
      {
        title: 'C',
        correct: false,
      },
      {
        title: 'D',
        correct: true,
      },
    ],
  },
  {
    id: 4,
    question: 'This is Question 4',
    options: [
      {
        title: 'A',
        correct: true,
      },
      {
        title: 'B',
        correct: false,
      },
      {
        title: 'C',
        correct: false,
      },
      {
        title: 'D',
        correct: false,
      },
    ],
  },
  {
    id: 5,
    question: 'This is Question 5',
    options: [
      {
        title: 'A',
        correct: false,
      },
      {
        title: 'B',
        correct: true,
      },
      {
        title: 'C',
        correct: false,
      },
      {
        title: 'D',
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

shuffle(Question);
