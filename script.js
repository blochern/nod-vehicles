const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

const { Pool } = require('pg');

const port = process.env.PORT;
const databaseString = process.env.DATABASE_URL;

const pool = new Pool ({
    connectionString: databaseString
});

app.use(express.static('public'));

// get all
app.get("/vehicles", async (req, res) => {
    try {
        const results = await pool.query("SELECT * FROM VEHICLES;");
        res.json(results.rows); return;
    }
    catch (err) {
        res.status(500).send("Internal Server Error");
    }
});

// listener
app.listen(port, () => { console.log("Server is running... listening on port ", port) });