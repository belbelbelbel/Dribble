import { CiSearch } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import animatedData from "../Style/Animation - 1717368668541.json";
import "../Style/Styles.css"
import Lottie from 'lottie-react';
export const Header = () => {
    return (
        <div className='w-screen  text-black z-20'>
            <div className='w-screen 2xl:h-[30vw] md:h-[35vw] xl:h-[36.5vw] h-[50vw]  pink-bg overflow-hidden  flex flex-col justify-center items-center '>
                <div className='relative z-50 flex flex-col  font-bold w-[80%] md:gap-[1vw] gap-[10vw]  leading-[5vw]   mx-auto'>
                    <div className='flex items-center  justify-center gap-[12vw] '>
                        <div className='w-[100%]  text-[9vw]   md:text-[5vw] md:tracking-[2px] tracking-[2px] banter leading-[7.8vw] md:leading-[5.3vw]' >
                            Save upto <div className='flex gap-[0.4vw]' ><div className='text-red-400' >80%</div> with</div> B<span className=' text-red-400'>e</span>nd<span className=' text-red-400'>e</span>Hav<span className=' text-red-500'></span>n
                            <div className='text-[0.9vw] font-light text-black md:block hidden relative -top-[1vw] tracking-[0px]' style={{ fontFamily: "Open sans" }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis consectetur adipisicing
                            </div>
                        </div>
                        <div className='relative xl:right-[30vw]   right-[25vw]  md:right-[30vw] -top-[10vw]'>
                            <div className='2xl:w-[50vw]  xl:w-[29.4vw]  absolute md:w-[34vw] w-[30vw]  max-h-[60vh] flex rounded-[100%] bg-transparent' >
                                <Lottie animationData={animatedData}></Lottie>
                            </div>
                        </div>
                    </div>
                    <div className=' md:w-[50%] w-[70%] flex justify-center   flex items-center gap-[1vw]'>

                        <div className='bg-white w-[100%] md:px-[1vw] px-[2vw] md:h-[3.2vw] h-[5vw] rounded-[2vw] md:gap-[0vw] gap-[1.4vw] flex items-center '>
                            <div className="md:text-[1vw] text-[4vw]">
                                <CiSearch className='md:text-[1.6vw]  text-[2.5vw] text-red-500' />
                                {/* <hr /> */}
                            </div>
                            <input type="text" placeholder='Search' autoFocus className='  w-full bg-transparent md:text-[1vw] text-[2vw] outline-none border-none font-normal  h-full py-[0.5vw] rounded-[2vw] md:px-[1vw] px-[0vw]' />
                            <div className='flex items-center gap-[0.5vw]'>
                                <div className='h-[1.5vw] w-[1px] bg-gray-300'></div>
                                <div><IoLocationOutline className='text-red-500 text-[1.2vw]' /></div>
                                <div className='md:text-[1vw] text-[2vw] font-normal text-red-500'>Location</div>
                            </div>
                        </div>
                        <div className='items-center justify-center relative flex '>
                            <button className="text-[1vw] bg-red-400 px-[3vw] btn font-normal text-white flex items-center outline-none border-none rounded-[2vw] justify-center h-0 py-[1.4vw] search-bar" style={{ fontFamily: "Open sans" }}>Explore</button>
                        </div>
                    </div>
                    {/* <img src="/genelify-667417c93b261-signature-generator (2).png" alt="the opening" width="300px"/> */}
                </div>
                <div className="">
                    <img src="/wave (10).svg" alt="wavy flow" className='absolute    xl:-bottom-[0vw] bottom -rotate-270  z-0 left-0'/>
                </div>
            </div>
            <div className='relatiive'></div>
        </div>
    )
}
