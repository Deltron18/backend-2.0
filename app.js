
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

app.get('/read', async (req, res) => {
  let alluser = await userModel.find();
  res.render('read', { users: alluser });
});

app.get('/delete/:id', async (req, res) => { 
  let alluser = await userModel.findOneAndDelete({ _id: req.params.id });
  res.redirect('/read');
});

app.post('/create', async(req, res) => {
  let{name , image,email} = req.body;
  let createduser = await userModel.create({name,image,email});
  res.redirect('/read');
});


app.listen(3000)