const express = require('express');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT
});
// Create and store your connection string in a `.env` file. It should look something like this:
// PGUSER=your_username
// PGHOST=localhost
// PGDATABASE=todo_app
// PGPASSWORD=your_password
// PGPORT=5432

//REST API Endpoints
//...

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
