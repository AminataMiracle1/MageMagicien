// Liste des mages
let $listeMages = [];

// Classe Mage
function Mage(id, nom, forceMagique, image, listesSorts = [], listesMissions = []) {
    this.$id = id; // ID unique du mage
    this.$nom = nom;
    this.$forceMagique = forceMagique;
    this.$image = image;
    this.$listeSorts = listesSorts;
    this.$listeMissionsReussi = listesMissions;
}

// Fonction pour créer un mage et l'ajouter à la liste
function creerMage(nom, forceMagique, img, listesSorts = [], listesMissions = []) {
    let id = $listeMages.length + 1; // Générer un ID unique
    let newMage = new Mage(id, nom, forceMagique, img, listesSorts, listesMissions);
    $listeMages.push(newMage);
}

// Initialisation des mages
creerMage("Mr Bob", 40, "../assets/img/image_F6LmrMGA_1735387951447_raw.jpg", [
    { nom: "Flammes infernales", force: 50, cout: 20, type: "Attaque" },
    { nom: "Tempête de glace", force: 40, cout: 15, type: "Contrôle" }
]);
creerMage("Alice", 50, "../assets/img/UneFilleChezbleu.jpg", [
    { nom: "Explosion magique", force: 60, cout: 25, type: "Attaque" },
    { nom: "Barrière protectrice", force: 30, cout: 10, type: "Défense" }
]);
creerMage("Merlin", 90, "../assets/img/imgeUneFille.jpg", [
    { nom: "Vague de feu", force: 70, cout: 30, type: "Attaque" },
    { nom: "Guérison rapide", force: 40, cout: 15, type: "Soins" }
]);

// Fonction pour afficher les mages
function afficherListesMages() {
    let placemage = "";
    let modalContent = "";
    for (let mage of $listeMages) {
        placemage += `
            <li class="col-lg-3 m-3">
                <div class="card">
                    <img src="${mage.$image}" alt="Image de ${mage.$nom}" class="card-img-top"/>
                    <div class="card-body">
                        <p>ID du mage: <strong>${mage.$id}</strong></p>
                        <p>Nom du mage: <strong>${mage.$nom}</strong></p>
                        <p>Force du mage: <strong>${mage.$forceMagique}</strong></p>
                    </div>
                    <button type="button" class="btn btn-primary voirSorts" data-id="${mage.$id}">
                        Voir les sorts
                    </button>
                </div>
            </li>
        `;
        /*** Cette idee je l'aime bien on récupère la structure de l'affichages des sorts ici.
         Puis dans la même boucle il ajouter un modal à chaque mage.
         Maintenant moi ce qui me vient en tête ou plus du non compréhension :
         Est-ce que quand une personne va cliquer le bouton de carte pour voir les sorts
         gestion de l'événement vas s'activer.
         Cette méthode que je viens de créer elle s'execute juste au début au lancement de la page alors comment
         activé la gestion de l'événement du bouton.
         **/
        // Générer les modales des sorts pour chaque mage
        let sortsHTML = mage.$listeSorts.map(sort => `
            <li>${sort.nom}
                <ul>
                    <li>Force : ${sort.force}</li>
                    <li>Coût : ${sort.cout} mana</li>
                    <li>Type : ${sort.type}</li>
                </ul>
            </li>
        `).join("");

        console.log("Voir les sorts" +sortsHTML)

        modalContent += `
            <div class="modal fade text-black" id="mage${mage.$id}" tabindex="-1" aria-labelledby="mage${mage.$id}Label" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title h5" id="mage${mage.$id}Label">Les Sorts  ${mage.$nom}</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                            <ul>${sortsHTML}</ul>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    // Ajouter les cartes des mages
    document.querySelector(".mageAffichage").innerHTML = placemage;
    // Ajouter les modales des sorts
    document.querySelector("main").insertAdjacentHTML("beforeend", modalContent);
}
// Afficher les mages au chargement
afficherListesMages();


// Réattacher les événements aux boutons après l'ajout des éléments dans le DOM
document.querySelectorAll(".voirSorts").forEach(button => {
    button.addEventListener("click", function () {
        let mageId = this.getAttribute("data-id");
        let modal = new bootstrap.Modal(document.getElementById(`mage${mageId}`));
        modal.show();
    });
});

/**
 * Faire une gestion quand on clique sur un mage on affiches la listes des mission qui se trouve en bas
 * Afficher Mage
 */
function afficherMission(){
    for(let mageMission of $listeMages){

    }
}