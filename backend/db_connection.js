const mysql = require("mysql");

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "34.155.68.129", // Serveur de BD
  port: "3306", // Numéro de port
  user: "id-inst-bdd-edt0", // Utilisateur de BD
  password: "admin", // Mot de passe
  database: "database_edt", // Nom de la BD
});

pool.getConnection((err, connection) => {
  if (err) throw err;
  console.log("Connection successfull");
  connection.release();
});

module.exports = pool;