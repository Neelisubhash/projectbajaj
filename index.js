const express = require("express");
const cors = require('cors');
app.use(cors());
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.post('/bfhl', (req, res) => {
    const {data} = req.body;
    console.log(req.body);
  let numb = []
  let alpha = []
    data.forEach(item => {
        if (!isNaN(item)) {
          numb.push(String(item));
        } else if (/^[A-Za-z]+$/.test(item)) {
          alpha.push(item);
        }
      });
    const response = {
      is_sucess: 'true',
      user_id:'harsh_kumar',
      college_email:'hm0976srmist.edu.in',
      roll_number:'RA2011003011389',
      numbers:numb,
      alphabets:alpha
    };
  
    res.json(response);
  });
  
  app.get('/bfhl', (req, res) => {
    const operationCode = Math.floor(Math.random() * 1000);
    const response = {
      operation_code: operationCode,
    };
  
    res.json(response);
  });
  
app.listen(3000, function () {
    console.log("Server is running on 3000");
});