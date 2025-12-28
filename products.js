// Base de données des produits
const products = [
  {
    id: 1,
    name: "Ramadan Jelbeb Classic",
    shortDescription: "Jelbeb ll romdhan ll slet trawi7 w hatta mt3 wst el 3am",
    fullDescription: "Jelbeb fakhma w raqi li ramdan, msakra b tarz 3asri w moderne. Matiere de haute qualité, confortable w mrigla ll salet trawi7 w lel mounasebet el diniya. Design unique yemchi m3a kol el occasions.",
    price: 180,
    image: "PRODUCT.jpg",
    colors: ["Noir", "Beige", "Marron"],
    sizes: ["S", "M", "L", "XL"],
    material: "Tissu haute qualité, respirant et confortable",
    category: "Ramadan Collection"
  },
  {
    id: 2,
    name: "Ramadan Jelbeb Deluxe",
    shortDescription: "Jelbeb ll romdhan ll slet trawi7 w hatta mt3 wst el 3am",
    fullDescription: "Collection exclusive mt3 ramdan b design contemporain. Qualité supérieure, broderie mfassla w détails mo3tana. Idéal lel occasions spéciales w lel prière.",
    price: 180,
    image: "PRODUCT.jpg",
    colors: ["Noir", "Gris", "Bleu marine"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Tissu premium avec finitions délicates",
    category: "Ramadan Collection"
  },
  {
    id: 3,
    name: "Ramadan Jelbeb Elegant",
    shortDescription: "Jelbeb ll romdhan ll slet trawi7 w hatta mt3 wst el 3am",
    fullDescription: "Design élégant w raffiné, perfect lel mar2a el 3asriya. Coupe moderne, confort maximum w style unique. Yemchi ll kol occasions diniya w ijtime3iya.",
    price: 180,
    image: "PRODUCT.jpg",
    colors: ["Noir", "Bordeaux", "Vert"],
    sizes: ["S", "M", "L", "XL"],
    material: "Matière noble, facile à entretenir",
    category: "Ramadan Collection"
  },
  {
    id: 4,
    name: "Ramadan Jelbeb Premium",
    shortDescription: "Jelbeb ll romdhan ll slet trawi7 w hatta mt3 wst el 3am",
    fullDescription: "Collection premium b détails authentiques. Confection soignée, finitions parfaites w design intemporel. Un choix parfait lel femme moderne.",
    price: 180,
    image: "PRODUCT.jpg",
    colors: ["Noir", "Blanc cassé", "Taupe"],
    sizes: ["S", "M", "L", "XL"],
    material: "Tissu de luxe, doux et résistant",
    category: "Ramadan Collection"
  },
  {
    id: 5,
    name: "Ramadan Jelbeb Exclusive",
    shortDescription: "Jelbeb ll romdhan ll slet trawi7 w hatta mt3 wst el 3am",
    fullDescription: "Modèle exclusif bel khedma ydeweya w tafasil dqiqa. Design unique yodham el élégance w el simplicité. Collection limitée mt3 haute couture.",
    price: 180,
    image: "PRODUCT.jpg",
    colors: ["Noir", "Camel", "Gris perle"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Étoffe exceptionnelle, finition artisanale",
    category: "Ramadan Collection"
  }
];

// Fonction pour récupérer un produit par son ID
function getProductById(id) {
  return products.find(product => product.id === parseInt(id));
}

// Fonction pour récupérer tous les produits
function getAllProducts() {
  return products;
}
