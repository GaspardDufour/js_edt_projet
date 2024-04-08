document.addEventListener('DOMContentLoaded', function() {
    const classeSelect = document.getElementById('classeSelect');
    const listeEleves = document.getElementById('listeEleves');

    classeSelect.addEventListener('change', function() {
        const nomClasse = this.value;
        if (!nomClasse) {
            listeEleves.innerHTML = '';
            return;
        }

        // Récupération des élèves
        axios.get(`http://localhost:3000/eleves/${nomClasse}`)
            .then((response) => {
                // Logique pour afficher les élèves...
            })
            .catch((error) => {
                console.error('Erreur lors de la récupération des élèves:', error);
            });

        // Nouvelle requête pour récupérer les cours de la classe sélectionnée
        axios.get(`http://localhost:3000/cours/${nomClasse}`)
            .then((response) => {
                const cours = response.data; // Supposons que cela renvoie une liste de cours
                
                // Afficher les cours pour la classe sélectionnée...
                // Vous pourriez vouloir créer un nouveau conteneur dans votre HTML pour cela
                // Par exemple, en ajoutant une div avec un id="listeCours" et en remplissant cette div avec les cours
            })
            .catch((error) => {
                console.error('Erreur lors de la récupération des cours:', error);
            });
    });
});
