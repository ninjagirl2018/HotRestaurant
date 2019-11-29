const express = require('express');
const path = require('path');
const fs = require('fs');
const app =  express();
console.log('after calling readFile');



let tables = [
    {
        reserved: false,
        number: 3
    },
    {
        reserved: false,
        number: 2
    },
    {
        reserved: false,
        number: 1
    }
]

function tablesLeft(tables) {
    let tablesLeft = 0;
    for (table of tables) {
        if (table.reserved === false){
            tablesLeft ++;
        }
    }
    return tablesLeft;
}



//ROUTES
// Add two routes for the two pages
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'home.html'));
  let tablesLeft = {
      tablesLeft: tablesLeft(tables)
  }
  res.json(tablesLeft)
});

app.get('/api/tables', (req, res) => {
    res.json(tables);
  });

app.get('/api/reservations', (req, res) => {
    tablesLeft(tables);
});

// the code to process post requests
app.post('/submit',function(request,response){
    var query1=request.body.var1;
    var query2=request.body.var2;
    });

//PORT
const PORT = 8000 || process.env.PORT ;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


