import React from 'react'
import { useState, useEffect, useRef } from "react";

const Card = ({ placesToVisit, img }) => {

    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (cardRef.current) {
                const rect = cardRef.current.getBoundingClientRect(); // kartın bulunduğu yeri rect e attık
                setIsVisible(rect.top < window.innerHeight * 0.4); // Kart %40 ekrana girince true olsun
            }
        };

        window.addEventListener("scroll", handleScroll); // sayfa scroll olduğunda handscroll u çalıştır
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <div className="relative xl:w-72 xl:h-96 md:w-56 md:h-72 w-44 h-62 z-10 rounded-lg perspective">
            {/* Kartın tamamını döndürüyoruz */}
            <div
                ref={cardRef}
                className={`absolute w-full h-full transition-transform duration-700 transform-style md:${isVisible ? "rotate-y-180" : ""}`}
            >
                {/* Ön Yüz */}
                <div className="absolute inset-0 flex items-center justify-center  shadow-lg backface-hidden">
                    <img src={placesToVisit[img]} alt="Front" className="h-full w-full object-cover rounded-lg" />
                    <div className="bg-black/50 absolute inset-0 h-full w-full backdrop-blur-md"></div>
                    <div className="text-white/90 bg-black/30 py-3 px-4 rounded-lg drop-shadow-md absolute flex flex-col items-end right-4 bottom-4 w-full">
                        <span className='font-semibold'>{placesToVisit.country}</span>
                        <span className='font-bold'>{placesToVisit.structure}</span>
                    </div>
                </div>

                {/* Arka Yüz */}
                <div className="absolute inset-0 bg-blue-500 rounded-lg shadow-lg backface-hidden md:rotate-y-180">
                    <img src={placesToVisit[img]} alt="Back" className="h-full w-full object-cover rounded-lg" />
                </div>
            </div>
        </div>
    )
}

export default Card
