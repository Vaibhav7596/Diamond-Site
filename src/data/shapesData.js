// Dynamic image importer for Vite - constrained to standard image extensions to prevent parsing files without extensions as JS
const globbedImages = import.meta.glob('/images/*.{jpeg,jpg,png,gif,jfif,svg}', { eager: true });

/**
 * Resolves the URL of an image inside the root '/images' directory.
 * Works seamlessly in both dev and production build environments.
 */
export const getShapeImageUrl = (imageName) => {
  if (!imageName) return '';
  const path = `/images/${imageName}`;
  const match = globbedImages[path];
  if (match) {
    return match.default || match;
  }
  return path;
};

export const diamondShapes = [
  {
    id: "round-brilliant",
    name: {
      en: "ROUND BRILLIANT CUT",
      it: "TAGLIO ROTONDO BRILLANTE",
      fr: "COUPE ROND BRILLANT"
    },
    imageName: "Round.jpeg",
    sizeRange: "0.01 CT – 10.00 CT+",
    labs: "HPHT & CVD",
    certified: true,
    desc: {
      en: "The classic and most popular diamond cut, engineered for maximum brilliance and light performance.",
      it: "Il taglio classico e più popolare, progettato per la massima brillantezza e prestazione della luce.",
      fr: "La coupe classique et la plus populaire, conçue pour une brillance et une performance lumineuse maximales."
    }
  },
  {
    id: "oval",
    name: {
      en: "OVAL CUT",
      it: "TAGLIO OVALE",
      fr: "COUPE OVALE"
    },
    imageName: "Oval.jpeg",
    sizeRange: "0.10 CT – 8.00 CT+",
    labs: "HPHT & CVD",
    certified: true,
    desc: {
      en: "An elegant, elongated shape that combines the brilliance of a round cut with a flattering, lengthening effect.",
      it: "Una forma elegante e allungata che unisce la brillantezza di un taglio rotondo con un effetto lusinghiero e allungante.",
      fr: "Une forme élégante et allongée qui combine la brillance d'une coupe ronde avec un effet allongeant flatteur."
    }
  },
  {
    id: "marquise",
    name: {
      en: "MARQUISE CUT",
      it: "TAGLIO MARQUISE",
      fr: "COUPE MARQUISE"
    },
    imageName: "Marquise.jpeg",
    sizeRange: "0.10 CT – 5.00 CT+",
    labs: "HPHT & CVD",
    certified: true,
    desc: {
      en: "A distinctive football-shaped cut that maximizes carat weight appearance and offers unique vintage appeal.",
      it: "Un caratteristico taglio a forma di pallone che massimizza l'aspetto della caratura e offre un fascino vintage unico.",
      fr: "Une coupe distinctive en forme de navette qui maximise l'apparence du poids en carats et offre un attrait vintage unique."
    }
  },
  {
    id: "pear",
    name: {
      en: "PEAR CUT",
      it: "TAGLIO A PERA",
      fr: "COUPE POIRE"
    },
    imageName: "Pear.jpeg",
    sizeRange: "0.15 CT – 8.00 CT+",
    labs: "HPHT & CVD",
    certified: true,
    desc: {
      en: "A beautiful teardrop shape combining the best of round and marquise cuts for a sophisticated, asymmetrical look.",
      it: "Una bellissima forma a goccia che unisce il meglio dei tagli rotondo e marquise per un aspetto sofisticato e asimmetrico.",
      fr: "Une belle forme de larme combinant le meilleur des coupes rondes et marquises pour un look sophistiqué et asymétrique."
    }
  },
  {
    id: "cushion",
    name: {
      en: "CUSHION CUT",
      it: "TAGLIO CUSHION (A CUSCINETTO)",
      fr: "COUPE COUSSIN"
    },
    imageName: "cushion.jpeg",
    sizeRange: "0.20 CT – 10.00 CT+",
    labs: "HPHT & CVD",
    certified: true,
    desc: {
      en: "A timeless square or rectangular shape with rounded corners, known for its soft appearance and high dispersion of fire.",
      it: "Una forma quadrata o rettangolare senza tempo con angoli arrotondati, nota per il suo aspetto morbido e l'alta dispersione del fuoco.",
      fr: "Une forme carrée ou rectangulaire intemporelle aux angles arrondis, connue pour son aspect doux et sa grande dispersion du feu."
    }
  },
  {
    id: "princess",
    name: {
      en: "PRINCESS CUT",
      it: "TAGLIO PRINCESS",
      fr: "COUPE PRINCESSE"
    },
    imageName: "Princess.jpeg",
    sizeRange: "0.10 CT – 8.00 CT+",
    labs: "HPHT & CVD",
    certified: true,
    desc: {
      en: "A modern, square cut with sharp, clean corners and exceptional brilliance, second in popularity only to the round brilliant.",
      it: "Un taglio moderno e quadrato con angoli vivi e puliti e una brillantezza eccezionale, secondo per popolarità solo al rotondo.",
      fr: "Une coupe carrée moderne avec des coins vifs et propres et une brillance exceptionnelle, deuxième en popularity après le rond brillant."
    }
  },
  {
    id: "four-step-emerald",
    name: {
      en: "4 STEP EMERALD CUT",
      it: "TAGLIO SMERALDO A 4 GRADINI",
      fr: "COUPE ÉMERAUDE À 4 GRADINS"
    },
    imageName: "Emrald.jpeg",
    sizeRange: "0.30 CT – 12.00 CT+",
    labs: "HPHT & CVD",
    certified: true,
    desc: {
      en: "A classic rectangular step cut featuring clean, parallel facets that showcase the diamond's clarity and elegant geometry.",
      it: "Un classico taglio a gradini rettangolare con sfaccettature pulite e parallele che mettono in mostra la purezza del diamante.",
      fr: "Une coupe classique à degrés rectangulaire dotée de facettes propres et parallèles qui mettent en valeur la clarté du diamant."
    }
  },
  {
    id: "square-emerald",
    name: {
      en: "SQUARE EMERALD CUT",
      it: "TAGLIO SMERALDO QUADRATO",
      fr: "COUPE ÉMERAUDE CARRÉE"
    },
    imageName: "Emrald.jpeg",
    sizeRange: "0.30 CT – 8.00 CT+",
    labs: "HPHT & CVD",
    certified: true,
    desc: {
      en: "Also known as the Asscher cut, this square step-cut diamond features an architectural layout with high crown and deep facets.",
      it: "Noto anche come taglio Asscher, questo diamante quadrato a gradini presenta una disposizione architettonica con corona alta.",
      fr: "Également connue sous le nom de coupe Asscher, ce diamant carré à degrés présente une disposition architecturale avec une couronne haute."
    }
  },
  {
    id: "square-radiant",
    name: {
      en: "SQUARE RADIANT CUT",
      it: "TAGLIO RADIANT QUADRATO",
      fr: "COUPE RADIANTE CARRÉE"
    },
    imageName: "Radiant Cut.jfif",
    sizeRange: "0.20 CT – 8.00 CT+",
    labs: "HPHT & CVD",
    certified: true,
    desc: {
      en: "A square modified brilliant cut that combines the clean outline of an emerald shape with the dazzling sparkle of a round.",
      it: "Un taglio brillante modificato quadrato che unisce il contorno netto dello smeraldo con lo scintillio abbagliante di un rotondo.",
      fr: "Une coupe brillante modifiée carrée qui combine le contour propre d'une émeraude avec l'éclat éblouissant d'un rond."
    }
  },
  {
    id: "heart",
    name: {
      en: "HEART CUT",
      it: "TAGLIO A CUORE",
      fr: "COUPE CŒUR"
    },
    imageName: "Heart.jpeg",
    sizeRange: "0.30 CT – 5.00 CT+",
    labs: "HPHT & CVD",
    certified: true,
    desc: {
      en: "The ultimate symbol of romance, featuring a precisely crafted lobe and cleft to deliver exceptional brilliance and symmetry.",
      it: "Il simbolo definitivo del romanticismo, caratterizzato da lobi e fessure rifiniti con precisione per offrire simmetria eccezionale.",
      fr: "Le symbole ultime de la romance, doté de lobes et d'une fente taillés avec précision pour offrir une symétrie exceptionnelle."
    }
  },
  {
    id: "rose-cut",
    name: {
      en: "ROSE CUT",
      it: "TAGLIO A ROSA",
      fr: "COUPE ROSE"
    },
    imageName: "RoseCut.jpeg",
    sizeRange: "0.05 CT – 5.00 CT+",
    labs: "HPHT & CVD",
    certified: false,
    desc: {
      en: "A vintage, flat-bottomed cut featuring a dome-shaped crown covered in triangular facets, offering a soft, glassy luster.",
      it: "Un taglio vintage a fondo piatto con una corona a cupola coperta da facette triangolari, offrendo una lucentezza morbida.",
      fr: "Une coupe vintage à fond plat dotée d'une couronne en dôme recouverte de facettes triangulaires, offrant un lustre doux."
    }
  },
  {
    id: "rectangular-radiant",
    name: {
      en: "RECTANGULAR RADIANT CUT",
      it: "TAGLIO RADIANT RETTANGOLARE",
      fr: "COUPE RADIANTE RECTANGULAIRE"
    },
    imageName: "Radiant Cut.jfif",
    sizeRange: "0.20 CT – 12.00 CT+",
    labs: "HPHT & CVD",
    certified: true,
    desc: {
      en: "An elongated modified brilliant cut featuring cropped corners, offering intense sparkle and a modern rectangular silhouette.",
      it: "Un taglio brillante modificato allungato con angoli tronchi, che offre una brillantezza intensa e una silouette moderna.",
      fr: "Une coupe brillante modifiée allongée avec des coins tronqués, offrant un éclat intense et une silhouette rectangulaire moderne."
    }
  },
  {
    id: "triangle",
    name: {
      en: "TRIANGLE CUT",
      it: "TAGLIO A TRIANGOLO",
      fr: "COUPE TRIANGLE"
    },
    imageName: "Triangle.jpeg",
    sizeRange: "0.10 CT – 5.00 CT+",
    labs: "HPHT & CVD",
    certified: false,
    desc: {
      en: "A bold, geometric shape featuring three equal sides, offering unique brilliance and modern architectural charm.",
      it: "Una forma geometrica audace con tre lati uguali, che offre una brillantezza unica e un fascino architettonico moderno.",
      fr: "Une forme géométrique audacieuse avec trois côtés égaux, offrant une brillance unique et un charme architectural moderne."
    }
  },
  {
    id: "trilliant",
    name: {
      en: "TRILLIANT CUT",
      it: "TAGLIO TRILLIANT",
      fr: "COUPE TRILLIANT"
    },
    imageName: "Trilliant.jpeg",
    sizeRange: "0.10 CT – 5.00 CT+",
    labs: "HPHT & CVD",
    certified: true,
    desc: {
      en: "A triangular brilliant cut featuring slightly curved or straight edges, often used as spectacular accent stones.",
      it: "Un taglio brillante triangolare con bordi leggermente curvi o diritti, spesso usato come spettacolari pietre d'accento.",
      fr: "Une coupe brillante triangulaire aux bords légèrement courbés ou droits, souvent utilisée comme pierres d'accentuation."
    }
  },
  {
    id: "baguette",
    name: {
      en: "BAGUETTE CUT",
      it: "TAGLIO BAGUETTE",
      fr: "COUPE BAGUETTE"
    },
    imageName: "Buguatte.jpeg",
    sizeRange: "0.01 CT – 2.00 CT+",
    labs: "HPHT & CVD",
    certified: false,
    desc: {
      en: "A slender, rectangular step-cut diamond commonly used in side-stone alignments to frame center stones with geometric elegance.",
      it: "Un diamante rettangolare a gradini sottile, comunemente usato negli allineamenti laterali per incorniciare la pietra centrale.",
      fr: "Un diamant à degrés rectangulaire et mince, couramment utilisé dans les alignements latéraux pour encadrer la pierre centrale."
    }
  },
  {
    id: "tapered-baguette",
    name: {
      en: "TAPERED BAGUETTE CUT",
      it: "TAGLIO BAGUETTE CONICA",
      fr: "COUPE BAGUETTE CONIQUE"
    },
    imageName: "Taperbuguette.jpeg",
    sizeRange: "0.01 CT – 2.00 CT+",
    labs: "HPHT & CVD",
    certified: false,
    desc: {
      en: "A modified baguette cut that tapers gently at one end, creating a sleek geometric flow perfect for elegant jewelry shoulders.",
      it: "Un taglio baguette modificato che si assottiglia delicatamente a un'estremità, creando un flusso geometrico elegante.",
      fr: "Une coupe baguette modifiée qui se rétrécit doucement à une extrémité, créant un flux géométrique parfait pour les bijoux."
    }
  }
];
