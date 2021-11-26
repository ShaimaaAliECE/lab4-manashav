const express = require('express');
let productList = require('./questions.json');
let answers = [];

const app = express();

// serve static contents
app.use(express.static('static'));

// dynamic handling

app.get('/productsInJson', (req,res) => {
  //  res.send(JSON.stringify(productList));
    res.json(productList);
});

app.get('/answers',(req,res) =>{
  var answers = productList.map(answerIn); //create an array of all the answerIndexes
  
  if(answers[req.query.question] != req.query.counter ) //if they don't match
  {
    res.send('Incorrect'); //send incorrect
  }
  else{
    res.send('Correct');
  }
});

function answerIn(index) //get the all the answerIndexs
{
  return index.answerIndex;
}

app.get('/total',(req,res) =>{
  var answers = productList.map(answerIn); 
  let total = 0;

  //if they answer equals the index then increase the total
  if (answers[0] == req.query.a1){total++;}
  if (answers[1] == req.query.a2){total++;}
  if (answers[2] == req.query.a3){total++;}
  if (answers[3] == req.query.a4){total++;}
  if (answers[4] == req.query.a5){total++;}

  res.send("Your grade is "+total+"/5"); //display total mark
  

})

app.listen(80);