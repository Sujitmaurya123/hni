import React from 'react';

interface VideoCardProps {
    imageUrl: string;
    videoUrl: string; // Or a function to handle the video request
    altText?: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ imageUrl, videoUrl, altText }) => {
    const handleRequestVideo = () => {
        // In a real application, you would implement the logic to
        // handle the video request, such as opening a modal or
        // navigating to a video page.
        console.log(`Requesting video: ${videoUrl}`);
        // You might use window.open(videoUrl) or a more sophisticated
        // method depending on your application's requirements.
    };

    return (
        <div className="relative rounded-md shadow-md overflow-hidden">
            <img src={imageUrl} alt={altText} className="w-full h-auto" />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 flex justify-center items-center">
                <button
                    onClick={handleRequestVideo}
                    className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded flex items-center"
                >
                    <svg
                        className="w-5 h-5 mr-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M21.59 7.18c.24.88.41 1.79.41 2.71 0 5.52-4.48 10-10 10S2 15.48 2 10 6.48 0 12 0c2.31 0 4.44.87 6.01 2.34l-1.53 1.53C15.97 2.57 13.95 2 12 2 7.58 2 4 5.58 4 10s3.58 8 8 8 8-3.58 8-8c0-.83-.11-1.63-.31-2.4l2.9-2.9zM12 14v-4l3 2-3 2z"
                        />
                    </svg>
                    Request Video
                </button>
            </div>
        </div>
    );
};

interface HomePageProps {
    videoCards: { imageUrl: string; videoUrl: string; altText?: string }[];
}

const HomePage: React.FC<HomePageProps> = ({ videoCards }) => {
    return (
        <div className="bg-gray-100 py-8">
            <div className="container mx-auto text-center">
                <h1 className="text-3xl font-semibold text-[#85694C] mb-2">
                    Godrej Horizon wadala  Where Dreams Touch the Sky
                </h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {videoCards.map((card, index) => (
                        <VideoCard
                            key={index}
                            imageUrl={card.imageUrl}
                            videoUrl={card.videoUrl}
                            altText={card.altText}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

// Example Usage (all in one App component):
const VideoCd: React.FC = () => {
    const videoCardData = [
        {
            imageUrl: '/images/hni1.jpg', // Ensure this path exists in your public folder
            videoUrl: 'URL_TO_HIGHWAY_VIDEO', // Replace with actual video URL or handling logic
            altText: 'Highway View',
        },
        {
            imageUrl: '/images/hni2.jpg', // Ensure this path exists in your public folder
            videoUrl: 'URL_TO_BEDROOM_VIDEO', // Replace with actual video URL or handling logic
            altText: 'Bedroom Interior',
        },
    ];

    return (
        <HomePage videoCards={videoCardData} />
    );
};

export default VideoCd;