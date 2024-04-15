//server.js

/*const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();
app.use(cors({
    origin: "*", // Permettre toutes les origines
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const pool = require("./db_connection");
const { getElevesPrenoms, getClasseEDT } = require('./person.service.js');


app.get('/classes/:nomClasse/', (req, res) => {
    //const idClasse = req.params.idClasse;
    const nomClasse = req.params.nomClasse;

    console.log("1" + nomClasse);
    let query1 = 'SELECT * FROM Eleves WHERE IdClasse = (SELECT IdClasse FROM Classes WHERE NomClasse = ?)';
    const array1 = [];
    const array2 = [];

    let resultat = {
        "etudiants": [],
        "edt" : []
    };
    pool.query(query1, [nomClasse], (error, results) => {
        if (error) {
            console.error('Erreur lors de la récupération des élèves:', error);
            res.status(500).send('Erreur interne du serveur');
            return;
        }
        //console.log(results);
        results.forEach((e, i) => resultat["etudiants"] = e);
    });

    //const query = 'SELECT C.Jour, C.HeureDebut, C.HeureFin, C.Matiere, C.Salle FROM Cours C JOIN EmploisDuTempsCours E ON C.IdCours = E.IdCours WHERE IdClasse = (SELECT IdClasse FROM Classes WHERE NomClasse = ?)';
    const query2 = `SELECT C.Jour, C.HeureDebut, C.HeureFin, C.Matiere, C.Salle FROM Cours C JOIN EmploisDuTempsCours E ON C.IdCours = E.IdCours WHERE IdClasse = (SELECT IdClasse FROM Classes WHERE NomClasse = '${nomClasse}')`;
    pool.query(query2, [nomClasse], (error, results) => {
        if (error) {
            console.error('Erreur lors de la récupération des informations des cours:', error);
            res.status(500).send('Erreur interne du serveur');
        } else {
            results.forEach((e, i) => resultat["edt"] = e);
            console.log(resultat);
            res.json(resultat);
        }
    });
});



const port = 3000;
app.listen(port, () => {
    console.log(`Serveur en écoute sur ${port}`);
});
*/

//server.js  
const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();
app.use(cors({
    origin: "*",
    // Permettre toutes les origines 
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const pool = require("./db_connection");
const { getElevesPrenoms, getClasseEDT } = require('./person.service.js');


app.get('/eleves/:nomClasse', (req, res) => {
    const nomClasse = req.params.nomClasse;
    console.log("1" + nomClasse);
    let query = 'SELECT * FROM Eleves WHERE IdClasse = (SELECT IdClasse FROM Classes WHERE NomClasse = ?)';
    pool.query(query, [nomClasse], (error, results) => {
        if (error) {
            console.error('Erreur lors de la récupération des élèves:', error);
            res.status(500).send('Erreur interne du serveur'); return;
        } res.json(results);
    });
});


app.get('/classes/:nomClasse/cours', (req, res) => {
    //const idClasse = req.params.idClasse;     
    const nomClasse = req.params.nomClasse;
    console.log("2" + nomClasse);
    //const query = 'SELECT C.Jour, C.HeureDebut, C.HeureFin, C.Matiere, C.Salle FROM Cours C JOIN EmploisDuTempsCours E ON C.IdCours = E.IdCours WHERE IdClasse = (SELECT IdClasse FROM Classes WHERE NomClasse = ?)';    
    const query = `SELECT C.Jour, C.HeureDebut, C.HeureFin, C.Matiere, C.Salle FROM Cours C JOIN EmploisDuTempsCours E ON C.IdCours = E.IdCours WHERE IdClasse = (SELECT IdClasse FROM Classes WHERE NomClasse = '${nomClasse}')`;
    pool.query(query, [nomClasse], (error, results) => {
        if (error) {
            console.error('Erreur lors de la récupération des informations des cours:', error);
            res.status(500).send('Erreur interne du serveur');
        } else {
            console.log(results);
            res.json(results);
        }
    });
});
const port = 3000; app.listen(port, () => {
    console.log(`Serveur en écoute sur ${port}`);
}); 