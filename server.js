const express = require('express');
const app = express();
const cors = require('cors')
const drivers = require('./data/drivers')
const constructors = require('./data/constructors')
const drinks = require('./data/drinks')

app.use(cors({
allowedOrigins: ['localhost:3000']
}));

app.set('port', process.env.PORT || 3000);
app.locals.title = 'F1 Vegas';

app.get('/', (request, response) => {
  response.send('Welcome to F1 Vegas');
});

app.locals.drivers = drivers;
app.locals.constructors = constructors;
app.locals.drinks = drinks;

app.get('/api/v1/drivers', (request, response) => {
  const drivers = app.locals.drivers;

  response.json({ drivers });
});

app.get('/api/v1/constructors', (request, response) => {
  const constructors = app.locals.constructors;

  response.json({ constructors });
});

app.get('/api/v1/drinks', (request, response) => {
  const drinks = app.locals.drinks;

  response.json({ drinks });
});



app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});
