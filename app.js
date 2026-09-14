const express = require('express');
const db = require('./conn');

const app = express();
const PORT = 9000;

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

// Show biodata form
app.get('/', (req, res) => {
    res.render('index');
});

// INSERT biodata into MySQL
app.post('/insert', (req, res) => {

    const {
        full_name,
        age,
        address,
        gender,
        nationality,
        civil_status,
        course,
        year_level,
        school,
        hobby,
        favorite_activity,
        interest,
        computer_skills,
        web_development,
        other_skills
    } = req.body;

    const sql = `
        INSERT INTO personal_info
        (
            full_name,
            age,
            address,
            gender,
            nationality,
            civil_status,
            course,
            year_level,
            school,
            hobby,
            favorite_activity,
            interest,
            computer_skills,
            web_development,
            other_skills
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
        full_name,
        age,
        address,
        gender,
        nationality,
        civil_status,
        course,
        year_level,
        school,
        hobby,
        favorite_activity,
        interest,
        computer_skills,
        web_development,
        other_skills
    ];

    db.query(sql, values, (err, result) => {

        if (err) {
            console.log(err);
            return res.send('Error inserting biodata.');
        }

        console.log('Biodata inserted successfully!');
        res.send('Biodata successfully inserted into the database!');
    });
});

app.listen(9000);