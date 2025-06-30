import { COMPANY_INFO } from "@/constants";
import { TeamMember } from "@/types";

import ceoImage from "../assets/images/edoja.jpg";
import micheal from "../assets/images/Profile Icon.png";
import opara from "../assets/images/wini.jpg";
import kotun from "../assets/images/simi.jpg";
import agnes from "../assets/images/agnes.png";

export const leadershipData: TeamMember[] = [
	{
		name: COMPANY_INFO.ceoName,
		role: "MD/CEO",
		image: ceoImage,
		bio: [
			"Under the pioneering leadership of the MD/CEO, Mr. Abubakar Bello, Cloverdale Finance Company Limited is positioned to support under-served markets with innovative solutions structured with the unique needs of the client in mind — underpinned by world-class risk management and regulatory compliance.",
			"Mr. Abubakar Bello is a strategic finance executive specializing in Financial Management, Risk Assessment, and Policy Formulation with over 19 years of experience in Banking and Financial Services. He spent 14 years at Zenith Bank, where he held key leadership roles and gained extensive expertise in commercial banking, credit analysis, and operational efficiency.",
			"He also served as Managing Director/CEO of Lighthouse Finance Company Limited for 3.5 years, leading the company’s growth through strategic planning, financial structuring, and regulatory compliance.",
			"Mr. Abubakar Bello is a chartered accountant with a Bachelor's degree and an MBA. He has a strong track record in developing and implementing financial policies, corporate governance frameworks, and business strategies that drive growth and sustainability.",
		],
	},
	{
		name: "Michael Eduje",
		role: "Branch Manager",
		image: micheal,
		bio: [
			"Michael Eduje is the Branch Manager at Cloverdale Financial Services. He brings over 8 years of banking experience and more than 15 years in sales, marketing, and customer relations, with expertise spanning both FMCG and financial services.",
			"He is a graduate of Public Administration from the University of Abuja and has undergone several professional trainings in customer service, sales and marketing, customer interactions, and human resource management.",
			"Throughout his career, Michael has worked with numerous corporate organizations, acquiring a wealth of experience that drives his enthusiasm and self-motivation to achieve set goals.",
			"He has held a variety of leadership roles including Administrative Officer, Operations Manager, Human Resources Manager, and Team Lead.",
			"Michael is a passionate team player and a result-oriented achiever committed to elevating Cloverdale to greater heights.",
		],
	},
	{
		name: "Opara Winifred",
		role: "Marketing Executive",
		image: opara,
		bio: [
			"Winifred is a highly motivated and dedicated individual with strong communication and interpersonal skills.",
			"She is a graduate of Financial Management Technology from the Federal University of Technology, Owerri, and has received additional training in Human Resources and Health, Safety and Environment (HSE).",
			"With over 5 years of professional experience, Winifred has worked as a Liaison Officer and Administrative Officer in a reputable corporate organization, gaining valuable skills that enable her to strategically align with organizational goals.",
			"Currently serving as a Marketing Executive at Cloverdale Finance Company Ltd, she brings energy, strategic thinking, and teamwork to the company's marketing efforts.",
			"Winifred is a valuable team member committed to driving Cloverdale to greater heights.",
		],
	},

	{
		name: "Kotun Simiat",
		role: "Marketing Executive",
		image: kotun,
		bio: [
			"Kotun Simiat is a highly motivated and strategic marketing professional with a bachelor’s degree in Marketing.",
			"She possesses a solid foundation in program assistance and human resources, effectively bridging the gap between marketing initiatives and organizational goals.",
			"Kotun is proficient in driving business growth and fostering a positive work culture. Her experience in supporting program implementation and managing HR functions allows her to create meaningful connections within the team and enhance overall productivity.",
			"As a skilled Marketing Executive at Cloverdale Finance Company, she is known for her strategic approach and innovative mindset.",
			"She is passionate about leveraging her diverse background to contribute to the success of Cloverdale Finance and remains committed to continuous learning and growth in her marketing career.",
		],
	},
	{
		name: "Atamah Ayobukunola Agnes",
		role: "Executive Assistant",
		image: agnes,
		bio: [
			"Ayobukunola is a dedicated and versatile professional with a Bachelor of Science in Social Work and additional qualifications in Product Design and Mental Health.",
			"With experience in administrative work, she combines her skills to help the organization run smoothly while providing great care to clients.",
			"She effectively manages various administrative tasks and front desk operations, ensuring seamless communication within the company and a welcoming experience for visitors.",
			"Ayobukunola also applies her creativity to maintain Cloverdale’s online presence by creating engaging content that resonates with the audience and supports the company’s mission.",
			"She is passionate about delivering excellence, supporting the company’s vision through effective assistance, fostering a positive work environment, and connecting meaningfully through social media.",
			"Ayobukunola is a professional in discharging her duties and is deeply committed to ensuring Cloverdale achieves its goals.",
		],
	},
];
