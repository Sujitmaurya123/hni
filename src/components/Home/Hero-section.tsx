"use client";

import React, { useState, useEffect, useRef } from "react";
import { Button } from "../ui/button";

const items = [
    {
        id: 1,
        imageUrl: "/images/hni1.jpg",
        altText: "Slide 1",
    },
    {
        id: 2,
        imageUrl: "/images/hni2.jpg",
        altText: "Slide 2",
    },
    {
        id: 3,
        imageUrl: "/images/hni3.jpg",
        altText: "Slide 3",
    },
];

const HeroSection: React.FC = () => {
    const autoSlide = true; // Enable auto-slide
    const slideInterval = 3000;
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? items.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === items.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        if (autoSlide && items.length > 0) {
            const intervalId = setInterval(() => {
                goToNext();
            }, slideInterval);

            return () => clearInterval(intervalId); // Cleanup on unmount
        }
    }, [currentIndex, autoSlide, slideInterval]);

    return (
        <div className="relative w-full overflow-hidden rounded-md shadow-md">
            {/* Slider Content */}
            <div
                ref={sliderRef}
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {items.map((item) => (
                    <div key={item.id} className="min-w-full flex-shrink-0">
                        <img
                            src={item.imageUrl}
                            alt={item.altText}
                            className="w-full h-[650px] object-cover"
                        />
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            {items.length > 1 && (
                <>
                    <Button
                        onClick={goToPrevious}
                        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white rounded-full p-2 focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </Button>
                    <Button
                        onClick={goToNext}
                        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white rounded-full p-2 focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </Button>
                </>
            )}

            {/* Navigation Dots */}
            {items.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {items.map((_, index) => (
                        <Button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`rounded-full w-3 h-3 focus:outline-none ${currentIndex === index
                                    ? "bg-blue-500"
                                    : "bg-gray-300 hover:bg-gray-400"
                                }`}
                        ></Button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default HeroSection;
