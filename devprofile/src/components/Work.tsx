import React, { useEffect, useRef } from 'react';

const Work: React.FC = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            container.scrollLeft = (container.scrollWidth - container.clientWidth) / 2;
        }
    }, []);

    return (
        <div className="h-screen bg-black relative flex flex-col items-center pt-5 overflow-x-hidden"> {/* Added overflow-x-hidden here */}

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
                <p>Latest Projects</p>
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
                    {Array(6).fill(null).map((_, index) => (
                        <div key={index} className="flex-none bg-white mr-4 shadow-md rounded" style={{ width: '220px', height: '180px' }}>
                            {/* Removed the number */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Work;
