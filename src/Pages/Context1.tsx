import  { useState, useEffect } from 'react';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import 'react-multi-carousel/lib/styles.css';
export const Content1 = () => {


  const [curr, setCurr] = useState(0);
  const contentItems = [
    {
      imgSrc: '/content2.jpg',
      title: 'Unique discount services',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor tenetur quo, a, ullam repudiandae cum molestiae quis modi at soluta',
      bgColor: 'pink-bg'
    },
    {
      imgSrc: '/content1.jpg',
      title: 'Events',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor tenetur quo, a, ullam repudiandae cum molestiae quis modi at soluta',
      bgColor: 'pink-bgg'
    },
    {
      imgSrc: '/content3.jpg',
      title: 'Products',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor tenetur quo, a, ullam repudiandae cum molestiae quis modi at soluta',
      bgColor: 'pink-bg'
    },
    {
      imgSrc: '/content1.jpg',
      title: 'Events',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor tenetur quo, a, ullam repudiandae cum molestiae quis modi at soluta',
      bgColor: 'pink-bgg'
    },
    {
      imgSrc: '/content3.jpg',
      title: 'Products',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor tenetur quo, a, ullam repudiandae cum molestiae quis modi at soluta',
      bgColor: 'pink-bg'
    },
    {
      imgSrc: '/content3.jpg',
      title: 'Products',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor tenetur quo, a, ullam repudiandae cum molestiae quis modi at soluta',
      bgColor: 'pink-bg'
    },
    {
      imgSrc: '/content3.jpg',
      title: 'Products',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor tenetur quo, a, ullam repudiandae cum molestiae quis modi at soluta',
      bgColor: 'pink-bg'
    },
    {
      imgSrc: '/content3.jpg',
      title: 'Products',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor tenetur quo, a, ullam repudiandae cum molestiae quis modi at soluta',
      bgColor: 'pink-bg'
    },
    {
      imgSrc: '/content3.jpg',
      title: 'Products',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor tenetur quo, a, ullam repudiandae cum molestiae quis modi at soluta',
      bgColor: 'pink-bg'
    },
    {
      imgSrc: '/content1.jpg',
      title: 'Events',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor tenetur quo, a, ullam repudiandae cum molestiae quis modi at soluta',
      bgColor: 'pink-bgg'
    },
    {
      imgSrc: '/content3.jpg',
      title: 'Products',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor tenetur quo, a, ullam repudiandae cum molestiae quis modi at soluta',
      bgColor: 'pink-bg'
    },
    {
      imgSrc: '/content1.jpg',
      title: 'Events',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor tenetur quo, a, ullam repudiandae cum molestiae quis modi at soluta',
      bgColor: 'pink-bgg'
    },
    {
      imgSrc: '/content2.jpg',
      title: 'Unique discount services',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor tenetur quo, a, ullam repudiandae cum molestiae quis modi at soluta',
      bgColor: 'pink-bg'
    },
    {
      imgSrc: '/content1.jpg',
      title: 'Events',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor tenetur quo, a, ullam repudiandae cum molestiae quis modi at soluta',
      bgColor: 'pink-bgg'
    },
    {
      imgSrc: '/content3.jpg',
      title: 'Products',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor tenetur quo, a, ullam repudiandae cum molestiae quis modi at soluta',
      bgColor: 'pink-bg'
    },
  ];

  console.log(contentItems.length - 1)

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurr(curr => (curr === (contentItems.length) / 4 ? 3 : curr + 1));
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, []);

  const prev = () => {
    setCurr(curr => (curr === 0 ? 0 : curr - 1));
  };
  const next = () => {
    setCurr(curr => (curr === (contentItems.length) / 4 ? 3 : curr + 1));
  };

  return (
    <div className='relative w-screen md:h-[65vw] h-[70vw] xl:h-screen mx-auto items-center justify-center flex'>
      <div className='items-center justify-between w-[93%] mx-auto flex'>
        {
          curr === 0 ? "" : (
            <button className={`pink-bg rounded-[100%] p-[1vw] outline-none cursor-pointer hover:bg-red-100 hover:scale-110 ${curr === 0 ? 'disable' : ''}`} onClick={prev}>
              <FaAngleLeft className='text-red-500' />
            </button>
          )
        }

        <div className='w-[84.9%] mx-auto flex items-center gap-[4vw] flex-col'>
          <div className='text-center flex-col flex gap-[0.8vw]'>
            <h1 className='font-bold text-black text-[2vw]'>Categories</h1>
            <div className='text-[0.7vw] text-[#524b4b] w-[40%] mx-auto'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod porro dolores nihil minus aperiam, eum quam, earum expedita, aspernatur suscipit ex? Atque, nesciunt vel quibusdam reprehenderit animi pariatur temporibus debitis?
            </div>
          </div>
          <div className='relative w-full overflow-hidden' >
            <div className='flex transition-transform ease-out duration-1000 gap-[1.4vw]' style={{ transform: `translateX(-${curr * 100}%)` }}>
              {contentItems.map((item, index) => (
                <div key={index} className={`h-[21vw] w-[25vw] transition-transform ease-out ${item.bgColor} rounded-[1vw] flex-shrink-0`} >
                  <div className='flex flex-col gap-[0.5vw] w-full h-full items-center rounded-[2vw]'>
                    <img src={item.imgSrc} alt="image for event" className='rounded-[1vw] h-[12vw] w-full object-cover' />
                    <div className='flex items-start flex-col justify-center gap-[0.1vw] mx-[1vw]'>
                      <h1 className='font-bold text-[1.3vw]'>{item.title}</h1>
                      <div className='text-[0.7vw] text-[#524b4b]'>{item.description}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {
          curr === (contentItems.length) / 5 ? "" : (
            <button className='pink-bg rounded-[100%] p-[1vw] outline-none cursor-pointer hover:bg-red-100 hover:scale-110' onClick={next}>
              <FaAngleRight className='text-red-500' />
            </button>
          )
        }
      </div>
    </div >
  );
};
