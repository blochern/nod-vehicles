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
        const results = await pool.query("SELECT * FROM vehicles;");
        res.json(results.rows); return;
    }
    catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});

// get one
app.get("/vehicles/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const results = await pool.query("SELECT * FROM vehicles WHERE id = $1", [id]);
        if (results.rowCount === 0) {
            res.status(404).send("Vehicle not found at id ", id); return;
        }
        else {
            res.json(results.rows[0]); return;
        }
    }
    catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});

// listener
app.listen(port, () => { console.log("Server is running... listening on port ", port) });