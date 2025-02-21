import { useState } from "react";
import Card from "./Card";
import { IoChevronBack, IoChevronForward } from "react-icons/io5"
import card1_img1 from "../assets/images/card1-img1.jpg"
import card1_img2 from "../assets/images/card1-img2.jpg"
import card1_img3 from "../assets/images/card1-img3.jpg"
import card1_img4 from "../assets/images/card1-img4.jpg"
import card2_img1 from "../assets/images/card2-img1.jpg"
import card2_img2 from "../assets/images/card2-img2.jpg"
import card2_img3 from "../assets/images/card2-img3.jpg"
import card2_img4 from "../assets/images/card2-img4.jpg"
import card3_img1 from "../assets/images/card3-img1.jpg"
import card3_img2 from "../assets/images/card3-img2.jpg"
import card3_img3 from "../assets/images/card3-img3.jpg"
import card3_img4 from "../assets/images/card3-img4.jpg"
import card4_img1 from "../assets/images/card4-img1.jpg"
import card4_img2 from "../assets/images/card4-img2.jpg"
import card4_img3 from "../assets/images/card4-img3.jpg"
import card4_img4 from "../assets/images/card4-img4.jpg"


const placesToVisit = [
    {
        id: 1,
        img1: card1_img1,
        img2: card1_img2,
        img3: card1_img3,
        img4: card1_img4,
        country: "Italy Rome",
        structure: "Colosseum",
        overview: "This photo shows the famous Colosseum in Rome, Italy. This ancient Roman amphitheater is one of the most iconic historical structures in the world. In the past, it was used for gladiator fights and various events. Today, it is one of the most visited tourist attractions in Rome."
    },
    {
        id: 2,
        img1: card2_img1,
        img2: card2_img2,
        img3: card2_img3,
        img4: card2_img4,
        country: "Italy Rome",
        structure: "Trevi Fountain",
        overview: "The Trevi Fountain is one of Rome's most famous and largest fountains. Built in the 18th century, its chief architect was Nicola Salvi. At the center of the fountain stands the statue of Oceanus, the god of water, while the surrounding sculptures represent Rome's water systems. The most well-known feature of the Trevi Fountain is the tradition of visitors throwing coins over their shoulder to make a wish, symbolizing the hope of returning to Rome. The fountain is a popular stop for both tourists and photography enthusiasts."
    },
    {
        id: 3,
        img1: card3_img1,
        img2: card3_img2,
        img3: card3_img3,
        img4: card3_img4,
        country: "Italy Rome",
        structure: "Villa Borghese",
        overview: "Villa Borghese is one of Rome's largest and most beautiful public parks, offering a peaceful escape from the city's hustle and bustle. Located in the heart of Rome, it spans over 80 hectares and is home to various attractions, including the Borghese Gallery, which houses an impressive collection of Renaissance and Baroque art by artists such as Caravaggio, Bernini, and Raphael. The park also features picturesque gardens, serene lakes, and charming pathways, making it a popular spot for walking, cycling, and relaxation. It's a perfect blend of nature and culture in the heart of Rome."
    },
    {
        id: 4,
        img1: card4_img1,
        img2: card4_img2,
        img3: card4_img3,
        img4: card4_img4,
        country: "Italy Pisa",
        structure: "Leaning Tower of Pisa",
        overview: "The Leaning Tower of Pisa is a famous bell tower located in the city of Pisa, in the Tuscany region of Italy. Construction began in 1173, but due to the soft ground beneath it, the tower gradually started to lean. Standing at 56 meters tall, it is designed in the Romanesque architectural style and has eight stories. Today, its tilt has been stabilized, allowing tourists to visit, and it remains one of the most iconic landmarks in the world."
    }
];

const PlacesToVisit = () => {

    const [buttonValue, setButtonValue] = useState(0)


    const handleIncrease = () => {
        if (buttonValue < placesToVisit.length - 1) {
            setButtonValue(buttonValue + 1);
        }
    };

    const handleDecrease = () => {
        if (buttonValue > 0) {
            setButtonValue(buttonValue - 1);
        }
    };

    return (
        <div className="md:h-screen h-[100dvh] flex relative">
            <div className="flex relative w-full items-center justify-center bg-black">

                <button className="absolute top-14 left-24 bg-white/50 p-2 z-20 text-black rounded-lg cursor-pointer" onClick={handleDecrease}>
                    <IoChevronBack />
                </button>
                <button className="absolute top-14 right-24 bg-white/50 p-2 z-20 text-black rounded-lg cursor-pointer" onClick={handleIncrease}>
                    <IoChevronForward />
                </button>

                <div className="xl:flex xl:gap-10 grid grid-cols-2 gap-4">

                    <Card placesToVisit={placesToVisit[buttonValue]} img="img1" />
                    <Card placesToVisit={placesToVisit[buttonValue]} img="img2" />
                    <Card placesToVisit={placesToVisit[buttonValue]} img="img3" />
                    <Card placesToVisit={placesToVisit[buttonValue]} img="img4" />

                </div>

            </div>

        </div>
    );

};

export default PlacesToVisit;

