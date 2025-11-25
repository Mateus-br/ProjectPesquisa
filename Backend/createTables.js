const mysql = require('mysql2');
require("dotenv").config();

const db = mysql.createConnection({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  port: process.env.MYSQLPORT
});

const sql = `
DROP TABLE form_anuncio;`;

db.query(sql, err => {
  if (err) console.log("Erro:", err);
  else console.log("Tabela criada!");
  process.exit();
});
