//Navigation data
export const NAVLINKS = [
  {
    id: 1,
    name: "HOME",
    path: "/",
    className: "nav-link",
  },
  {
    id: 2,
    name: "ABOUT",
    path: "/about",
    className: "nav-link",
  },
  {
    id: 3,
    name: "PROJECTS",
    path: "/projects",
    className: "nav-link",
  },
];

//Hangman data

export const HANGMANDATA = {
  WORDS: [
    "DEBUGGING",
    "JAVASCRIPT",
    "DYNAMIC",
    "REACT",
    "FRONTEND",
    "STATE",
    "PROPS",
    "GRID",
    "FLEX",
    "HTML",
    "COMPONENT",
    "ROUTER",
    "RENDER",
    "ACTION",
    "REDUX",
    "JAVASCRIPT",
    "REDUCER",
    "PROPERTY",
    "HYPERTEXT",
    "CASCADE",
  ],
  ALPHABET: [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ],
};

//About page data

export const SKILLS = [
  {
    id: "html",
    name: "HTML5",
    icon: "html",
    level: 5,
  },
  {
    id: "css",
    name: "CSS3",
    icon: "css",
    level: 5,
  },
  {
    id: "git",
    name: "GIT",
    icon: "git",
    level: 3,
  },
  {
    id: "github",
    name: "GITHUB",
    icon: "github",
    level: 3,
  },
  {
    id: "react",
    name: "REACT",
    icon: "react",
    level: 5,
  },
  {
    id: "redux",
    name: "REDUX",
    icon: "redux",
    level: 3,
  },
  {
    id: "javascript",
    name: "JAVASCRIPT",
    icon: "javascript",
    level: 3,
  },
  {
    id: "Bootstrap",
    name: "BOOTSTRAP",
    icon: "bootstrap",
    level: 3,
  },
  {
    id: "router",
    name: "REACT ROUTER",
    icon: "router",
    level: 3,
  },
  {
    id: "sass",
    name: "SASS",
    icon: "sass",
    level: 3,
  },
  {
    id: "typescript",
    name: "TYPESCRIPT",
    icon: "typescript",
  },
];

export const COURSES = [
  {
    id: "course3",
    name: "Vue - The Complete Guide",
    institute: "Udemy",
    icon: "simple-icons:udemy",
    completed: false,
    year: "...",
    certificate: null,
  },
  {
    id: "course5",
    name: "React & Typescript - The Practical Guide",
    institute: "Udemy",
    icon: "simple-icons:udemy",
    completed: true,
    year: 2024,
    certificate:
      "https://www.udemy.com/certificate/UC-49f7272f-ec51-49be-8354-d274858639a8/",
  },
  {
    id: "course2",
    name: "React - The Complete Guide",
    institute: "Udemy",
    icon: "simple-icons:udemy",
    completed: true,
    year: 2024,
    certificate:
      "https://www.udemy.com/certificate/UC-cfc64e46-8059-42a0-99c4-8773c4a12772/",
  },
  {
    id: "course1",
    name: "Front-End Engineer Career Path",
    institute: "Codecademy",
    icon: "simple-icons:codecademy",
    completed: true,
    year: 2024,
    certificate:
      "https://www.codecademy.com/profiles/ellenevdm/certificates/2682884a0719474f96407efe432fdd87",
  },
  {
    id: "degree1",
    name: "BCom Business Management",
    institute: "Prestige Academy (STADIO)",
    icon: "icon-park-outline:degree-hat",
    completed: true,
    year: 2020,
    certificate: null,
  },
  {
    id: "course4",
    name: "Feature Writing",
    institute: "GetSmarter",
    icon: "icon-park-outline:certificate",
    completed: true,
    year: 2017,
    certificate: null,
  },
];

export const SOCIALS = [
  {
    id: "s1",
    platform: "email",
    label: "Email",
    info: "ellene.vdMeijden@gmail.com",
    link: "mailto: ellenevdmeijden@gmail.com",
  },
  {
    id: "s2",
    platform: "whatsapp",
    label: "Whatsapp",
    info: "0662465655",
    link: "https://wa.me/27662465655",
  },
  {
    id: "s3",
    platform: "linkedin",
    label: "LinkedIn",
    info: "www.linkedin.com/in/ellene-van-der-meijden",
    link: "https://www.linkedin.com/in/ellene-van-der-meijden/",
  },
  {
    id: "s4",
    platform: "github",
    label: "GitHub",
    info: "www.github.com/ellenevdm",
    link: "https://github.com/ellenevdm",
  },
];

export const LISTS = [
  {
    id: "goals",
    key: "1",
    title: "Goals",
    icon: "mdi:target-arrow",
    content: [
      "Learn Vue.js",
      "Learn React Native",
      "Learn Typescript",
      "Learn Next.js",
      "Learn Nuxt.js",
    ],
  },
  {
    id: "values",
    key: "2",

    title: "Values",
    icon: "mdi:compass-rose",
    content: ["Respect", "Honesty", "Authenticity"],
  },
  {
    id: "hobbies",
    key: "3",

    title: "Interests",
    icon: "mdi:heart",
    content: ["Outdoors", "Animals", "Travelling", "Baking"],
  },
];

// Project page data

// export const PROJECTS = [
//   {
//     id: "proj1",
//     key: "1",
//     name: "Pawfectly Pampered",
//     description:
//       'Merging my passion for pets with front-end development, I created a captivating online hub for "Pawfectly Pampered," uniting aesthetics with function.',
//     technologies: ["CSS", "HTML5"],
//     link: "https://pawfectly-pampered.netlify.app/",
//     imageResp: "pawResp",
//     imageMock: "pawMock",
//     responsive: true,
//   },
//   {
//     id: "proj2",
//     key: "2",
//     name: "Jammming",
//     description: "playlist creator for spotify",
//     technologies: ["CSS", "REACT"],
//     link: "https://evdmjammmingapp.netlify.app/",
//     imageMock: "jamMock",
//     imageResp: "jamMock",
//     responsive: false,
//   },
//   {
//     id: "proj3",
//     key: "3",
//     name: "Readit-Hub",
//     description: "reddit clone simplified version",
//     technologies: ["BOOTSTRAP", "REACT", "REDUX"],
//     link: "https://readit-hub.netlify.app/",
//     imageMock: "readMock",
//     imageResp: "readResp",
//     responsive: true,
//   },
// ];
