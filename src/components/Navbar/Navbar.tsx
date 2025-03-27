import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';


const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const navLinks = [
        { href: '/', label: 'HOME' },
        { href: '/property-listing', label: 'PROPERTY LISTING' },
        { href: '/our-services', label: 'OUR SERVICES' },
        { href: '/about-us', label: 'ABOUT US' },
        { href: '/contact-us', label: 'CONTACT US' },
        { href: '/our-blog', label: 'OUR BLOG' },
    ];

    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="text-xl font-bold text-[#85694C]">
                        GODREJ
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                to={link.href}
                                className="text-[#85694C] hover:text-blue-500 transition duration-300"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Navigation Button */}
                    <div className="md:hidden">
                        <Button
                            onClick={toggleMobileMenu}
                            className="text-gray-700 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                        >
                            <svg
                                className="h-6 w-6 fill-current"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {isMobileMenuOpen ? (
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829z"
                                    />
                                ) : (
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-5h18V6H3v2z"
                                    />
                                )}
                            </svg>
                        </Button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="md:hidden bg-gray-100 py-2">
                        <div className="flex flex-col space-y-2 px-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    to={link.href}
                                    className="text-[#85694C] hover:text-blue-500 block py-2 transition duration-300"
                                    onClick={toggleMobileMenu} // Close menu on link click
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;