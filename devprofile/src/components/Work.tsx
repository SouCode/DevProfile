import React, { useEffect, useRef } from 'react';

const Work: React.FC = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            container.scrollLeft = (container.scrollWidth - container.clientWidth) / 5;
        }
    }, []);

    const images = [
        null,
        { src: "/Allure.svg", top: '50%', left: '50%', width: '220px', height: '170px' },
        { src: "/Luminae.svg", top: '45%', left: '50%', width: '220px', height: '190px' },
        { src: "/Chirp.svg", top: '46%', left: '50%', width: '220px', height: '200px' },
        null,
        null
    ];

    return (
        <div className="h-screen bg-black relative flex flex-col items-center pt-5 overflow-x-hidden">

            {/* Latest Projects */}
            <div
                className="border-8 border-black bg-white flex items-center justify-center p-4 mb-6 absolute"
                style={{
                    width: '607px',
                    height: '150px',
                    top: '10vh',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 11
                }}
            >
                <p className="text-xl font-mono">Latest Projects</p>
            </div>

            {/* Showcase SVG */}
            <div
                className="relative flex items-center justify-center w-full mb-6"
                style={{
                    width: '1100px',
                    height: '491px',
                }}
            >
                <img src="/showcase.svg" alt="Showcase" className="w-full h-full absolute z-10" />

                {/* Horizontal Scrolling Container */}
                <div
                    ref={scrollContainerRef}
                    className="absolute z-20 flex overflow-x-auto"
                    style={{
                        width: '940px',
                        height: '250px',
                        top: '80%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)'
                    }}
                >
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="flex-none bg-white mr-4 shadow-md rounded relative"
                            style={{
                                width: '220px',
                                height: '180px'
                            }}
                        >
                            {image && (
                                <img
                                    src={image.src}
                                    alt=""
                                    className="absolute"
                                    style={{
                                        top: image.top,
                                        left: image.left,
                                        width: image.width,
                                        height: image.height,
                                        transform: 'translate(-50%, -50%)'
                                    }}
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Work;
