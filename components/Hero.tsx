// Hero.tsx using Swiper.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { Link } from "react-router-dom";
import { COLORS } from "../constants";

import loanImage from "../assets/images/business.jpeg";
import businessImage from "../assets/images/business.jpg";
import investmentImage from "../assets/images/fund.jpg";
import debtImage from "../assets/images/debt.jpg";

import consultancyImage from "../assets/images/consult.jpg";





const slides = [
	{
		title: "Customer Loans",
		subtitle:
			"Cloverdale offers credit facilities that allow clients leverage their cashflow for big-ticket purchases.",
		ctaText: "Explore Our Services",
		ctaLink: "/services",
		imageUrl: loanImage,
	},
	{
		title: "Business Finance Solutions",
		subtitle:
			"We offer a range of solutions for MSMEs to manage working capital needs.",
		ctaText: "Learn More",
		ctaLink: "/about",
		imageUrl: businessImage,
	},
	{
		title: "Fund Management",
		subtitle:
			"Flexible savings and investment options with competitive returns.",
		ctaText: "Get Started",
		ctaLink: "/contact",
		imageUrl: investmentImage,
	},
	{
		title: "Debt Service",
		subtitle:
			"Credit solutions to help businesses manage debt exposure.",
		ctaText: "Get Started",
		ctaLink: "/contact",
		imageUrl: debtImage,
	},
	{
		title: "Consultancy",
		subtitle:
			"Financial consultancy for MSMEs to optimize cashflow and financial strategy.",
		ctaText: "Get Started",
		ctaLink: "/contact",
		imageUrl: consultancyImage,
	},
];

const Hero: React.FC = () => {
	return (
		<div className='relative w-full h-screen'>
			<Swiper
				modules={[Autoplay, EffectFade]}
				autoplay={{
					delay: 5000,
					disableOnInteraction: false,
				}}
				effect='fade'
				loop={true}
				speed={800}
				slidesPerView={1}
				className='h-full'
			>
				{slides.map((slide, index) => (
					<SwiperSlide key={index}>
						<div
							className='h-full w-full bg-cover bg-center relative flex items-center justify-center'
							style={{
								backgroundImage: `url(${slide.imageUrl})`,
							}}
						>
							<div
								className={`absolute inset-0 bg-${COLORS.brandDark} opacity-60`}
							/>
							<div className='z-10 text-center px-4 max-w-2xl'>
								<h1 className='text-4xl md:text-6xl font-bold text-white mb-6'>
									<span
										className={`text-${COLORS.brandAccentGreen}`}
									>
										{slide.title.split(" ")[0]}
									</span>{" "}
									{slide.title
										.split(" ")
										.slice(1)
										.join(" ")}
								</h1>
								<p className='text-white text-lg md:text-xl mb-6'>
									{slide.subtitle}
								</p>
								<Link
									to={slide.ctaLink}
									className={`px-6 py-3 bg-${COLORS.brandGreen} text-white rounded-lg text-sm font-semibold hover:bg-emerald-700 transition-all duration-300`}
								>
									{slide.ctaText}
								</Link>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Hero;
