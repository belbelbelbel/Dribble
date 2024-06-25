import { CiSearch } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import animatedData from "../Style/Animation - 1717368668541.json";
import "../Style/Styles.css"
import Lottie from 'lottie-react';
export const Header = () => {
    return (
        <div className='w-screen  text-black z-20'>
            <div className='w-screen 2xl:h-[35vw] md:h-[35vw] xl:h-[40vw] h-[40vw]  pink-bg overflow-hidden  flex flex-col justify-center items-center '>
                <div className='relative z-50 flex flex-col font-bold w-[80%] gap-[1vw] leading-[5vw]   mx-auto'>
                    <div className='flex items-center  justify-center gap-[10vw] '>
                        <div className='w-[100%]  text-[5vw] tracking-[2px] banter leading-[5.3vw]' >
                            Save upto <div className='flex gap-[0.4vw]' ><div className='text-red-400' >80%</div> with</div> B<span className=' text-red-400'>e</span>nd<span className=' text-red-400'>e</span>Hav<span className=' text-red-500'></span>n
                            <div className='text-[0.9vw] font-light text-black relative -top-[1vw] tracking-[0px]' style={{ fontFamily: "Open sans" }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis consectetur adipisicing
                            </div>
                        </div>
                        <div className='relative xl:right-[30vw]  right-[25vw]  md:right-[30vw] -top-[10vw]'>
                            <div className='2xl:w-[50vw] xl:w-[29.4vw]  absolute md:w-[34vw] w-[30vw]  max-h-[60vh] flex rounded-[100%] bg-transparent' >
                                <Lottie animationData={animatedData}></Lottie>
                            </div>
               
                        </div>
                    </div>
                    <div className=' w-[50%] flex    flex items-center gap-[1vw]'>

                        <div className='bg-white w-[90%] px-[1vw] h-[3.2vw] rounded-[2vw] gap-[0vw] flex items-center '>
                            <div className="text-[1vw]">
                                <CiSearch className='text-[1.6vw] text-red-500' />
                                {/* <hr /> */}
                            </div>
                            <input type="text" placeholder='Search' autoFocus className=' w-[70%] bg-transparent text-[1vw] outline-none border-none font-normal  h-full py-[0.5vw] rounded-[2vw] px-[1vw]' />
                            <div className='flex items-center gap-[0.5vw]'>
                                <div className='h-[1.5vw] w-[1px] bg-gray-300'></div>
                                <div><IoLocationOutline className='text-red-500 text-[1.2vw]' /></div>
                                <div className='text-[1vw] font-normal text-red-500'>Location</div>
                            </div>
                        </div>
                        <div className='items-center justify-center relative flex '>
                            <button className="text-[1vw] bg-red-400 px-[3vw] btn font-normal text-white flex items-center outline-none border-none rounded-[2vw] justify-center h-0 py-[1.4vw] search-bar" style={{ fontFamily: "Open sans" }}>Explore</button>
                        </div>
                    </div>
                    {/* <img src="/genelify-667417c93b261-signature-generator (2).png" alt="the opening" width="300px"/> */}
                </div>
                <div>
                    <img src="/wave (10).svg" alt="wavy flow" className='absolute 2xl:-bottom-[5vw] xl:-bottom-[4vw] -rotate-270  z-0 left-0  ' />
                </div>
            </div>
            <div className='relatiive'></div>
        </div>
    )
}
