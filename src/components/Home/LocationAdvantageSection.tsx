import React from 'react';
import { Button } from '../ui/button';

interface LocationAdvantageItemProps {
    place: string;
    time: string;
}

const LocationAdvantageItem: React.FC<LocationAdvantageItemProps> = ({ place, time }) => {
    return (
        <div className="flex items-center justify-between py-2 border-b border-gray-200">
            <span className="text-gray-700">• {place}</span>
            <span className="text-gray-600">{time}</span>
        </div>
    );
};

const LocationAdvantageSection: React.FC = () => {
    return (
        <div className="bg-gray-100 py-12">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-semibold text-[#85694C] mb-8">
                    GODREJ WADALA LOCATION ADVANTAGE
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    <div className="rounded-md shadow-md overflow-hidden">
                        <img
                            src="/images/map.png" // Replace with your actual image URL in the public folder
                            alt="Godrej Horizon Location Map"
                            className="w-full h-auto"
                        />
                    </div>
                    <div className="p-6 bg-white rounded-md shadow-md">
                        <div className="mb-4">
                            <h3 className="text-xl font-semibold text-[#85694C] mb-2">
                                GODREJ HORIZON
                            </h3>
                        </div>
                        <LocationAdvantageItem place="Iconic Five Gardens" time="4 mins" />
                        <LocationAdvantageItem place="Iconic Five Gardens" time="4 mins" />
                        <LocationAdvantageItem place="Iconic Five Gardens" time="4 mins" />
                        <LocationAdvantageItem place="Iconic Five Gardens" time="4 mins" />
                        {/* You can add more location advantages here */}
                        <Button className="bg-brown-500 hover:bg-brown-700 text-white font-semibold py-3 px-6 rounded-md mt-6 focus:outline-none focus:shadow-outline">
                            REQUEST LOCATION DETAILS
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const LocationSection: React.FC = () => {
    return <LocationAdvantageSection />;
};

export default LocationSection;

