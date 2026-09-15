const express = require('express');
const db = require('./conn');
const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

// Show biodata form
app.get('/', (req, res) => {
    res.render('index');
});

// INSERT biodata into MySQL
app.post('/insert', (req, res) => {

    const fn = req.body.fn;
    const age = req.body.age;
    const add = req.body.add;
    const gen = req.body.gen;
    const nat = req.body.nat;
    const cs = req.body.cs;
    const course = req.body.course;
    const yl = req.body.yl;
    const school = req.body.school;
    const hobby = req.body.hobby;
    const interest = req.body.interest;
    const skills = req.body.skills;

    const insert = `INSERT INTO personal_info
    VALUES('0','${fn}',${age},'${add}','${gen}','${nat}','${cs}','${course}','${yl}','${school}','${hobby}','${interest}','${skills}')`;

    db.query(insert, (err) => {
        if (err) throw err;

        res.send(`
            <script>
                alert('Data inserted successfully!');
                location.href='/';
            </script>
        `);
    });
});

app.listen(9000, () => {
    console.log('Server running');
});
