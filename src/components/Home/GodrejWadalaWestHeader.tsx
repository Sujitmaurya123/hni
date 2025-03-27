import React from 'react';

const GodrejWadalaWestHeader: React.FC = () => {
    return (
        <div className="w-full bg-[#85694C] py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
                    REDEFINE THE ART OF INDULGENCE
                    <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mt-4">
                        AT GODREJ WADALA WEST
                    </span>
                </h1>

                {/* Optional decorative elements */}
                <div className="mt-8 flex justify-center">
                    <div className="w-24 h-1 bg-amber-400 rounded-full"></div>
                </div>
            </div>
        </div>
    );
};

export default GodrejWadalaWestHeader;