import React from 'react'
import { Link } from 'react-router-dom'
import { FaCartArrowDown } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";


export const NvaBar = () => {
    return (
        <div className='w-screen bg-white h-[6rem] overflow-hidden  text-black navbar-cont z-40'>
            <div className='w-[80%] py-[1.3vw] justify-between flex mx-auto items-center'>
                <div className='flex items-center gap-[4vw]'>
                    <div className='tracking-[2px] text-[#383838] text-[1.3vw]' style={{ fontFamily: "Open Sans" }}>
                        C<span className='text-red-400 text-[1.8vw]  mx-0'>O</span>UPONS
                    </div>
                    

                    <div className='flex gap-[2rem] text-[0.9vw] font-normal text-[#383838]'>
                        <div className='text-red-600  text-center'>
                            <Link to="/">Home</Link>
                        </div>
                        <div>
                            <div className='flex  items-center'>
                                <div><Link to="/">Categories</Link></div>
                                <div className='relative top-[1.3px] cursor-pointer'><MdKeyboardArrowDown className='text-[1.2vw]'/></div>
                            </div>
                        </div>
                        <div>
                            <Link to="/">Packages</Link>
                        </div>
                        <div>
                            <Link to="/">Discounted Services</Link>
                        </div>
                        <div>
                            <Link to="/">Individual products</Link>
                        </div>
                        <div>
                            <Link to="/">Partner with us</Link>
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-[1vw]'>
                    <div className='flex items-center gap-[0.7vw]'>
                        <div><FaCartArrowDown className='text-red-500' /></div>
                        <div className='text-red-400'>Cart</div>
                    </div>
                    <div className='h-6 w-0.5 bg-gray-500'></div>
                    <div className=''>
                        <div className='w-[30px] h-[30px]  bg-[#383838] rounded-full'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
