//service.js
// Ajout d'un service (par exemple, une nouvelle classe)
const addService = (service) => {
    axios.post("http://localhost:3000/service/add", service)
        .then((response) => {
            console.log('Service ajouté avec succès:', response.data);
            // Optionnellement, rafraîchir la liste des services après l'ajout
        })
        .catch((error) => {
            console.error('Échec de l\'ajout du service:', error);
            alert('Échec de l\'ajout du service. Voir la console pour plus de détails.');
        });
};

// Exemple d'utilisation de addService
// Vous pouvez lier cette fonction à un événement de formulaire ou à un bouton
// addService({ code: "001", libelle: "Nouvelle Classe" });
