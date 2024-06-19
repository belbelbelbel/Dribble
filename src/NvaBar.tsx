import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaCartArrowDown } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

export const NvaBar = () => {
    return (
        <div className='w-screen bg-white h-[5rem] overflow-hidden text-black navbar-cont relative z-50'>
            <div className='w-[80%] py-[0.8vw]  justify-between flex mx-auto items-center'>
                <div className='flex items-center gap-[4vw]'>
                    <div className='tracking-[2px] text-[#383838] text-[1.3vw]' style={{ fontFamily: "Open Sans" }}>
                        C<span className='text-red-400 text-[1.8vw] mx-0'>O</span>UPONS
                    </div>

                    <div className='flex gap-[2rem] text-[0.9vw] font-normal text-[#383838]'>
                        <NavLink  to="/" className={({ isActive }) => isActive ? 'text-red-500' : ''}>Home</NavLink>
                        <div className='flex items-center'>
                            <NavLink to="/categories" className={({ isActive }) => isActive ? 'text-red-500' : ''}>Categories</NavLink>
                            <div className='relative top-[1.3px] cursor-pointer'>
                                <MdKeyboardArrowDown className='text-[1.2vw]' />
                            </div>
                        </div>
                        <NavLink to="/packages" className={({ isActive }) => isActive ? 'text-red-500' : ''}>Packages</NavLink>
                        <NavLink to="/discounted-services" className={({ isActive }) => isActive ? 'text-red-500' : ''}>Discounted Services</NavLink>
                        <NavLink to="/individual-products" className={({ isActive }) => isActive ? 'text-red-500' : ''}>Individual products</NavLink>
                        <NavLink to="/partner-with-us" className={({ isActive }) => isActive ? 'text-red-500' : ''}>Partner with us</NavLink>
                    </div>
                </div>
                <div className='flex items-center gap-[1vw]'>
                    <div className='flex items-center gap-[0.7vw]'>
                        <FaCartArrowDown className='text-red-500' />
                        <div className='text-red-400'>Cart</div>
                    </div>
                    <div className='h-6 w-0.5 bg-gray-500'></div>
                    <div className=''>
                        <div className='w-[30px] h-[30px] bg-[#383838] rounded-full'></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NvaBar;
