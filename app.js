const express = require('express');
const app = express();

const userModel = require('./usermodel')

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/create', async(req, res) => {
let createduser =  await userModel.create({
    name: 'karan',
    email: 'john@example.com',
    age: 30
  })
  res.send(createduser);
});

app.get('/read', async(req, res) => {
  let readuser = await userModel.find();
  res.send(readuser);
});

app.get('/update', async(req, res) => {
 let updateduser= await userModel.findOneAndUpdate({name:"karan"},{name:"karan singh"},{new:true})
 res.send(updateduser);
});

app.get('/delete', async(req, res) => {
  let deleteduser = await userModel.findOneAndDelete({name:"karan"});
  res.send(deleteduser);
});


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});