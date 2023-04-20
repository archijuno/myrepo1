const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello,I am JUNO!!! Nice to meet u')
})

app.listen(4000, ()=>{
    console.log("Started server");
}
)
