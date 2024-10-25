const express = require('express');
const prisma = require('./prismaClient'); // Import Prisma Client
const cors=require('cors')
const login = require('./components/login');
const register = require('./components/register');
const home=require('./components/home')

// Create an instance of express
const app = express();
const port = 3000;
 
// Middleware
app.use(express.json());
app.use(cors())
 
// Health check route
app.get('/', (req, res) => {
    res.send("The server was started");
});
 
// Routes
app.use('/login', login);
app.use('/signup', register);
app.use('/home',home)
// Example route to demonstrate Prisma usage
app.get('/api/users', async (req, res) => {
    try {
        const users = await prisma.users.findMany(); // Fetch all users from the database
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error });
    }
});

// Start server
app.listen(port, () => {
    console.log("App is listening on", port);
});
