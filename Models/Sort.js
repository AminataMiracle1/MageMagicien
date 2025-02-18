// une liste de sort
let $listeSorts  = [];
function Sort (idSort, nomSort, typeSort, coutSort, forceSort, img){
    this.$idSort = idSort;

    this.$nomSort =nomSort;
    this.$typeSort = typeSort;
    this.$coutSort =coutSort;
    this.$forceSort = forceSort;
    this.$img =img;
}

// Initialiser des sorts :

let sort1  = new Sort(1, "flammes infernale", "Destruction", 15, 12, "../assets/img/aladin.png")
let sort3  = new Sort(2, "potion noir", "guerrisseur", 15, 25, "../assets/img/potion2.jpg")
let sort4  = new Sort(2, "potion noir", "guerrisseur", 15, 25, "../assets/img/potion1.jpg")
let sort5  = new Sort(2, "potion noir", "guerrisseur", 15, 25, "../assets/img/potion3.jpg")
let sort2  = new Sort(2, "potion noir", "guerrisseur", 15, 25, "../assets/img/lampe.jpg")


$listeSorts.push(sort1,sort4,sort5,sort3,sort2);


// Méthodes pour afficher les sorts

function afficherSort(){
    let placeSort = "";
    //TODO : vérifier si local storage n'est pas vide et ajouter c'est objet puis les  reafficher
    for (let sort of $listeSorts){
           placeSort += `
               <li class="col-lg-3 my-2">
                   <div class="card">
                       <img src= ${sort.$img} alt=${sort.$nomSort}>
                           <div class="card-body">
                               <h2 class="card-title h5">Nom : <strong>${sort.$nomSort}</strong></h2>
                               <h3 class="card-subtitle mb-2 h6">Type de sort :  <strong>${sort.$typeSort}</strong></h3>
                               <ul class="card-text">
                                   <li>Force : <strong>${sort.$forceSort}</strong></li>
                                   <li>Cout : <strong>${sort.$coutSort}</strong></li>
                                   <button type="button" id="acheterSort">Acheter</button>
                                   
                               </ul>
                           </div>
                   </div>
               </li>
           `;
    }
    // Ajouter dans environnement :
    $(".divSort").html(placeSort);
}
afficherSort() ;

// créer un objet sort
function creerSort(nom, type, force, cout){
    // Créér un id
    let id = $listeSorts.length;
    return  new Sort( id, nom,type, force, cout, "../assets/img/lampe.jpg" )
}

// Ajouter un nouveau sort :
function ajouterSort(){
    // Récuper les valeur du formulaire
    let nom = $("#nomSort").val()
    let type = $("#typeSort").val()
    let force = $("#forceDuSort").val()
    let cout = $("#cout").val()

    //TODO : ajouter dans le localStorage pour ne pas perdre le sort
    let newSort = creerSort(nom,type,force, cout)
    $listeSorts.push(newSort)
    afficherSort()
}
$("#btnAjouterSort").on("click", ajouterSort)

