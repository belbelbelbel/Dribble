import React from 'react'
import "../Style/Styles.css"
export const Header = () => {
    return (
        <div className='w-screen h-scr text-black z-20'>
            <div className='w-screen h-[35vw] pink-bg flex flex-col justify-center items-center '>
                <div className='relative z-50  flex flex-col font-bold w-[80%] leading-[5vw]  mx-auto'>
                    <div className='w-[45%] body text-[4vw] tracking-[1.5px]' >
                        Save upto <div className='flex gap-[0.4vw]' style={{ fontFamily: "Open sans" }}><div className='text-red-500'>80%</div> with</div> BendeeHaven
                    </div>
                    <div className='text-[0.9vw] font-light text-gray-500 relative -top-[1vw]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis consectetur adipisicing
                    </div>
                    <div className=' w-[50%] flex  h-full justify-between flex items-center gap-[3vw]'>

                        <div className='bg-white w-[90%] px-[1vw] h-[3vw] rounded-[2vw] gap-[1vw] flex items-center '>
                            <div className= "text-[1vw]">
                                <div>jbewlhdjqwq</div>
                                <hr />
                            </div>
                            <input type="text" className=' w-[70%] bg-transparent text-[1vw] outline-none  h-full py-[0.5vw] rounded-[2vw] px-[1vw]' />
                        </div>
                        <button className= "text-[1vw] bg-red-500 px-[1vw] h-full  ">sadnckdjas,mnc</button>
                    </div>
                    {/* <img src="/genelify-667417c93b261-signature-generator (2).png" alt="the opening" width="300px"/> */}
                </div>

                <img src="/wave (10).svg" alt="wavy flow" className='absolute -bottom-[7vw] -rotate-270  z-0 left-0  ' />
            </div>
            <div className='relatiive'>l;wejmrst;lkgjwe;ms;ldt.fe</div>
        </div>
    )
}
