
import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO, NAV_ITEMS, COLORS } from '../constants';
import { MailIcon, PhoneIcon, LocationMarkerIcon } from './IconComponents';
import logo from '../assets/images/logo.png';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
		<footer
			className={`bg-${COLORS.footerBg} text-gray-300 pt-12 pb-8`}
		>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8'>
					{/* Column 1: Logo and About */}
					{/* Column 1: Logo and About */}
					<div>
						<Link to='/' className='inline-block mb-3'>
							<img
								src={logo}
								alt='Cloverdale Finance Logo'
								className='h-10 w-auto'
							/>
						</Link>
						<p className='text-sm text-gray-400 mb-4'>
							{COMPANY_INFO.tagline} Providing innovative
							finance solutions to empower individuals and
							enterprises.
						</p>
					</div>

					{/* Column 2: Quick Links */}
					<div>
						<h4 className='text-lg font-semibold text-white mb-4'>
							Quick Links
						</h4>
						<ul className='space-y-2'>
							{NAV_ITEMS.map((item) => (
								<li key={item.label}>
									<Link
										to={item.path}
										className={`hover:text-${COLORS.brandAccentGreen} transition-colors duration-150 text-sm`}
									>
										{item.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Column 3: Contact Info */}
					<div className='md:col-span-2 lg:col-span-1'>
						<h4 className='text-lg font-semibold text-white mb-4'>
							Contact Us
						</h4>
						<ul className='space-y-3 text-sm'>
							<li className='flex items-center'>
								<LocationMarkerIcon
									className={`w-5 h-5 mr-3 mt-1 text-${COLORS.brandAccentGreen} flex-shrink-0`}
								/>
								<span>{COMPANY_INFO.address}</span>
							</li>
							<li className='flex items-center'>
								<MailIcon
									className={`w-5 h-5 mr-3 text-${COLORS.brandAccentGreen} flex-shrink-0`}
								/>
								<a
									href={`mailto:${COMPANY_INFO.contactEmail}`}
									className={`hover:text-${COLORS.brandAccentGreen} transition-colors duration-150`}
								>
									{COMPANY_INFO.contactEmail}
								</a>
							</li>
							{COMPANY_INFO.phoneNumbers.map((phone) => (
								<li
									key={phone}
									className='flex items-center'
								>
									<PhoneIcon
										className={`w-5 h-5 mr-3 text-${COLORS.brandAccentGreen} flex-shrink-0`}
									/>
									<a
										href={`tel:${phone.replace(/\s/g, "")}`}
										className={`hover:text-${COLORS.brandAccentGreen} transition-colors duration-150`}
									>
										{phone}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Column 4: Newsletter (Placeholder) */}
					{/* <div>
						<h4 className='text-lg font-semibold text-white mb-4'>
							Stay Updated
						</h4>
						<p className='text-sm text-gray-400 mb-3'>
							Subscribe to our newsletter for latest
							updates.
						</p>
						<form
							onSubmit={(e) => e.preventDefault()}
							className='flex'
						>
							<input
								type='email'
								placeholder='Enter your email'
								className='w-full px-3 py-2 text-sm text-gray-800 rounded-l-md focus:ring-2 focus:ring-emerald-500 focus:outline-none'
							/>
							<button
								type='submit'
								className={`bg-${COLORS.brandGreen} text-white px-4 py-2 rounded-r-md hover:bg-emerald-700 transition-colors duration-150 text-sm`}
							>
								Subscribe
							</button>
						</form>
					</div> */}
				</div>

				<div className='border-t border-gray-700 pt-8 mt-8 text-center text-sm text-gray-400'>
					<p>
						&copy; {currentYear} {COMPANY_INFO.name}. All
						Rights Reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
