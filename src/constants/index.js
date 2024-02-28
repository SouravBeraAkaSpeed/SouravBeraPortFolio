import { nextechIcon, techvibeIcon, techSolutionsIcon } from "../assets/images";
import {
	car,
	contact,
	css,
	estate,
	express,
	git,
	github,
	html,
	javascript,
	linkedin,
	mongodb,
	motion,
	mui,
	nextjs,
	nodejs,
	pricewise,
	react,
	redux,
	sass,
	snapgram,
	summiz,
	tailwindcss,
	threads,
	typescript,
	python,
	pytorch,
	reactNative,
	AiCompanion,
	notion,
} from "../assets/icons";

export const skills = [
	{
		imageUrl: css,
		name: "CSS",
		type: "Frontend",
	},
	{
		imageUrl: express,
		name: "Express",
		type: "Backend",
	},
	{
		imageUrl: git,
		name: "Git",
		type: "Version Control",
	},
	{
		imageUrl: pytorch,
		name: "Pytorch",
		type: "Machine Learning",
	},
	{
		imageUrl: github,
		name: "GitHub",
		type: "Version Control",
	},
	{
		imageUrl: html,
		name: "HTML",
		type: "Frontend",
	},
	{
		imageUrl: reactNative,
		name: "React Native",
		type: "App Developement",
	},
	{
		imageUrl: javascript,
		name: "JavaScript",
		type: "Frontend",
	},
	{
		imageUrl: mongodb,
		name: "MongoDB",
		type: "Database",
	},
	{
		imageUrl: motion,
		name: "Motion",
		type: "Animation",
	},
	{
		imageUrl: mui,
		name: "Material-UI",
		type: "Frontend",
	},
	{
		imageUrl: nextjs,
		name: "Next.js",
		type: "Frontend",
	},
	{
		imageUrl: nodejs,
		name: "Node.js",
		type: "Backend",
	},
	{
		imageUrl: react,
		name: "React",
		type: "Frontend",
	},
	{
		imageUrl: redux,
		name: "Redux",
		type: "State Management",
	},
	{
		imageUrl: sass,
		name: "Sass",
		type: "Frontend",
	},
	{
		imageUrl: tailwindcss,
		name: "Tailwind CSS",
		type: "Frontend",
	},
	{
		imageUrl: typescript,
		name: "TypeScript",
		type: "Frontend",
	},
	{
		imageUrl: python,
		name: "Python",
		type: "Backend , Automation and Ai/Ml",
	},
];

export const experiences = [
	{
		title: "Full Stack Developer",
		company_name: "Tech Solutions Inc.",
		icon: techSolutionsIcon,
		iconBg: "#e3e3e3",
		date: "January 2019 - May 2020",
		points: [
			"Building responsive web applications using React.js, Next.js, and Tailwind CSS.",
			"Designing and developing RESTful APIs using Node.js and Express for backend services.",
			"Implementing state management using Redux to maintain application state efficiently.",
			"Collaborating closely with UI/UX designers to ensure seamless integration of design elements.",
		],
	},
	{
		title: "Machine Learning Engineer",
		company_name: "NexTech Solutions",
		icon: nextechIcon,
		iconBg: "#f4c542",
		date: "June 2020 - Feb 2022",
		points: [
			"Developing and implementing machine learning models using Pytorch and Python for various AI-driven projects.",
			"Collaborating with a diverse team of data scientists and engineers to optimize AI algorithms and improve model performance.",
			"Utilizing MongoDB for efficient data storage and retrieval processes.",
			"Conducting regular code reviews and contributing to the development of best practices within the team.",
		],
	},
	{
		title: "Full Stack Developer",
		company_name: "TechVibe Innovations",
		icon: techvibeIcon,
		iconBg: "#e3e3e3",
		date: "Feb 2022 - Dec 2023",
		points: [
			"Building responsive web applications using React.js, Next.js, and Tailwind CSS.",
			"Designing and developing RESTful APIs using Node.js and Express for backend services.",
			"Implementing state management using Redux to maintain application state efficiently.",
			"Collaborating closely with UI/UX designers to ensure seamless integration of design elements.",
		],
	},
];

export const socialLinks = [
	{
		name: "Contact",
		iconUrl: contact,
		link: "/contact",
	},
	{
		name: "GitHub",
		iconUrl: github,
		link: "https://github.com/SouravBeraAkaSpeed",
	},
	{
		name: "LinkedIn",
		iconUrl: linkedin,
		link: "https://www.linkedin.com/in/sourav-bera-17a5011b9",
	},
];

export const projects = [
	{
		iconUrl: AiCompanion,
		theme: "btn-back-red",
		name: "An advanced SaaS AI Companion",
		description:
			"Our AI Companion taps into the power of embeddings and the Pinecone vector database to ensure long-term memory retention, supplemented by the fast caching abilities of the Upstash Redis database. We will also use MySQL and Prisma for storing companions.",
		link: "https://github.com/SouravBeraAkaSpeed/Ai_Companion",
	},
	{
		iconUrl: threads,
		theme: "btn-back-green",
		name: "Full Stack Threads Clone",
		description:
			'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
		link: "https://github.com/SouravBeraAkaSpeed/threads",
	},
	{
		iconUrl: notion,
		theme: "btn-back-black",
		name: "Full Stack Notion Clone",
		description:
			"Built a complete clone of Notion, it empowers users with tools for note-taking, task management, and collaboration. Through its customizable pages and content blocks, users can create structured content tailored to their needs.",
		link: "https://github.com/SouravBeraAkaSpeed/Notion",
	},
	{
		iconUrl: summiz,
		theme: "btn-back-yellow",
		name: "AI Summarizer Application",
		description:
			"App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.",
		link: "https://github.com/SouravBeraAkaSpeed/Ai_summarizer",
	},
];
