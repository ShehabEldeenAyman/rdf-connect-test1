const express = require('express');
const Port_number = 3000;
const app = express();

app.get('/',(req,res)=>{

res.send({
data:"Hello world"
});
}
);
