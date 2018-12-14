export const questionsData = [
  {
    question: "Какие вызовы parseInt возвратят число?",
    answers: ["parseInt(\"1px\")",
              "parseInt(\"-1.2\")",
              'parseInt("0 минут")',
              'parseInt("$1.2")'],
    correct: {
      1: "0",
      2: "1",
      3: "2"
    },
    id: 1,
    type: 'checkbox'
  },
  {
    question: "Какие варианты подключения скрипта являются корректными с точки зрения современного стандарта HTML?",
    answers: ['<script type="text/javascript" src="my.js"></script>',
    '<script src="my.js"></script>',
    '<script src="my.js"/>',
    '<хачу-javascript отсюда="my.js">'],
    correct:{
      1: "1"
    },
    id: 2,
    type: 'radio-button'
  },
  {
    question: "Какие конструкции для циклов есть в javascript?",
    answers: ['Только две: for и while.',
              'Только одна: for.',
              'Три: for, while и do...while.'],
    correct: "2",
    id: 3,
    type: 'radio-button'
  },
  {
    question: "Сколько параметров можно передать функции?",
    answers: ['Ровно столько, сколько указано в определении функции',
              'Сколько указано в определении функции или меньше',
              'Сколько указано в определении функции или больше',
              'Любое количество'],
    correct: "3",
    id: 4,
    type: 'input-field'
  },
  {
    question: "Какой оператор из этих выполняет не только математические операции?",
    answers: ["-", "/", "+", "*", ">>>"],
    correct: "2",
    id: 5,
    type: 'select'
  }
];
