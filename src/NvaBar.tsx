import { NavLink } from 'react-router-dom';
import { FaCartArrowDown } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import "./NavBar.css"

export const NvaBar = () => {
    return (
        <div className='w-screen bg-white xl:h-[5rem] md:h-[4rem] h-[10vw] overflow-hidden text-black navbar-cont relative z-50'>
            <div className='w-[80%]  2xl:py-[0.9vw] xl:py-[1.65vw] md:py-[2.5vw] py-[2.7vw] justify-between flex mx-auto items-center'>
                <div className='flex items-center gap-[4vw]'>
                    <div className='tracking-[2px] text-[#383838]   md:text-[1.3vw]  text-[2.3vw]' style={{ fontFamily: "Open Sans" }}>
                        C<span className='text-red-400 md:text-[1.8vw] text-[3vw] mx-0 '>O</span>UPONS
                    </div>
                    <div className='flex gap-[2rem] text-[0.9vw] font-normal text-[#383838]  hidden xl:flex'>
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
                        <FaCartArrowDown className='text-red-500 text-[3vw] xl:text-[1vw]' />
                        <div className='text-red-400 md:text-[2vw] text-[2vw] xl:text-[1vw]'>Cart</div>
                    </div>
                    <div className='md:h-6 h-3 md:w-0.5 w-0.5 md:bg-gray-500 bg-gray-300'></div>
                    <div className=''>
                        <div className='xl:w-[30px] xl:w-[30px] md:w-[30px] md:h-[30px] h-[4vw] w-[4vw] h-[30px] bg-[#383838] rounded-full'></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NvaBar;
