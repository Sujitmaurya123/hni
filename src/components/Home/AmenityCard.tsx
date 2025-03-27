import React from 'react';
import { Button } from '../ui/button';

interface AmenityCardProps {
    icon: React.ReactNode;
    title: string;
    description?: string;
}

const AmenityCard: React.FC<AmenityCardProps> = ({ icon, title, description }) => {
    return (
        <div className="flex flex-col items-center p-6 rounded-md shadow-md bg-white">
            <div className="w-16 h-16 flex items-center justify-center mb-4 text-gray-700">
                {icon}
            </div>
            <h3 className="text-lg font-semibold text-[#85694C] mb-2 text-center">{title}</h3>
            {description && <p className="text-[#85694C] text-sm text-center">{description}</p>}
        </div>
    );
};

const AmenitiesSection: React.FC = () => {
    return (
        <div className="bg-[#F4F2F2] py-12">
            <div className="container mx-auto text-center">
               
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AmenityCard
                        icon={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-10 w-10"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m12 0H7m15 4v-2a2 2 0 00-2-2H4a2 2 0 00-2 2v2m1-10V3a2 2 0 00-2-2H6a2 2 0 00-2 2v8m1-10l9 9m-4.5-4.5l4.5 4.5"
                                />
                            </svg>
                        }
                        title="A home where all that you need is within 9 min"
                    />
                    <AmenityCard
                        icon={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-10 w-10"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 3.143L13 21l-2.286-6.857L5 12l5.714-3.143L13 3z"
                                />
                            </svg>
                        }
                        title="40+ Amenities Across Multiple Levels"
                    />
                    <AmenityCard
                        icon={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-10 w-10"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m12 0H7m0 0l-2-2m2 2l2-2m-2-2l-2 2m2-2l2 2"
                                />
                            </svg>
                        }
                        title="5-storeyed Grand Clubhouse"
                    />
                    <AmenityCard
                        icon={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-10 w-10"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 12h6m-6 4h6m2-2H7m2 4h2m2-2h2m-2 4v-2m0-4v-2m2 2h2m-2-2h2m-2-2v2M9 21v-6a2 2 0 012-2h2a2 2 0 012 2v6m-6 0h6"
                                />
                            </svg>
                        }
                        title="Curated Spaces For The Little One's Playtime"
                    />
                    <AmenityCard
                        icon={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-10 w-10"
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
                        }
                        title="5 Acres of Green Space"
                    />
                    <AmenityCard
                        icon={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-10 w-10"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 10V3L4 15h9m8-11v8c0 1.1-.9 2-2 2H5l-2 2L3 6m18 3v7a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2h12a2 2 0 012 2z"
                                />
                            </svg>
                        }
                        title="5-level MLCP"
                    />
                </div>
                <Button className="bg-brown-500 hover:bg-brown-700 text-white font-semibold py-3 px-8 rounded-md mt-8 focus:outline-none focus:shadow-outline">
                    RESERVE YOUR LUXURY
                </Button>
            </div>
        </div>
    );
};

const CardAmenity: React.FC = () => {
    return <AmenitiesSection />;
};

export default CardAmenity;


