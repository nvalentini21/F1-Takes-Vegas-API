const express = require('express');
const app = express();
const cors = require('cors')

app.use(cors({
allowedOrigins: ['localhost:3000']
}));

app.set('port', process.env.PORT || 3000);
app.locals.title = 'F1 Vegas';

app.get('/', (request, response) => {
  response.send('Welcome to F1 Vegas');
});

app.locals.drivers = [
  { id: 1, name: 'Charles Lecerlc', constructor: 'Ferrari' },
  { id: 2, name: 'Max', constructor: 'Red Bull' },
  { id: 3, name: 'Lando', constructor: 'McLaren' }
];

app.locals.constructors = [
  {id: 12, name: 'Ferrari', base: 'Italy', symbol_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c0/Scuderia_Ferrari_Logo.svg/1280px-Scuderia_Ferrari_Logo.svg.png'}
]

app.get('/api/v1/drivers', (request, response) => {
  const drivers = app.locals.drivers;

  response.json({ drivers });
});

app.get('/api/v1/constructors', (request, response) => {
  const constructors = app.locals.constructors;

  response.json({ constructors });
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});
