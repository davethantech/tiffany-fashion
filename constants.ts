
import type { NavItem } from './types';

export const COLORS = {
  brandBlue: 'indigo-700',
  brandGreen: 'emerald-600',
  brandAccentGreen: 'lime-500',
  brandDark: 'slate-800',
  textPrimary: 'slate-700',
  textSecondary: 'slate-500',
  bgLight: 'gray-50',
  bgWhite: 'white',
  footerBg: 'slate-800',
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Our Leadership', path: '/leadership' },
  { label: 'Our Services', path: '/services' },
  { label: 'Why Choose Us', path: '/why-choose-us' },
  { label: 'Contact Us', path: '/contact' },
];

export const COMPANY_INFO = {
	name: "Cloverdale Finance Company Limited",
	shortName: "Cloverdale Finance",
	tagline: "Your Surest Partner for a Wealthier Future",
	ceoName: "Mr. Abubakar Bello",
	// email: "abello@cloverdalefinance.com",
	contactEmail: "info@cloverdalefinance.com",
	phoneNumbers: [
		"+234 906 202 5678",
		"+234 916 201 5678",
	],
	address:
		"Wing B, second floor, ULO Plaza, No. 34 Sokode Crescent, Wuse Zone 5, Abuja.",
	vision:
		"To be the trusted global leader in transformative financial services, dedicated to building a wealthier and more secured future for everyone.",
	mission:
		"To deliver personalized financial solutions with transparency and innovation, empowering individuals and businesses to achieve lasting prosperity.",
};

// Wing B, second floor, ULO Plaza, No. 34 Sokode Crescent, Wuse Zone 5, Abuja.