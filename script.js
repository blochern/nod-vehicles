const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

const sql = postgres(process.env.DATABASE_URL);

app.use(express.static("public"));

// get all
app.get("/vehicles", (req, res) => {
    sql`SELECT * FROM vehicles;`.then((data) => {
        res.json(data);
    });
});

// get one
app.get("/vehicles/:id", (req, res) => {
    const { id } = req.params;
    sql`SELECT * FROM vehicles WHERE id = ${id}`.then((data) => {
        res.json(data)
    });
});

// listener port 3001
app.listen(process.env.PORT, () => { console.log("Server is running... listening on port ", process.env.PORT) });