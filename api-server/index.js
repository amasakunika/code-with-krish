const express=require("express");

const {getMinNumber} = require('./util.js');
const {getMaxNumber} = require('./util.js');
const {getMaxFromNumbers} = require('./util.js');
const {getAverageValue} = require('./util.js');
const {sortNumbers} = require('./util.js');
const {countOccurrance} = require('./util.js');

const app = new express();
const port=3000;

const greetings = {message: "hello node"}

app.get('/', (req,res) => {
   res.json(greetings);
});

app.get('/number/min', (req,res) => {
   const num1 = parseFloat(req.query.num1);
   const num2 = parseFloat(req.query.num2);

   const result = getMinNumber(num1,num2);
   
   res.status(result.status).json(result.data);

   //if(isNaN(num1) || isNaN(num2)){
      //res.json({message: "error"});
   //}
   //return null instead of NaN as json conver NaN to null as NaN is not a value in json
   //res.json({min: num1 > num2 ? num2 : num1});
   //OR
   //res.json({min: Math.min(num1, num2)});
});

app.get('/number/max', (req,res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
 
    const result = getMaxNumber(num1,num2);
   
    res.status(result.status).json(result.data);
});

app.get('/number/maximum', (req,res) => {
    const numbers = req.query.numbers.split(',').map(num => parseFloat(num));
    
    const result = getMaxFromNumbers(numbers);
   
    res.status(result.status).json(result.data);
});

app.get('/number/avg', (req,res) => {
    const numbers = req.query.numbers.split(',').map(num => parseFloat(num));
 
    const result = getAverageValue(numbers);
   
    res.status(result.status).json(result.data);
});

app.get('/number/sort', (req,res) => {
    const numbers = req.query.numbers.split(',').map(num => parseFloat(num));
 
    const result = sortNumbers(numbers);
   
    res.status(result.status).json(result.data);
});

app.get('/number/count', (req,res) => {
    const values = req.query.values.split(',').map(value => parseFloat(value));
    const search = parseFloat(req.query.search);
 
    const result = countOccurrance(values,search);
   
    res.status(result.status).json(result.data);
});

//app.get('/number/max', (req,res) => {});
//app.get('/number/avg', (req,res) => {}); //number/avg?numbers=1,4,7,44,676,....
//app.get('/number/sort', (req,res) => {}); //number/sort?numbers=1,4,7,44,676,....n&type(asc | dec)
//app.get('/number/count', (req,res) => {}); //number/count?numbers=1,4,G,Kamal,G,....n&search=G //need to search how many occurences

app.listen(port,()=>{
    console.log(`server is running on ${port}`);
});