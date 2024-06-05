const express = require("express");
const app=express();
require("dotenv").config();

const Port = process.env.Port || 5000;

app.listen(Port, () => {
  console.log(`server started at port http://localhost:${Port}/`);
});
