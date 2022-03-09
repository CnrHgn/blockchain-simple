const express = require('express');
const Block = require('./Block');
const BlockChain = require('./BlockChain');

const app = express()

const port = 3006

app.get('/', (req, res) => {

  let thecoin = new BlockChain();

  thecoin.addNewBlock(new Block(1, "06/12/2021", { sender: "Conor H", recipient: "Joe D", quantity: 20 }));

  thecoin.addNewBlock(new Block(2, "12/12/2021", { sender: "Conor H", recipient: "John S", quantity: 349 }));

  res.json(thecoin)

})

app.listen(port, () => {
  console.log(`Server on http://localhost:${port}`);
})