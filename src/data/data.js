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
		icon: "html-5-icon",
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
		icon: "react-router",
		level: 3,
	},
	{
		id: "sass",
		name: "SASS",
		icon: "sass",
		level: 3,
	},
];

export const COURSES = [
	{
		id: "course1",
		name: "Front-End Engineer Career Path",
		institute: "Codecademy",
		year: 2024,
		certificate:
			"https://www.codecademy.com/profiles/ellenevdm/certificates/2682884a0719474f96407efe432fdd87",
	},
	{
		id: "course2",
		name: "React - The Complete Guide",
		institute: "Udemy",
		year: 2024,
		certificate:
			"https://www.udemy.com/certificate/UC-cfc64e46-8059-42a0-99c4-8773c4a12772/",
	},
];

// Project page data

export const PROJECTS = [
	{
		id: "proj1",
		key: "1",
		name: "Pawfectly Pampered",
		description:
			'Merging my passion for pets with front-end development, I created a captivating online hub for "Pawfectly Pampered," uniting aesthetics with function.',
		technologies: ["CSS", "HTML5"],
		link: "https://pawfectly-pampered.netlify.app/",
		image: "pawfectlypampered",
		responsive: true,
	},
	{
		id: "proj2",
		key: "2",
		name: "Jammming",
		description: "playlist creator for spotify",
		technologies: ["CSS", "REACT"],
		link: "https://evdmjammmingapp.netlify.app/",
		image: "jammming",
		responsive: false,
	},
	{
		id: "proj3",
		key: "3",
		name: "Readit-Hub",
		description: "reddit clone simplified version",
		technologies: ["BOOTSTRAP", "REACT", "REDUX"],
		link: "https://readit-hub.netlify.app/",
		image: "readitHub",
		responsive: true,
	},
];
