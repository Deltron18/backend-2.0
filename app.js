// const express = require('express');
// const app = express();

// const userModel = require('./usermodel')

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// app.get('/create', async(req, res) => {
// let createduser =  await userModel.create({
//     name: 'karan',
//     email: 'john@example.com',
//     age: 30
//   })
//   res.send(createduser);
// });

// app.get('/read', async(req, res) => {
//   let readuser = await userModel.find();
//   res.send(readuser);
// });

// app.get('/update', async(req, res) => {
//  let updateduser= await userModel.findOneAndUpdate({name:"karan"},{name:"karan singh"},{new:true})
//  res.send(updateduser);
// });

// app.get('/delete', async(req, res) => {
//   let deleteduser = await userModel.findOneAndDelete({name:"karan"});
//   res.send(deleteduser);
// });


// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });
const express = require('express');
const app = express();
const path = require('path');
const userModel = require('./model/user');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/read', (req, res) => {
  res.render('read');
});

app.post('/create', (req, res) => {
  let{name , email,imageURL} = req.body;
  
});


app.listen(3000)