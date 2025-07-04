import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import SectionContainer from '../components/SectionContainer';
import { COMPANY_INFO, COLORS } from '../constants';
import { MailIcon, PhoneIcon, LocationMarkerIcon } from '../components/IconComponents';
import emailjs from "emailjs-com";
import aboutImage from "../assets/images/aboutBg.jpg";




const ContactPage: React.FC = () => {
	
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement
		>
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (
		e: React.FormEvent<HTMLFormElement>
	) => {
		e.preventDefault();

		if (
			formData.name &&
			formData.email &&
			formData.subject &&
			formData.message
		) {
			emailjs
				.send(
					"service_ih3p15d",
					"template_pqp1rqq",
					{
						from_name: formData.name,
						from_email: formData.email,
						subject: formData.subject,
						message: formData.message,
					},
					"SyXgGYvWFsPoJY212"
				)
				.then(() => {
					setIsSubmitted(true);
					setFormData({
						name: "",
						email: "",
						subject: "",
						message: "",
					});
					setTimeout(() => setIsSubmitted(false), 5000);
				})
				.catch((error) => {
					alert(
						"Failed to send message. Please try again."
					);
					console.error("EmailJS error:", error);
				});
		} else {
			alert("Please fill in all fields.");
		}
	};

  return (
		<>
			<PageHeader
				title='Contact Us'
				subtitle="We're here to help and answer any question you might have. We look forward to hearing from you."
				imageSeed='contact-us-banner'
				image={aboutImage}
			/>
			<SectionContainer className={`bg-${COLORS.bgWhite}`}>
				<div className='grid md:grid-cols-2 gap-10 md:gap-16'>
					{/* Contact Information */}
					<div
						className={`space-y-8 p-8 bg-${COLORS.bgLight} rounded-lg shadow-lg`}
					>
						<div>
							<h3
								className={`text-2xl font-semibold text-${COLORS.brandDark} mb-4`}
							>
								Get in Touch
							</h3>
							<p
								className={`text-${COLORS.textSecondary} mb-6`}
							>
								Reach out to us through any of the channels
								below, or fill out the contact form, and
								we'll get back to you as soon as possible.
							</p>
						</div>
						<div className='space-y-4'>
							<div className='flex items-start'>
								<LocationMarkerIcon
									className={`w-7 h-7 mr-4 text-${COLORS.brandGreen} flex-shrink-0 mt-1`}
								/>
								<div>
									<h4
										className={`text-lg font-medium text-${COLORS.textPrimary}`}
									>
										Our Office
									</h4>
									<p
										className={`text-${COLORS.textSecondary}`}
									>
										{COMPANY_INFO.address}
									</p>
								</div>
							</div>
							<div className='flex items-start'>
								<MailIcon
									className={`w-7 h-7 mr-4 text-${COLORS.brandGreen} flex-shrink-0 mt-1`}
								/>
								<div>
									<h4
										className={`text-lg font-medium text-${COLORS.textPrimary}`}
									>
										Email Us
									</h4>
									<a
										href={`mailto:${COMPANY_INFO.contactEmail}`}
										className={`text-${COLORS.brandBlue} hover:text-${COLORS.brandGreen} transition-colors`}
									>
										{COMPANY_INFO.contactEmail}
									</a>
									<p
										className={`text-xs text-${COLORS.textSecondary}`}
									>
										For general inquiries.
									</p>
								</div>
							</div>
							<div className='flex items-start'>
								<PhoneIcon
									className={`w-7 h-7 mr-4 text-${COLORS.brandGreen} flex-shrink-0 mt-1`}
								/>
								<div>
									<h4
										className={`text-lg font-medium text-${COLORS.textPrimary}`}
									>
										Call Us
									</h4>
									{COMPANY_INFO.phoneNumbers.map(
										(phone) => (
											<a
												key={phone}
												href={`tel:${phone.replace(
													/\s/g,
													""
												)}`}
												className={`block text-${COLORS.brandBlue} hover:text-${COLORS.brandGreen} transition-colors`}
											>
												{phone}
											</a>
										)
									)}
								</div>
							</div>
						</div>
						<div className='mt-8'>
							<h4
								className={`text-lg font-medium text-${COLORS.textPrimary} mb-2`}
							>
								Business Hours
							</h4>
							<p className={`text-${COLORS.textSecondary}`}>
								Monday - Friday: 9:00 AM - 5:00 PM
							</p>
							<p className={`text-${COLORS.textSecondary}`}>
								Saturday - Sunday: Closed
							</p>
						</div>
					</div>

					{/* Contact Form */}
					<div
						className={`p-8 bg-${COLORS.bgLight} rounded-lg shadow-lg`}
					>
						<h3
							className={`text-2xl font-semibold text-${COLORS.brandDark} mb-6`}
						>
							Send Us a Message
						</h3>
						{isSubmitted && (
							<div
								className={`mb-4 p-3 rounded-md bg-green-100 text-green-700 border border-green-300`}
							>
								Your message has been sent successfully!
								We'll be in touch soon.
							</div>
						)}
						<form
							onSubmit={handleSubmit}
							className='space-y-6'
						>
							<div>
								<label
									htmlFor='name'
									className={`block text-sm font-medium text-${COLORS.textPrimary} mb-1`}
								>
									Full Name
								</label>
								<input
									type='text'
									name='name'
									id='name'
									value={formData.name}
									onChange={handleChange}
									required
									className={`w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-${COLORS.brandGreen} focus:border-${COLORS.brandGreen}`}
								/>
							</div>
							<div>
								<label
									htmlFor='email'
									className={`block text-sm font-medium text-${COLORS.textPrimary} mb-1`}
								>
									Email Address
								</label>
								<input
									type='email'
									name='email'
									id='email'
									value={formData.email}
									onChange={handleChange}
									required
									className={`w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-${COLORS.brandGreen} focus:border-${COLORS.brandGreen}`}
								/>
							</div>
							<div>
								<label
									htmlFor='subject'
									className={`block text-sm font-medium text-${COLORS.textPrimary} mb-1`}
								>
									Subject
								</label>
								<input
									type='text'
									name='subject'
									id='subject'
									value={formData.subject}
									onChange={handleChange}
									required
									className={`w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-${COLORS.brandGreen} focus:border-${COLORS.brandGreen}`}
								/>
							</div>
							<div>
								<label
									htmlFor='message'
									className={`block text-sm font-medium text-${COLORS.textPrimary} mb-1`}
								>
									Message
								</label>
								<textarea
									name='message'
									id='message'
									rows={4}
									value={formData.message}
									onChange={handleChange}
									required
									className={`w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-${COLORS.brandGreen} focus:border-${COLORS.brandGreen}`}
								></textarea>
							</div>
							<div>
								<button
									type='submit'
									className={`w-full px-6 py-3 bg-${COLORS.brandGreen} text-white font-semibold rounded-md shadow-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${COLORS.brandGreen} transition-colors`}
								>
									Send Message
								</button>
							</div>
						</form>
					</div>
				</div>
			</SectionContainer>
			{/* Map Placeholder Section */}
			<SectionContainer
				className={`bg-${COLORS.bgWhite} pb-0 md:pb-0 -mb-1`}
			>
				{/* Full-width Map Section (React JSX) */}
				<div className={`bg-${COLORS.bgWhite} pt-12 pb-12`}>
					<h2
						className={`text-3xl font-bold text-${COLORS.brandDark} text-center mb-8`}
					>
						Find Us On The Map
					</h2>
					<div className='w-full'>
						<iframe
							title='Cloverdale Office Location'
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.011851159609!2d7.45307111122504!3d9.062682690962454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b9988a393f7%3A0x14fc49796c063df0!2sULO%20Plaza!5e0!3m2!1sen!2sng!4v1751015493206!5m2!1sen!2sng'
							width='100%'
							height='450'
							style={{ border: 0 }}
							allowFullScreen
							loading='lazy'
							referrerPolicy='no-referrer-when-downgrade'
							className='w-full'
						></iframe>
					</div>
				</div>
			</SectionContainer>
		</>
	);
};

export default ContactPage;
