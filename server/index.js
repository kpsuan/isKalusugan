const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.listen(3002, () => {
    console.log("Server started at port 3002")
})

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'hsudb'
})


app.post('/login', (req, res) => {
    const sentLoginUserName = req.body.LoginUserName
    const sentLoginPassword = req.body.LoginPassword

    const SQL = 'SELECT * FROM users WHERE username = ? && password = ?'
    const Values = [sentLoginUserName, sentLoginPassword]

    db.query(SQL, Values, (err, results) => {
        if(err){
            res.send({error: err})
        }
        if(results.length > 0){
            res.send(results)
        } else{
            res.send({message: 'Wrong username or password'})
        }
    }) 
})

app.post('/register', (req, res) => {
    const sentEmail = req.body.Email
    const sentUserName = req.body.UserName
    const sentPassword = req.body.Password

    const SQL = "INSERT INTO users (Email, UserName, Password) VALUES (?, ?, ?)"
    const Values = [sentEmail, sentUserName, sentPassword]

    db.query(SQL, Values, (err, result) => {
        if (err) {
            res.send(err)
        } else {
            console.log('User inserted successfully!')
            res.send({message: 'User added!'})
        }
    })
})


/*
app.post('/updateInfo', authenticateToken, (req, res) => {
    const userId = 37; // Retrieve user ID from the authenticated request
    const sentfirstName = req.body.FirstName
    const sentmiddleName = req.body.MiddleName
    const sentlastName = req.body.LastName
    const sentdegreeLevel = req.body.Degree
    const sentyearLevel = req.body.YearLevel
    const sentCollege = req.body.College
    const sentDepartment = req.body.Department
    const sentGraduatingThisTerm = req.body.UserName
    const sentSex = req.body.Sex


    const SQL = `
        UPDATE users 
        SET 
            firstName = ?,
            middleName = ?,
            lastName = ?,
            degreeLevel = ?,
            yearLevel = ?,
            college = ?,
            department = ?,
            graduatingThisTerm = ?,
            sex = ?
        WHERE 
            id = ?`;

    const values = [
        sentfirstName,
        sentmiddleName,
        sentlastName,
        sentdegreeLevel,
        sentyearLevel,
        sentCollege,
        sentDepartment,
        sentGraduatingThisTerm,
        sentSex,
        userId // Use the authenticated user's ID
    ];

    db.query(SQL, values, (err, result) => {
        if (err) {
            console.error('Error updating user info:', err);
            res.status(500).json({ error: 'Failed to update user info' });
        } else {
            window.log('User info updated successfully!');
            res.status(200).json({ message: 'User info updated successfully' });
        }
    });
});*/




