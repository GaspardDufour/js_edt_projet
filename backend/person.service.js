// person.service.js

const pool = require('./db_connection'); // Assurez-vous que ce chemin est correct

const getElevesPrenoms = (idClasse) => {
    return new Promise((resolve, reject) => {
        // Supposons que votre table d'élèves s'appelle 'Eleves'
        const query = 'SELECT * FROM Eleves WHERE IdClasse = ?';
        pool.query(query, [idClasse], (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve(results); // Ici, `results` est un tableau d'objets élèves
            }
        });
    });
};

module.exports = getElevesPrenoms;
