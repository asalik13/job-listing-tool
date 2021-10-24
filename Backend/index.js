const express = require('express');
const path = require('path');
const app = express();

//For if a port is supplied as an enviroment variable
const port = process.env.PORT || 3001;

app.use(express.json());

app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

const endpoints = [
  require('./endpoints/loginPost'),
  require('./endpoints/listingsPost'),
  require('./endpoints/referralsFromListingGet')
];

for(const endpoint of endpoints){
  endpoint(app);
}