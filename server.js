const express = require('express');
const path = require('path');
const fs = require('fs');
const app =  express();
console.log('after calling readFile');

//ROUTES
// Add two routes for the two pages
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

//PORT
const PORT = 8000 || process.env.PORT ;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

