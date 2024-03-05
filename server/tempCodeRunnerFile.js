app.post('/updateInfo', authenticateToken, (req, res) => {
    const userId = req.user.id; // Retrieve user ID from the authenticated request
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
});