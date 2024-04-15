document.addEventListener('DOMContentLoaded', function () {
    const classeSelect = document.getElementById('classeSelect');
    const listeEleves = document.getElementById('listeEleves');
    const listeCours = document.getElementById('listeCours');

    classeSelect.addEventListener('change', function () {
        const nomClasse = this.value;
        if (!nomClasse) {
            listeEleves.innerHTML = '';
            return;
        }

        axios.get(`http://localhost:3000/eleves/${nomClasse}/`)
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

        axios.get(`http://localhost:3000/classes/${nomClasse}/cours`)
        .then((response) => {
            const cours = response.data;
            listeCours.innerHTML = ''; // Assurez-vous que `listeCours` est bien un élément du DOM
        
            // Ajouter un titre
            const coursTitle = document.createElement('h3');
            coursTitle.textContent = `Voici les cours de la classe ${nomClasse}:`;
            listeCours.appendChild(coursTitle);
        
            // Ajouter des en-têtes pour les informations du cours
            const headerRowCours = document.createElement('div');
            headerRowCours.className = 'header-cours';
        
            const jourHeader = document.createElement('div');
            jourHeader.className = 'jour';
            jourHeader.textContent = 'Jour';
            headerRowCours.appendChild(jourHeader);
        
            const debutHeader = document.createElement('div');
            debutHeader.className = 'heure-debut';
            debutHeader.textContent = 'Heure début';
            headerRowCours.appendChild(debutHeader);
        
            const finHeader = document.createElement('div');
            finHeader.className = 'heure-fin';
            finHeader.textContent = 'Heure fin';
            headerRowCours.appendChild(finHeader);
        
            const matiereHeader = document.createElement('div');
            matiereHeader.className = 'matiere';
            matiereHeader.textContent = 'Matière';
            headerRowCours.appendChild(matiereHeader);
        
            const salleHeader = document.createElement('div');
            salleHeader.className = 'salle';
            salleHeader.textContent = 'Salle';
            headerRowCours.appendChild(salleHeader);
        
            listeCours.appendChild(headerRowCours);
        
            // Ajouter chaque cours dans la liste
            cours.forEach((c) => {
                const coursRow = document.createElement('div');
                coursRow.className = 'cours-row';
        
                const jour = document.createElement('div');
                jour.className = 'jour';
                jour.textContent = c.Jour;
                coursRow.appendChild(jour);
        
                const debut = document.createElement('div');
                debut.className = 'heure-debut';
                debut.textContent = c.HeureDebut;
                coursRow.appendChild(debut);
        
                const fin = document.createElement('div');
                fin.className = 'heure-fin';
                fin.textContent = c.HeureFin;
                coursRow.appendChild(fin);
        
                const matiere = document.createElement('div');
                matiere.className = 'matiere';
                matiere.textContent = c.Matiere;
                coursRow.appendChild(matiere);
        
                const salle = document.createElement('div');
                salle.className = 'salle';
                salle.textContent = c.Salle;
                coursRow.appendChild(salle);
        
                listeCours.appendChild(coursRow);
            });
        })
        


                
                // Logique pour afficher les informations des cours...
            })
            .catch((error) => {
                console.error('Erreur lors de la récupération des informations des cours:', error);
            });

    });

