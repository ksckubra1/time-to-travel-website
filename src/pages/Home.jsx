import React from 'react'
import { AiFillGift } from 'react-icons/ai';
import bgHome from "../assets/images/bgImages/bg-home.jpg"
const Home = () => {
    return (
        <div className='relative h-[100dvh]  md:h-screen bg-center text-white w-full px-10 md:px-24 bg-cover py-10 flex flex-col' style={{ backgroundImage: `url(${bgHome})` }}>


            <div className="absolute inset-0 bg-style"></div>
            <div className="h-16 text-xs z-10 flex justify-between text-white/60 md:text-sm">
                <div className="cursor-pointer">Nature Trips</div>
                <div className="cursor-pointer">History & Cultural Tours
                </div>
                <div className="cursor-pointer">Adventure & Extreme Sports</div>
                <div className="cursor-pointer">Luxury Vacations</div>
            </div>
            <div className="flex-1 flex z-10">
                <div className="w-3/5 flex-col h-full justify-center gap-10 flex">
                    <h1 className='text-2xl text-blue-400'>TIME TO TRAVEL</h1>
                    <span className='text-xs md:text-sm'>
                        Explore new places and create unforgettable memories! <br />
                        From popular routes to hidden gems, everything is here. <br />
                        Travel tips, guides, and the best itineraries are waiting for you.<br />
                        Start your adventure now and explore the world step by step! 🚀🔍
                    </span>
                </div>

                <div className="md:flex hidden md:flex-col text-sm flex-1 justify-center items-end gap-6">
                    <div className="py-1 px-3 rounded-full border-white border bg-black/60 flex">
                        <span>1</span>
                    </div>
                    <div className="py-1 px-3 rounded-full border-white border bg-black/60 flex">
                        <span>2</span>
                    </div>
                    <div className="py-1 px-3 rounded-full border-white border bg-black/60 flex">
                        <span>3</span>
                    </div>
                    <div className="py-1 px-3 rounded-full border-white border bg-black/60 flex">
                        <span>4</span>
                    </div>
                    <div className="py-1 px-3 rounded-full border-white border bg-black/60 flex">
                        <span>5</span>
                    </div>

                </div>
            </div>
            <div className="flex h-32 text-[10px] lg:gap-20 gap-4 justify-between z-10 border-b border-white">
                <div className="flex  items-center gap-2">
                    <AiFillGift className='h-24 w-24' />
                    <div className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</div>

                </div>
                <div className="md:flex hidden items-center gap-2">
                    <AiFillGift className='h-24 w-24' />
                    <div className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</div>

                </div>
                <div className="md:flex hidden items-center gap-2">
                    <AiFillGift className='h-24 w-24' />
                    <div className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</div>

                </div>




            </div>
        </div>
    )
}

export default Home
