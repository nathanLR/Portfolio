import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Nathan LE ROUX | Développeur Front-End', // e.g: 'Name | Developer'
  lang: 'fr', // e.g: en, es, fr, jp
  description: 'Bienvenue sur mon Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Bonjour, je suis',
  name: 'Nathan LE ROUX',
  subtitle: 'Je suis développeur Web Front-End',
  cta: 'me découvrir',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Bonjour, je suis Nathan LE ROUX, 23 ans, développeur Web Front-End résidant dans le Morbihan en Bretagne.',
  paragraphTwo: 'Diplômé d\'une Licence Professionnelle en Informatique (Métiers de l\'Informatique: Application Web) de l\'Université de La Rochelle, je souhaite mettre en pratique mes acquis dans une entreprise dynamique et innovante.',
  paragraphThree: 'Je suis très motivé et mobile, je peux travailler en équipe comme en totale autonomie.',
  resume: 'CV_LE_ROUX_Nathan.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'ivory-isle.png',
    title: 'Ivory Isle Design',
    info: 'Ivory Isle Design est un site e-commerce de Faire-Part de mariage. La cliente, basée aux États-Unis, souhaitait une refonte visuelle complète de son ancien site internet.',
    info2: 'J\'ai été chargé d\'intégrer la totalité des nouveaux visuels ainsi qu\'une partie de la partie Back-End du site.',
    info3: 'Ce site a été fait pendant mon stage de fin d\'étude. Fait avec Wordpress.',
    url: 'https://www.ivoryisledesigns.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'laings.png',
    title: 'Laings',
    info: 'Laings UK est un site e-commerce de montres et bijoux de luxe. Le client, une chaîne de bijouteries basée au Royaume-Uni, souhaitait une refonte visuelle complète de son ancien site internet.',
    info2: 'J\'ai été chargé d\'intégrer la totalité des nouveaux visuels.',
    info3: 'Ce site a été fait pendant mon stage de fin d\'étude.',
    url: 'https://www.laingsuk.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'cryptic-kingdom.png',
    title: 'Cryptic Kingdom',
    info: 'Cryptic Kingodm est un site vitrine promouvant l\'activité d\'une entreprise proposant des Escape Game. Le client, basé en Écosse, souhaité développé son activité sur internet par le biais d\'un site web.',
    info2: 'J\'ai été chargé d\'intégrer la totalité de la partie Front-End du site et la totalité de la partie Back-End et ce jusqu\'à la mise en production.',
    info3: 'Ce site a été fait pendant mon stage de fin d\'étude. Fait avec Wordpress.',
    url: 'https://www.cryptic-kingdom.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'compagnie-ati.png',
    title: 'Compagnie ATI',
    info: 'Compagnie Art Théatre Imaginaire est un site vitrine promouvant l\'activité d\'une compagnie de théâtre basée à La Rochelle qui propose des spectacles tout public de la petite enfance aux Ehpad, des performances loufoques, des vidéos atypiques et des ateliers de théâtre et de jeux burlesques ponctuels et hebdomadaires.',
    info2: 'Ce site a été fait durant mon année de Licence professionnelle, en collaboration avec un autre développeur et deux designers. Fait avec Wordpress.',
    url: 'https://compagnie-ati-theatre.fr/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'coral-islands.png',
    title: 'Coral Islands Research',
    info: 'Coral Islands Reasearch est un site qui présente des informations scientifiques sur la situation de nombreuses îles coralliennes qui se trouvent dans les océans Pacifique et Indien. Ce site a été construit à l\'initiative de chercheurs de l\'Université de La Rochelle qui travaillent sur les îles coralliennes.',
    info2: 'Ce site a été fait durant mon année de Licence professionnelle, en collaboration avec un autre développeur et deux designers. Fait avec Wordpress.',
    url: 'https://coral-islands-research.univ-larochelle.fr/',
    repo: '', // if no repo, the button will not show up
  }
];

// CONTACT DATA
export const contactData = {
  cta: 'Si vous êtes intéressé par mon profil et que vous souhaitez collaborer, cliquez sur le bouton qui suit !',
  btn: 'me contacter',
  email: 'nathan.leroux3@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/nahtanlr/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/nathan-lr/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/nathanLR',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
