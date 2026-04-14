const express = require('express');
const Calculator = require('./modules/calculator.js');

const PORT = process.env.PORT || 3000;
const app = express();
const calc = new Calculator.Calculator();

app.get('/', (req, res) => {
  res.send('Welcome to the calculator app!');
});

app.get('/add', (req, res) => {
  res.send(`${req.query.a} + ${req.query.b} = \
    ${calc.add(parseFloat(req.query.a), parseFloat(req.query.b))}`);
});

app.get('/sub', (req, res) => {
  res.send(`${req.query.a} - ${req.query.b} = \
    ${calc.subtract(parseFloat(req.query.a), parseFloat(req.query.b))}`);
});

app.get('/mul', (req, res) => {
  res.send(`${req.query.a} * ${req.query.b} = \
    ${calc.multiply(parseFloat(req.query.a), parseFloat(req.query.b))}`);
});

app.get('/div', (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  const result = calc.divide(a, b);

  if (result === Infinity) {
    return res.send(`Cannot divide ${req.query.a} by zero`);
  }

  res.send(`${a} / ${b} = ${calc.divide(a, b)}`);
});

// NEW FEATURE
app.get('/pow', (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  const result = calc.power(a, b);
  res.send(`${a} ^ ${b} = ${result}`);
});

app.listen(PORT, () => {
  console.log(`Calculator app listening on port ${PORT}!`);
});
