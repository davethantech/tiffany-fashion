import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import SectionContainer from "../components/SectionContainer";
import { COLORS } from "../constants";
import { boardMembersData, leadershipData } from "@/components/LeadershipData";
import TeamCard from "../components/TeamCard";
import aboutImage from "../assets/images/aboutBg.jpg";

const ceo = leadershipData[0];
const otherLeaders = leadershipData.slice(1);
const boardMembers = boardMembersData;

const LeadershipPage: React.FC = () => {
	// const [activeIndex, setActiveIndex] = useState<
	// 	number | null
	// >(null);
	const [activeIndex, setActiveIndex] = useState<
		string | null
	>(null);


	return (
		<>
			<PageHeader
				title='Visionary Leadership'
				subtitle={`Meet our team`}
				imageSeed='leadership-team'
				image={aboutImage}
			/>

			{/* CEO Section */}
			<SectionContainer className={`bg-${COLORS.bgWhite}`}>
				<div className='max-w-6xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8'>
					<div className='prose prose-slate max-w-none lg:prose-lg'>
						<div
							className={`p-3 sm:p-4 md:p-8 lg:p-10 bg-${COLORS.bgLight} rounded-lg md:rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300`}
						>
							<div className='text-center md:text-left mb-4 md:mb-6'>
								<h3
									className={`text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-${COLORS.brandDark} mb-2`}
								>
									{ceo.name}
								</h3>
								<p
									className={`text-sm sm:text-base md:text-xl lg:text-2xl text-${COLORS.brandGreen} font-semibold`}
								>
									{ceo.role}
								</p>
							</div>
							<div className='space-y-3 sm:space-y-4 md:space-y-6'>
								{ceo.bio.map((paragraph, index) => (
									<p
										key={index}
										className='text-xs sm:text-sm md:text-lg lg:text-xl leading-relaxed text-justify'
									>
										{paragraph}
									</p>
								))}
							</div>
						</div>
					</div>
				</div>
			</SectionContainer>

			{/* Board Members Section */}
			<SectionContainer className={`bg-${COLORS.bgLight}`}>
				<h2
					className={`text-xl sm:text-2xl md:text-3xl font-bold text-${COLORS.brandDark} mb-6 sm:mb-8 text-center`}
				>
					Board Members
				</h2>
				<div className='w-full overflow-x-auto'>
					<div className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 items-start min-w-[320px]'>
						{boardMembers.map((member, index) => (
							<TeamCard
								key={member.name}
								member={member}
								index={`board-${index}`}
								activeIndex={activeIndex}
								setActiveIndex={setActiveIndex}
							/>
						))}
					</div>
				</div>
			</SectionContainer>

			{/* Our Team Section */}
			<SectionContainer className={`bg-${COLORS.bgLight}`}>
				<h2
					className={`text-xl sm:text-2xl md:text-3xl font-bold text-${COLORS.brandDark} mb-6 sm:mb-8 text-center`}
				>
					Our Team
				</h2>
				<div className='w-full overflow-x-auto'>
					<div className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 items-start min-w-[320px]'>
						{otherLeaders.map((member, index) => (
							<TeamCard
								key={member.name}
								member={member}
								index={`team-${index}`}
								activeIndex={activeIndex}
								setActiveIndex={setActiveIndex}
							/>
						))}
					</div>
				</div>
			</SectionContainer>

			<SectionContainer className={`bg-${COLORS.bgLight}`}>
				<div className='text-center max-w-3xl mx-auto px-2 sm:px-4'>
					<h2
						className={`text-lg sm:text-2xl md:text-3xl font-bold text-${COLORS.brandDark} mb-3 sm:mb-4`}
					>
						Our Commitment to Excellence
					</h2>
					<p
						className={`text-xs sm:text-base md:text-lg text-${COLORS.textSecondary} leading-relaxed text-justify`}
					>
						At Cloverdale Finance, our leadership is dedicated to upholding the highest standards of financial service, innovation, and integrity. We are committed to driving sustainable growth and creating lasting value for our clients, stakeholders, and the community. Our strategic direction is focused on navigating the complexities of the financial landscape to deliver solutions that empower and secure your financial future.
					</p>
				</div>
			</SectionContainer>
		</>
	);
};

export default LeadershipPage;
