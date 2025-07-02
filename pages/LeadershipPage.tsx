import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import SectionContainer from "../components/SectionContainer";
import { COLORS } from "../constants";
import { boardMembersData, leadershipData } from "@/components/LeadershipData";
import TeamCard from "../components/TeamCard";
import aboutImage from "../assets/images/aboutBg.jpg";

// const ceo = leadershipData[0];
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
			{/* <SectionContainer className={`bg-${COLORS.bgWhite}`}>
				<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='prose prose-slate max-w-none lg:prose-lg'>
						<h2
							className={`text-2xl sm:text-3xl md:text-4xl font-bold text-${COLORS.brandBlue} mb-4 sm:mb-6 text-center md:text-left`}
						>
							Message from the MD/CEO
						</h2>
						<div
							className={`p-4 sm:p-6 md:p-8 lg:p-10 bg-${COLORS.bgLight} rounded-lg md:rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300`}
						>
							<div className='text-center md:text-left mb-4 md:mb-6'>
								<h3
									className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-${COLORS.brandBlue} mb-2`}
								>
									{ceo.name}
								</h3>
								<p
									className={`text-base sm:text-lg md:text-xl lg:text-2xl text-${COLORS.brandGreen} font-semibold`}
								>
									{ceo.role}
								</p>
							</div>
							<div className='space-y-4 md:space-y-6'>
								{ceo.bio.map((paragraph, index) => (
									<p
										key={index}
										className='text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-justify md:text-left'
									>
										{paragraph}
									</p>
								))}
							</div>
						</div>
					</div>
				</div>
			</SectionContainer> */}

			{/* Management Team Section */}
			<SectionContainer className={`bg-${COLORS.bgLight}`}>
				<h2
					className={`text-3xl font-bold text-${COLORS.brandDark} mb-8 text-center`}
				>
					Board Members
				</h2>
				<div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start'>
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
			</SectionContainer>

			{/* Management Team Section */}
			<SectionContainer className={`bg-${COLORS.bgLight}`}>
				<h2
					className={`text-3xl font-bold text-${COLORS.brandDark} mb-8 text-center`}
				>
					Our Team
				</h2>
				<div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start'>
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
			</SectionContainer>

			<SectionContainer className={`bg-${COLORS.bgLight}`}>
				<div className='text-center max-w-3xl mx-auto'>
					<h2
						className={`text-2xl md:text-3xl font-bold text-${COLORS.brandDark} mb-4`}
					>
						Our Commitment to Excellence
					</h2>
					<p
						className={`text-${COLORS.textSecondary} leading-relaxed text-justify`}
					>
						At Cloverdale Finance, our leadership is
						dedicated to upholding the highest standards of
						financial service, innovation, and integrity. We
						are committed to driving sustainable growth and
						creating lasting value for our clients,
						stakeholders, and the community. Our strategic
						direction is focused on navigating the
						complexities of the financial landscape to
						deliver solutions that empower and secure your
						financial future.
					</p>
				</div>
			</SectionContainer>
		</>
	);
};

export default LeadershipPage;
