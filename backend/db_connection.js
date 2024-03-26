const mysql = require("mysql");

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost", // Serveur de BD
  port: "8889", // Numéro de port
  user: "root", // Utilisateur de BD
  password: "root", // Mot de passe
  database: "Gestion_edt_js", // Nom de la BD
});

pool.getConnection((err, connection) => {
  if (err) throw err;
  console.log("Connection successfull");
  connection.release();
});

module.exports = pool;