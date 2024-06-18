import React from 'react'
import { Link } from 'react-router-dom'
import { FaCartArrowDown } from "react-icons/fa";


export const NvaBar = () => {
    return (
        <div className='w-screen bg-white h-[6rem] overflow-hidden  text-black'>
            <div className='w-[80%] py-[1.8vw] justify-between flex mx-auto items-center'>
                <div className='flex items-center gap-[6rem]'>
                    <div className='tracking-[2px] text-[1.5vw]' style={{ fontFamily: "Open Sans" }}>
                        C<span className='text-red-400'>o</span>U<span className='text-red-400'>p</span>O<span className='text-red-400'>n</span>S
                    </div>
                    

                    <div className='flex gap-[3rem]'>
                        <div className='text-red-400 text-center'>
                            <Link to="/">Home</Link>
                        </div>
                        <div>
                            <Link to="/">Home</Link>
                        </div>
                        <div>
                            <Link to="/">Home</Link>
                        </div>
                        <div>
                            <Link to="/">Home</Link>
                        </div>
                        <div>
                            <Link to="/">Home</Link>
                        </div>
                        <div>
                            <Link to="/">Home</Link>
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-[1vw]'>
                    <div className='flex items-center gap-[0.7vw]'>
                        <div><FaCartArrowDown className='text-red-300' /></div>
                        <div className='text-red-300'>Cart</div>
                    </div>
                    <div className='h-6 w-0.5 bg-gray-500'></div>
                    <div className=''>
                        <div className='w-[30px] h-[30px]  bg-black rounded-full'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
