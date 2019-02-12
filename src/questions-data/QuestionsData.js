export const questionsData = [
  {
    question: "Какие вызовы parseInt возвратят число?",
    answers: [{ label: 'parseInt("1px")' },
              { label: 'parseInt("-1.2")' },
              { label: 'parseInt("0 минут")' },
              { label: 'parseInt("$1.2")' }],
    correct: {
      1: 'parseInt("1px")',
      2: 'parseInt("-1.2")',
      3: 'parseInt("0 минут")'
    },
    id: 1,
    type: 'checkbox',
    name: 'parseInt'
  },
  {
    question: "Какие варианты подключения скрипта являются корректными с точки зрения современного стандарта HTML?",
    answers: [{ label: '<script type="text/javascript" src="my.js"></script>' },
              { label: '<script src="my.js"></script>' },
              { label: '<script src="my.js"/>' },
              { label: '<хачу-javascript отсюда="my.js">' }],
    correct: {
      1: '<script src="my.js"></script>'
    },
    id: 2,
    type: 'radio',
    name: 'addScript'
  },
  {
    question: "Какие конструкции для циклов есть в javascript?",
    answers: [{ label: 'Только две: for и while.' },
              { label: 'Только одна: for.' },
              { label: 'Три: for, while и do...while.' }],
    correct: 'Три: for, while и do...while.',
    id: 3,
    type: 'radio',
    name: 'loop'
  },
  {
    question: "Сколько параметров можно передать функции?",
    answers: [{ label: 'Ровно столько, сколько указано в определении функции'},
              { label: 'Сколько указано в определении функции или меньше'},
              { label: 'Сколько указано в определении функции или больше'},
              { label: 'Любое количество'}],
    correct: 'Любое количество',
    id: 4,
    type: 'text',
    name: 'parameters'
  },
  {
    question: "Какой оператор из этих выполняет не только математические операции?",
    answers: [{ label:"-"}, 
              { label: "/"}, 
              { label: "+"}, 
              { label: "*"}, 
              { label: ">>>"}],
    correct: "+",
    id: 5,
    type: 'select',
    name: 'mathParam'
  }
];
