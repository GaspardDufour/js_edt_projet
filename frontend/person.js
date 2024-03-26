document.addEventListener('DOMContentLoaded', function() {
    const classeSelect = document.getElementById('classeSelect');
    const listeEleves = document.getElementById('listeEleves');

    classeSelect.addEventListener('change', function() {
        const nomClasse = this.value;
        if (!nomClasse) {
            listeEleves.innerHTML = '';
            return;
        }

        axios.get(`http://localhost:3000/eleves/${nomClasse}`)
            .then((response) => {
                const eleves = response.data;   
                listeEleves.innerHTML = '';

                // Ajouter un titre et des en-têtes
                const classeTitle = document.createElement('h3');
                classeTitle.textContent = `Voici la liste des élèves de la classe ${nomClasse}:`;
                listeEleves.appendChild(classeTitle);

                const headerRow = document.createElement('div');
                headerRow.className = 'header';
                const prenomHeader = document.createElement('div');
                prenomHeader.className = 'prenom';
                prenomHeader.textContent = 'Prénoms';
                const nomHeader = document.createElement('div');
                nomHeader.className = 'nom';
                nomHeader.textContent = 'Noms';
                headerRow.appendChild(prenomHeader);
                headerRow.appendChild(nomHeader);
                listeEleves.appendChild(headerRow);

                // Afficher chaque élève
                eleves.forEach(eleve => {
                    const eleveContainer = document.createElement('div');
                    eleveContainer.className = 'eleve-container';
                    const prenomDiv = document.createElement('div');
                    prenomDiv.className = 'prenom';
                    prenomDiv.textContent = eleve.Prenom;
                    const nomDiv = document.createElement('div');
                    nomDiv.className = 'nom';
                    nomDiv.textContent = eleve.Nom;
                    eleveContainer.appendChild(prenomDiv);
                    eleveContainer.appendChild(nomDiv);
                    listeEleves.appendChild(eleveContainer);
                });
            })
            .catch((error) => {
                console.error('Erreur lors de la récupération des élèves:', error);
                alert('Erreur lors de la récupération des élèves. Voir la console pour plus de détails.');
            });
    });
});
