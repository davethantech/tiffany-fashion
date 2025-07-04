import React from "react";
import Hero from "../components/Hero";
import SectionContainer from "../components/SectionContainer";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import {COLORS } from "../constants";
import type { CoreValue, Service } from "../types";
import {
	LightBulbIcon,
	UsersIcon,
	ScaleIcon,
	CheckCircleIcon,
	BriefcaseIcon,
	CurrencyDollarIcon,
	ChartBarIcon,
} from "../components/IconComponents";
import aboutImage from "../assets/images/about.jpg";
import africaImage from "../assets/images/africa.jpg";
import moneyImage from "../assets/images/money.png";

const coreValuesData: CoreValue[] = [
	{
		icon: <CheckCircleIcon />,
		title: "Transparency",
		description:
			"Operating with openness and clarity in all our dealings.",
	},
	{
		icon: <LightBulbIcon />,
		title: "Innovation",
		description:
			"Continuously seeking creative solutions to meet evolving financial needs.",
	},
	{
		icon: <UsersIcon />,
		title: "Customer Centricity",
		description:
			"Placing our customers at the heart of everything we do.",
	},
	{
		icon: <ScaleIcon />,
		title: "Integrity",
		description:
			"Upholding the highest ethical standards in our business practices.",
	},
];

const featuredServices: Pick<
	Service,
	"id" | "title" | "description" | "icon"
>[] = [
	{
		id: "consumer-loans",
		title: "Consumer Loans",
		description:
			"Flexible loan options for personal needs and big-ticket purchases.",
		icon: <CurrencyDollarIcon />,
	},
	{
		id: "business-finance",
		title: "Business Finance",
		description:
			"Tailored financial solutions to support MSME growth and working capital.",
		icon: <BriefcaseIcon />,
	},
	{
		id: "fund-management",
		title: "Fund Management",
		description:
			"Expert management of your investments for optimal returns.",
		icon: <ChartBarIcon />,
	},
];

const HomePage: React.FC = () => {
	return (
		<>
			<Hero />
			{/* About Us Snippet Section */}
			<SectionContainer className={`bg-${COLORS.bgWhite}`}>
				<div className='grid md:grid-cols-2 gap-12 items-center'>
					<div>
						<h2
							className={`text-3xl font-bold text-${COLORS.brandDark} mb-4`}
						>
							About Cloverdale Finance
						</h2>
						<p
							className={`text-${COLORS.textSecondary} mb-4 leading-relaxed text-justify`}
						>
							Cloverdale Finance Company Limited is a
							Central Bank of Nigeria (CBN) licensed Finance
							Company focused on providing innovative
							finance solutions to empower individual
							consumers, industrial, commercial, or
							agricultural enterprises.
						</p>
						<p
							className={`text-${COLORS.textSecondary} mb-6 leading-relaxed text-justify`}
						>
							We are dedicated to bridging the financial gap
							and fostering economic growth by offering
							accessible and transformative financial
							services.
						</p>
						<Link
							to='/about'
							className={`inline-block px-6 py-3 bg-${COLORS.brandGreen} text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors duration-300 shadow-md`}
						>
							Learn More About Us
						</Link>
					</div>
					<div>
						<img
							src={moneyImage}
							alt='About Cloverdale Finance'
							className='rounded-lg shadow-xl w-full'
						/>
					</div>
				</div>
			</SectionContainer>

			{/* Core Values Section */}
			<SectionContainer
				className={`bg-${COLORS.bgLight}`}
				title='Our Core Values'
				subtitle='The principles that guide our commitment to you.'
			>
				<div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-8'>
					{coreValuesData.map((value) => (
						<Card
							key={value.title}
							icon={value.icon}
							title={value.title}
							description={value.description}
							iconWrapperClassName={`mb-4 inline-flex items-center justify-center p-4 rounded-full bg-${COLORS.brandAccentGreen} text-${COLORS.brandDark}`}
							titleClassName={`text-xl font-semibold text-${COLORS.brandBlue} mb-2 text-center`}
							descriptionClassName={`text-sm text-${COLORS.textSecondary} text-center`}
							className='text-center items-center'
						/>
					))}
				</div>
			</SectionContainer>

			{/* Featured Services Section */}
			<SectionContainer
				className={`bg-${COLORS.bgWhite}`}
				title='Our Key Services'
				subtitle='Financial solutions tailored to your unique needs.'
			>
				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{featuredServices.map((service) => (
						<Card
							key={service.id}
							icon={service.icon}
							title={service.title}
							description={service.description}
							className={`border-t-4 border-${COLORS.brandGreen}`}
						/>
					))}
				</div>
				<div className='text-center mt-12'>
					<Link
						to='/services'
						className={`px-8 py-3 bg-${COLORS.brandBlue} text-white font-semibold rounded-lg hover:bg-indigo-800 transition-colors duration-300 shadow-md`}
					>
						View All Services
					</Link>
				</div>
			</SectionContainer>

			{/* Call to Action Section */}
			<SectionContainer
				className={`bg-${COLORS.brandDark} text-white`}
			>
				<div
					className='relative bg-cover bg-center py-20 rounded-lg shadow-2xl'
					style={{
						backgroundImage: `url(${africaImage})`,
					}}
				>
					<div
						className={`absolute inset-0 bg-${COLORS.brandDark} opacity-70 rounded-lg`}
					></div>
					<div className='relative z-10 text-center max-w-3xl mx-auto'>
						<h2 className='text-3xl md:text-4xl font-bold mb-6'>
							Ready to achieve your financial goals?
						</h2>
						<p className='text-lg text-gray-300 mb-8'>
							Let Cloverdale Finance be your trusted
							partner. Contact us today for personalized
							financial solutions.
						</p>
						<Link
							to='/contact'
							className={`px-10 py-4 bg-${COLORS.brandAccentGreen} text-${COLORS.brandDark} text-lg font-bold rounded-lg hover:bg-lime-500 transition-colors duration-300 shadow-lg`}
						>
							Get in Touch
						</Link>
					</div>
				</div>
			</SectionContainer>
		</>
	);
};

export default HomePage;
