const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Connect to the local MongoDB database using the 127.0.0.1 IP address
mongoose.connect('mongodb://127.0.0.1:27017/authDB')
  .then(() => {
    console.log('✅ Connected to MongoDB');
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err);
  });

// Mongoose Schema for the User
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

// Default route to redirect to the login page
app.get('/', (req, res) => {
  res.redirect('/login.html');
});

// Register Route (Updated to redirect on success and errors)
app.post('/register', async (req, res) => {
  const { name, email, password, confirm } = req.body;
  if (password !== confirm) {
    // Redirect back if passwords don't match
    return res.redirect('/register.html?error=password');
  }

  const existing = await User.findOne({ email });
  if (existing) {
    // Redirect back if the user already exists
    return res.redirect('/register.html?error=exists');
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  await newUser.save();

  // On success, redirect to the login page with a success message
  res.redirect('/login.html?success=registered');
});

// Login Route (Updated to redirect with errors)
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    // Redirect back to login with a "user not found" error
    return res.redirect('/login.html?error=nouser');
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    // Redirect back to login with a "wrong password" error
    return res.redirect('/login.html?error=wrongpassword');
  }

  // On success, redirect to the e-commerce website
  res.redirect('/ecommersewebsite.html');
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});