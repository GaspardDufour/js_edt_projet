// person.service.js

const pool = require('./db_connection'); // Assurez-vous que ce chemin est correct

const getElevesPrenoms = (idClasse) => {
    return new Promise((resolve, reject) => {
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

const getClasseEDT = (idClasse) => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT C.Jour, C.HeureDebut, C.HeureFin, C.Matiere, C.Salle FROM Cours C JOIN EmploisDuTempsCours E ON C.IdCours = E.IdCours WHERE E.IdClasse = ?';
        pool.query(query, [idClasse], (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                console.log(results);
                resolve(results); // Ici, `results` est un tableau d'objets cours
            }
        });
    });
};


module.exports = { getElevesPrenoms, getClasseEDT };
