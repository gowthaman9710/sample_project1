const { isValid } = require('zod');
const prisma = require('./prismaClient');
let currentUser="gokul@gmail.xom"
const insertRecord = async (req, res) => {
    const { firstname, lastname, username, password } = req.body;
    console.log('====>',username)
   /*  if (!username) {
        return res.status(400).send({ message: "Username is required", isValid: false });
    } */

    try {
        const userdb = await prisma.users.findUnique({
            where: {
                username: username
            },
        });

        if (userdb == undefined || userdb == null) {
            const users = await prisma.users.create({
                data: {
                    firstname,
                    lastname,
                    username,
                    password
                },
            });
            currentUser=username
            res.status(200).send({ message: "You are registered successfully", isValid: true });
        } else {
            res.send({ message: "This username already exists", isValid: false });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "An error occurred while inserting the record", isValid: false });
    }
};

const validate = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.send({ message: "Please enter all the fields", isValid: false });
    }

    try {
        const users = await prisma.users.findUnique({
            where: {
                "username": username
            },
        });

        if (users) {
            const isMatch = (password === users.password);

            if (isMatch) {
                currentUser=username
                res.status(200).send({ message: "You are logged in successfully", isValid: true });
            } else {
                res.send({ message: "Invalid password", isValid: false });
            }
        } else {
            res.send({ message: "The user doesn't exist", isValid: false });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "An error occurred during validation", isValid: false });
    }
};

const dbfetch=async (req,res)=>{    
    let currentUser=req.body.currentuser
    try {
        const users=await prisma.users.findUnique({
            where:{
             "username":currentUser
            }
        })
        let data={
            "firstname":users.firstname,
            "lastname":users.lastname,
            "username":users.username
        }
        res.status(200).json(data)
    } catch (error) {
        console.log(error)
    }
};

module.exports = {
    insertRecord,
    validate,
    dbfetch
};
