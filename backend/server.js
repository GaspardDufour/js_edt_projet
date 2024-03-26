const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();
app.use(cors({
    origin: "*", // Permettre toutes les origines
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const pool = require("./db_connection");
const getElevesPrenoms = require('./person.service.js'); // Assurez-vous que ce chemin est correct

app.get('/eleves/:nomClasse', (req, res) => {
    const nomClasse = req.params.nomClasse;
    // Vous devez implémenter la fonction getClasseIdByName pour qu'elle renvoie l'ID correct en fonction du nom de la classe
    // Supposons que vous avez une correspondance directe entre les noms des classes et les IDs dans la base de données
    let query = 'SELECT * FROM Eleves WHERE IdClasse = (SELECT IdClasse FROM Classes WHERE NomClasse = ?)';

    pool.query(query, [nomClasse], (error, results) => {
        if (error) {
            console.error('Erreur lors de la récupération des élèves:', error);
            res.status(500).send('Erreur interne du serveur');
            return;
        }
        res.json(results);
    });
});

const port = 3306;
app.listen(port, () => {
    console.log(`Serveur en écoute sur ${port}`);
});
