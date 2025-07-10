import React from 'react';
import PageHeader from '../components/PageHeader';
import SectionContainer from '../components/SectionContainer';
import { COMPANY_INFO, COLORS } from '../constants';
import type { CoreValue } from '../types';
import { CheckCircleIcon, LightBulbIcon, UsersIcon, ScaleIcon } from '../components/IconComponents';
import investmentImage from "../assets/images/aboutBg.jpg";
import consultancyImage from "../assets/images/consult.jpg";
import aboutImage from "../assets/images/about.jpg";

const coreValuesData: CoreValue[] = [
  { 
    icon: <CheckCircleIcon className={`w-8 h-8 text-${COLORS.brandGreen}`} />, 
    title: 'Transparency', 
    description: 'Anchored on the core value of transparency, Cloverdale is a trusted party for achieving financial goals.' 
  },
  { 
    icon: <LightBulbIcon className={`w-8 h-8 text-${COLORS.brandGreen}`} />, 
    title: 'Innovation', 
    description: 'We embrace innovation to provide cutting-edge financial solutions and reach self-actualization for our clients.' 
  },
  { 
    icon: <UsersIcon className={`w-8 h-8 text-${COLORS.brandGreen}`} />, 
    title: 'Customer Centricity', 
    description: 'Our focus is on customer centricity, ensuring services are tailored to individual needs.' 
  },
  { 
    icon: <ScaleIcon className={`w-8 h-8 text-${COLORS.brandGreen}`} />, 
    title: 'Integrity', 
    description: 'Integrity is paramount in all our operations, building trust and long-term relationships.' 
  },
];

const AboutPage: React.FC = () => {
  return (
		<>
			<PageHeader
				title='About Cloverdale Finance'
				subtitle='Your Surest Partner for a Wealthier Future.'
				imageSeed='corporate-building'
				image={investmentImage}
			/>

			<SectionContainer className={`bg-${COLORS.bgWhite}`}>
				<div className='grid md:grid-cols-2 gap-10 items-center'>
					<div>
						<h2
							className={`text-3xl font-bold text-${COLORS.brandDark} mb-4`}
						>
							Our Company
						</h2>
						<p
							className={`text-${COLORS.textSecondary} mb-4 leading-relaxed text-justify`}
						>
							Cloverdale Finance Company Limited is a Central Bank of Nigeria (CBN)- licensed Finance Company focused on providing innovative financial solutions to empower individual consumers, as well as industrial, commercial, and agricultural enterprises.
						</p>
						<img
							src={aboutImage}
							alt='Our Office'
							className='rounded-lg shadow-lg w-full mt-6'
						/>
					</div>
					<div className='space-y-8'>
						<div>
							<h3
								className={`text-2xl font-semibold text-${COLORS.brandDark} mb-2`}
							>
								Our Vision
							</h3>
							<p
								className={`text-${COLORS.textSecondary} leading-relaxed text-justify`}
							>
								{COMPANY_INFO.vision}
							</p>
						</div>
						<div>
							<h3
								className={`text-2xl font-semibold text-${COLORS.brandDark} mb-2`}
							>
								Our Mission
							</h3>
							<p
								className={`text-${COLORS.textSecondary} leading-relaxed text-justify`}
							>
								{COMPANY_INFO.mission}
							</p>
						</div>
					</div>
				</div>
			</SectionContainer>

			<SectionContainer
				className={`bg-${COLORS.bgLight}`}
				title='Bridging the Finance Gap'
			>
				<div className='grid md:grid-cols-2 gap-10 items-center'>
					<div className='prose prose-slate max-w-none'>
						<p className='text-justify'>
							The Finance Company function is a sub-sector
							of the Nigerian financial market envisioned to
							operate within the middle tier of the
							financial system, with a focus on the Micro,
							Small and Medium Enterprises (MSMEs) segment.
							This sector plays a complementary role to
							mainstream commercial banks, bridging
							financing gaps and meeting the financial needs
							of its target customers.
						</p>
						<p className='text-justify'>
							Cloverdale Finance Company Limited understands
							that Nigeria currently reports low levels of
							financial inclusion and credit penetration;
							therefore, the visionary leadership of the
							firm has identified this gap and strives to
							bridge the credit and investment cap with
							dynamic solutions that offer long-term value
							to clients.
						</p>
					</div>
					<div>
						<img
							src={consultancyImage}
							alt='Bridging the Finance Gap'
							className='rounded-lg shadow-xl w-full'
						/>
					</div>
				</div>
			</SectionContainer>

			<SectionContainer
				className={`bg-${COLORS.bgWhite}`}
				title='Our Core Values'
			>
				<div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-8'>
					{coreValuesData.map((value) => (
						<div
							key={value.title}
							className={`bg-${COLORS.bgLight} p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow`}
						>
							<div
								className={`flex items-center justify-center w-16 h-16 rounded-full bg-${COLORS.brandGreen} text-white mb-4 mx-auto`}
							>
								{React.cloneElement(
									value.icon as React.ReactElement<
										React.SVGProps<SVGSVGElement>
									>,
									{ className: "h-8 w-8" }
								)}
							</div>
							<h3
								className={`text-xl font-semibold text-center text-${COLORS.brandBlue} mb-2`}
							>
								{value.title}
							</h3>
							<p
								className={`text-sm text-${COLORS.textSecondary} text-center`}
							>
								{value.description}
							</p>
						</div>
					))}
				</div>
			</SectionContainer>
		</>
	);
};

export default AboutPage;
