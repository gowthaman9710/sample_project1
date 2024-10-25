const express = require('express');
const bcrypt = require('bcrypt');
const prisma = require('../../prismaClient');  // Import Prisma client
 
const router = express.Router();
 
// Signup route
router.post('/signup', async (req, res) => {
  const { username, password } = req.body;
 
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }
 
  try {
    // Check if user already exists
    const existingUser = await prisma.users.findUnique({
      where: { username },
    });
 
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }
 
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
 
    // Create new user in the database
    const newUser = await prisma.users.create({
      data: {
        username,
        password: hashedPassword,
      },
    });
 
    return res.status(201).json({ message: 'Signup successful!', users: newUser });
  } catch (error) {
    return res.status(500).json({ message: 'Error creating user', error });
  }
});
 
// Login route
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
 
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }
 
  try {
    // Find user by username
    const users = await prisma.users.findUnique({
      where: { username },
    });
 
    if (!users) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
 
    // Compare password
    const isMatch = await bcrypt.compare(password, users.password);
 
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
 
    return res.status(200).json({ message: 'Login successful!' });
  } catch (error) {
    return res.status(500).json({ message: 'Error logging in', error });
  }
});
 
module.exports = router;