import React from 'react';
import frame2 from '../img/Frame2.png'
import search from '../img/Group5.png'
import {MdFilterList} from 'react-icons/md'
export default function Header() {
    return (
        <section className="h-[87px] w-full ">
            <div className="md:flex py-4   justify-between">
               <img src={frame2} alt="Logo"/>
                <ul
                    className="grid grid-cols-4 gap-4 content-center font-bold text-sm text-gray-500 max-lg:hidden">
                    <li className="hover:text-black">THEME</li>
                    <li className="hover:text-black">HOME</li>
                    <li className="hover:text-black">ABOUT ME</li>
                    <li className="hover:text-black">PROJECT</li>
                </ul>
                <div
                    className="w-[45px] h-[45px] rounded-full border-2 place-content-center justify-items-center max-lg:hidden ">
                    <img src={search} alt="log"/></div>
                     <div
                className="  place-content-center justify-items-center lg:hidden ">
              <MdFilterList className='text-5xl'/>
            </div>
            </div>
           

        </section>
    )
}