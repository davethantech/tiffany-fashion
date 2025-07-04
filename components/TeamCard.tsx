import React from "react";
import { COLORS } from "../constants";
import type { TeamMember } from "../types";

interface TeamCardProps {
	member: TeamMember;
	index: string;
	activeIndex: string | null;
	setActiveIndex: (index: string | null) => void;
}

const TeamCard: React.FC<TeamCardProps> = ({
	member,
	index,
	activeIndex,
	setActiveIndex,
}) => {
	const isExpanded = activeIndex === index;

	const toggleExpand = () => {
		setActiveIndex(isExpanded ? null : index);
	};

	return (
		// The parent div's height will now naturally adjust for expanded content
		// Removed fixed height constraints from the outer card itself
		<div
			className={`bg-${COLORS.bgWhite} rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center p-4`}
		>
			{/* <img
				src={member.image}
				alt={member.name}
				className='rounded-full w-24 h-24 mb-3 object-cover border-4 border-white shadow'
			/> */}
			<h3
				className={`text-lg font-semibold text-${COLORS.brandDark} mb-1`}
			>
				{member.name}
			</h3>
			<p
				className={`text-sm text-${COLORS.brandGreen} mb-2`}
			>
				{member.role}
			</p>

			{/* Collapsible Bio Container */}
			<div className='w-full relative'>
				{/* We control the max-height of the bio content itself.
                    When not expanded, we limit its height and add an ellipsis.
                    When expanded, we let it take its natural height (max-h-full or a very large max-h).
                */}
				<div
					className={`text-sm text-gray-700 text-justify overflow-hidden transition-all duration-500 ease-in-out ${
						isExpanded ? "max-h-full" : "max-h-[80px]" // Use max-h-full for natural height when expanded
					}`}
				>
					{isExpanded ? (
						member.bio.map((paragraph, idx) => (
							<p key={idx} className="pr-2 text-justify mb-2 last:mb-0">
								{paragraph}
							</p>
						))
					) : (
						<p className="pr-2 text-justify">
							{member.bio[0].slice(0, 120) +
								(member.bio[0].length > 120 ? "..." : "")}
						</p>
					)}
				</div>
				{/* Only show "Read More" if the bio is actually longer than the truncated version.
                    You might want to add a condition here to only show the button
                    if member.bio[0].length > 120 or if member.bio.length > 1.
                */}
				<button
					onClick={toggleExpand}
					className='text-xs text-indigo-600 hover:underline mt-2 focus:outline-none'
				>
					{isExpanded ? "Show Less" : "Read More"}
				</button>
			</div>
		</div>
	);
};

export default TeamCard;
