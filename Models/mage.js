// Liste des mages
let $listeMages = [];

// Classe Mage
function Mage(id, nom, forceMagique, image, listesSorts = [], listesMissions = []) {
    this.$id = id; // ID unique du mage
    this.$nom = nom;
    this.$forceMagique = forceMagique;
    this.$image = image;
    this.$listeSorts = listesSorts;
    this.$listeMissions = listesMissions;
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
    }
    document.querySelector(".mageAffichage").innerHTML =placemage;
}

// Afficher les mages au chargement
afficherListesMages();
