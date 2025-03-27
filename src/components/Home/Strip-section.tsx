"use client";

import React from "react";
import { Button } from "../ui/button";

const GodrejPro: React.FC = () => {
    const handleDownloadBrochure = () => {
        // Logic to handle brochure download
        console.log("Downloading brochure...");
        // In a real app, this would trigger a file download
    };

    return (
        <div className="max-w-7xl mx-auto p-6  ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-9 items-center">
                {/* Left Side - Text Content */}
                <div>
                    <h1 className="text-3xl font-bold text-[#85694C] mb-4">
                        Godrej Horizon Wadala
                    </h1>

                    <div className="prose prose-lg text-[#85694C] mb-6 text-justify ">
                        <p className="mb-1">
                            Discover a lifestyle that truly redefines luxury at Godrej
                            Horizon Phase 2, nestled in the prestigious Godrej Dadar
                            Wadala. This meticulously planned Godrej Wadala project offers
                            a unique blend of contemporary design and unmatched
                            convenience.
                        </p>
                        <p className="mb-1">
                            Godrej Pinnacle of Dadar Wadala ensures seamless connectivity
                            to key destinations, placing you at the heart of Mumbai's
                            vibrant cityscape. The residences at Godrej Crest Wadala are
                            thoughtfully crafted to cater to your every need, combining
                            sophisticated interiors with modern architecture.
                        </p>
                        <p className="mb-1">
                            Just minutes away from Azad Nagar Wadala and Dadar, Godrej
                            Pinnacle Wadala offers an ideal living experience, surrounded
                            by a host of world-class amenities and lush green spaces.
                            Here, every moment is a perfect balance of luxury, comfort,
                            and convenience, creating a home that complements your
                            lifestyle in every way.
                        </p>
                    </div>

                    <Button
                        onClick={handleDownloadBrochure}
                        className="px-6 py-3 bg-[#85694C] hover:bg-[#43372a] text-white font-semibold rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        DOWNLOAD BROCHURE
                    </Button>
                </div>

                {/* Right Side - Image */}
                <div className="rounded-lg overflow-hidden shadow-sm flex justify-center">
                    <img
                        src="/images/hni4.jpg"
                        alt="Exterior View of Godrej Horizon"
                        className="w-full  h-[600px] object-cover rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default GodrejPro;
