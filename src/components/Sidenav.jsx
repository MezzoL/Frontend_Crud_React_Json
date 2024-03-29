import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail } from 'react-icons/ai';
import { GrProjects } from 'react-icons/gr';

const Sidenav = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(false);
    };

    const iconColor = 'black';

    return (
        <div>
            <AiOutlineMenu 
            onClick={() => setNav(!nav)} 
            className='absolute top-4 right-4 z-[99] md:hidden'
            color={iconColor} />
            {nav ? (
                <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
                    <a href='#main'
                    onClick={handleNav}
                    className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <AiOutlineHome size={20} color={iconColor}/>
                        <span className='pl-4 text-gray-800'>Home</span>
                    </a>                        
                    <a href='#crud'
                    onClick={handleNav}
                    className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <GrProjects size={20} color={iconColor}/>
                        <span className='pl-4 text-gray-800'>Crud</span>
                    </a>
                </div>        
                ) : ('')
            }
            <div className='md:block hidden fixed top-[25%] z-10'>
                <div className='flex flex-col'>
                    <a href='#main' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineHome size={20} color={iconColor} />
                    </a>                    
                    <a href='#crud' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <GrProjects size={20} color={iconColor} />
                    </a>                    
                </div>
            </div>
        </div>
    );
};

export default Sidenav