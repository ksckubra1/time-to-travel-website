import React from 'react'
import { BsFillPlayCircleFill } from "react-icons/bs";
import { FaInstagram, FaFacebook, FaTelegramPlane, FaTwitter } from "react-icons/fa";


const Communication = () => {
    return (
        <div className='md:h-screen h-[100dvh] flex flex-col relative gap-6 w-full px-10 md:px-20 pt-20 bg-[url(https://www.pixelstalk.net/wp-content/uploads/images8/Spring-Landscape-4K-Wallpaper-Free-Spring-Landscape-4K-Background.jpg)] text-white bg-cover'>
            <div className="absolute inset-0 bg-style"></div>
            <div className="flex h-full">
                <div className="h-full gap-10 relative justify-end flex-col lg:flex hidden lg:w-2/5 ">
                    <span className='text-blue-400 absolute left-0 top-32 text-3xl md:text-5xl'>
                        DISCOVER THE <br /> WORLD IN A <br /> NEW WAY
                    </span>
                    <div className="flex gap-4 items-center">
                        <BsFillPlayCircleFill className='text-white h-8 w-8' />
                        <span>WATCH THE VIDEO</span>
                    </div>
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </span>
                </div>
                <div className="h-full w-full lg:w-3/5 flex gap-2">
                    <div className="flex flex-col gap-y-2 flex-1">
                        <div className="flex-1"></div>
                        <div className="flex-1"></div>
                        <div className="flex-1 relative cursor-pointer">
                            <BsFillPlayCircleFill className='top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute h-8 w-8' />
                            <img className='bg-cover h-full rounded-lg' src="https://www.pixelstalk.net/wp-content/uploads/image12/A-magical-winter-forest-4k-wallpaper-with-snow-laden-pines-and-a-soft-ethereal-glow-from-the-winter-sun-creating-a-serene-and-enchanting-winter-scene.jpg" alt="" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-2 flex-1">
                        <div className="flex-1"></div>
                        <div className="flex-1 relative cursor-pointer">
                            <BsFillPlayCircleFill className='top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute h-8 w-8' />
                            <img className='bg-cover h-full rounded-lg' src="https://www.pixelstalk.net/wp-content/uploads/2016/07/Amazing-nature-scenery-wallpaper-4k.jpg" alt="" />
                        </div>
                        <div className="flex-1 relative cursor-pointer">
                            <BsFillPlayCircleFill className='top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute h-8 w-8' />
                            <img className='bg-cover h-full rounded-lg' src="https://www.pixelstalk.net/wp-content/uploads/2016/07/Free-4k-Backgrounds-Download.jpg" alt="" />
                        </div>
                    </div>
                    <div className="flex-1 flex gap-y-2 flex-col">
                        <div className="flex-1 relative cursor-pointer">
                            <BsFillPlayCircleFill className='top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute h-8 w-8' />
                            <img className='bg-cover h-full rounded-lg' src="https://www.pixelstalk.net/wp-content/uploads/images4/Balloon-4K-Background-for-Desktop-1-scaled.jpg" alt="" />
                        </div>
                        <div className="flex-1 relative cursor-pointer">
                            <BsFillPlayCircleFill className='top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute h-8 w-8' />
                            <img className='bg-cover h-full rounded-lg' src="https://www.pixelstalk.net/wp-content/uploads/images4/Nature-Background-4K-2-scaled.jpg" alt="" />
                        </div>
                        <div className="flex-1 relative cursor-pointer">
                            <BsFillPlayCircleFill className='top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute h-8 w-8' />
                            <img className='bg-cover h-full rounded-lg' src="https://www.pixelstalk.net/wp-content/uploads/images4/Nature-Background-4K-1-scaled.jpg" alt="" />
                        </div>

                    </div>
                </div>
            </div>
            <div className="h-36 border-t border-white w-full z-10 gap-2 text-white justify-center flex items-center">
                <FaInstagram className='cursor-pointer' />
                <FaFacebook className='cursor-pointer' />
                <FaTelegramPlane className='cursor-pointer' />
                <FaTwitter className='cursor-pointer' />

            </div>
        </div>
    )
}

export default Communication
