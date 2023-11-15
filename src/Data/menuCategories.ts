type Category = {
  english: string;
  french: string;
  link?: string;
  isTitle?: boolean;
};

type CategoriesType = {
  english: string;
  french: string;
  id: number;
  submenu?: Category[];
}[];

export const menuCategories: CategoriesType = [
  {
    english: "ABOUT US",
    french: "ECOLE",
    id: 1,
    submenu: [
      {
        french: "POLYTECH LILLE, GRANDE ÉCOLE D'INGÉNIEURS UNIVERSITAIRE",
        english: "POLYTECH LILLE, UNIVERSITY ENGINEERING SCHOOL",
        isTitle: true,
      },
      {
        french: "Présentation de l'école",
        english: "School presentation",
        link: "/about-us/presentation",
      },
      {
        french: "Notre organisation",
        english: "Our organization",
        link: "/about-us/organization",
      },
      {
        french: "Notre campus",
        english: "Our campus",
        link: "/about-us/campus",
      },
      {
        french: "Le réseau des écoles Polytech",
        english: "The Polytech network",
        link: "/about-us/polytech-network",
      },
    ],
  },
  {
    english: "EDUCATION",
    french: "FORMATIONS",
    id: 2,
    submenu: [
      {
        french: "Ingénieur, c'est quoi ?",
        english: "What is an engineer?",
        link: "/education/what-is-an-engineer",
      },
      {
        french: "Polytech après le bac",
        english: "Polytech after the baccalaureate",
        link: "/education/polytech-after-the-baccalaureate",
      },
      {
        french: "Bac+2 : Cycle Ingénieur",
        english: "Bac+2: Engineering Cycle",
        link: "/education/engineering-cycle",
      },
      {
        french: "Spécialités d'ingénieur en apprentissage",
        english: "Engineering specialties in apprenticeship",
        link: "/education/engineering-specialties-in-apprenticeship",
      },
      {
        french: "Formation continue",
        english: "Continuing education",
        link: "/education/continuing-education",
      },
      {
        french: "Licences - Masters",
        english: "Licenses - Masters",
        link: "/education/licenses-masters",
      },
    ],
  },
  {
    english: "COMPANIES",
    french: "ENTREPRISES",
    id: 3,
  },
  {
    english: "RESEARCH",
    french: "RECHERCHE",
    id: 4,
  },
  {
    english: "INTERNATIONAL",
    french: "INTERNATIONAL",
    id: 5,
  },
  {
    english: "CAMPUS LIFE",
    french: "VIE DU CAMPUS",
    id: 6,
  },
  {
    english: "FRANCAIS",
    french: "ENGLISH",
    id: 7,
  },
];
