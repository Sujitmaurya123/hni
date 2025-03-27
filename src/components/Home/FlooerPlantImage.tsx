import React from 'react';
import { Button } from '../ui/button';

interface FloorPlanCardProps {
    floorPlanImage: string;
    type: string;
    areaSqFt: string;
    priceOnwards: string;
}

const FloorPlanCard: React.FC<FloorPlanCardProps> = ({
    floorPlanImage,
    type,
    areaSqFt,
    priceOnwards,
}) => {
    return (
        <div className="bg-[#b69c80] rounded-md shadow-md overflow-hidden">
            <img src={floorPlanImage} alt={`${type} Floor Plan`} className="w-full h-auto" />
            <div className="p-4">
                <div className="flex items-center mb-2 text-gray-700">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                    </svg>
                    <span className="font-semibold">Type</span>
                </div>
                <p className="text-lg text-gray-800 mb-3">{type}</p>

                <div className="flex items-center mb-2 text-gray-700">
                   
                    <span className="font-semibold">Area (sq.ft)</span>
                </div>
                <p className="text-lg text-gray-800 mb-3">{areaSqFt}</p>

                <div className="flex items-center mb-2 text-gray-700">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0-8c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                    <span className="font-semibold">Price (Onwards)</span>
                </div>
                <p className="text-lg text-gray-800 mb-4">{priceOnwards}</p>

                <Button className="bg-[#85694C] hover:bg-brown-700 cursor-pointer text-white font-semibold py-2 px-4 rounded-md w-full focus:outline-none focus:shadow-outline">
                    REQUEST PRICE BREAKUP
                </Button>
            </div>
        </div>
    );
};

const FloorPlansSection: React.FC = () => {
    const floorPlanData = [
        {
            floorPlanImage: '/images/hni1.jpg', // Replace with your actual image URL in the public folder
            type: '2 BHK',
            areaSqFt: '733 ++',
            priceOnwards: '₹ 2.99 Cr*',
        },
        {
            floorPlanImage: '/images/hni2.jpg', // Replace with your actual image URL in the public folder
            type: '2 BHK',
            areaSqFt: '733 ++',
            priceOnwards: '₹ 2.99 Cr*',
        },
        {
            floorPlanImage: '/images/hni3.jpg', // Replace with your actual image URL in the public folder
            type: '2 BHK',
            areaSqFt: '733 ++',
            priceOnwards: '₹ 2.99 Cr*',
        },
    ];

    return (
        <div className="bg-gray-100 py-12">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-semibold text-[#85694C] mb-8">
                    WADALA GODREJ FLOOR PLAN & PRICING
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {floorPlanData.map((plan, index) => (
                        <FloorPlanCard key={index} {...plan} />
                    ))}
                </div>
                <p className="mt-6 text-gray-600 text-sm">* Prices are indicative and may vary.</p>
            </div>
        </div>
    );
};

const FloorImage: React.FC = () => {
    return <FloorPlansSection />;
};

export default FloorImage;


