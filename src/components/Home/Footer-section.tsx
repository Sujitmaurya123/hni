import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand Section */}
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-[#85694C]">GODREJ</h2>
                    </div>

                    {/* Contact Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-[#85694C]">CONTACT US</h3>
                        <ul className="space-y-2 text-[#85694C]">
                            <li>+91-1234567890</li>
                            <li>+91-1234567890</li>
                            <li>email@gmail.com</li>
                        </ul>
                    </div>

                    {/* Empty column for layout balance */}
                    <div></div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 my-8"></div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Links */}
                    <div className="flex space-x-4 mb-4 md:mb-0 text-[#85694C]">
                        <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
                        <span>|</span>
                        <a href="#" className="hover:text-gray-300 transition-colors">Terms & Conditions</a>
                    </div>

                    {/* Copyright */}
                    <div className="text-[#85694C] text-sm">
                        ©2025 Design & Developed By Click Connect Media Pvt. Ltd.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;