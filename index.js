const express = require('express')
const app = express()
const port = process.env.PORT || 5000;

const user =[
  {id:1, name:'sabana',email:'sabana@gmail.com'},
  {id:1, name:'sabana1',email:'sabana1@gmail.com'},
  {id:1, name:'sabana2',email:'sabana2@gmail.com'}
]

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/user',(req,res)=>{
  res.send(user);
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})