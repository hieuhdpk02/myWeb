import React from 'react';
import Header from './components/Header';
import {BsInstagram, BsTiktok} from 'react-icons/bs'
import {AiOutlineFacebook, AiOutlineSlack} from 'react-icons/ai'
import logo from './img/group18860.png'
import line from './img/Rectangle5.png'
import img1 from './img/iPadMini.png'
import line2 from './img/Arrow7.png'
import group7 from './img/group7.png'






export default function App() {
   
    return (
        <div
            className='px-[5%]  place-content-center '
            data-aos-delay="0"
            data-aos-duration="400"
            data-aos-easing="ease">
            < Header/>
            <section
                className=" h-[650px] flex  place-content-center max-lg:inline-block max-lg:px-[20%] max-md:px-[20%] max-md:p-0"
                data-aos="fade-right"
                data-aos-once="true"
                data-aos-duration="1000"
                data-aos-delay="200">
                <div className='mt-[40px]'>
                    <div className='w-[650px] '>
                        <p className='text-[#0252CD] py-3'>HI, I AM SAMANTHA</p>
                       
                        <h1 className='text-[65px] font-bold -my-3'>Proffesional
                            <br/>
                            <span className="relative h-[159px] text-[65px] font-bold">
                                product designer
                                <img src={line} alt="Logo" className='part1'/>
                            </span>

                            based in USA</h1>
                        <p className="font-medium text-[#9D9D9D] py-5">Varius amet, integer tellus non
                            eget viverra. Ultrices tellus donec gravida id sed senectus dolor cursus sed.
                            Ullamcorper tellus ac cras nec, pretium laoreet duis.</p>
                    </div>
                    <div className='flex py-5'>
                        <button
                            className="bg-[#0252CD] text-[16px] font-bold rounded-[50px] h-[57px] w-[180px] text-white ">Contact Us</button>

                        <div className='px-5 text-xl py-5'>
                            <BsInstagram/></div>
                        <div className='px-5 text-xl py-5'><AiOutlineFacebook/></div>
                        <div className='px-5 text-xl py-5'><BsTiktok/></div>

                    </div>
                </div>
                <div
                    className='pt-[24px]'
                    data-aos="fade-up"
                    data-aos-once="true"
                    data-aos-duration="1000"
                    data-aos-delay="600">
                    <img src={logo} alt="Logo" className=''/>
                </div>
            </section>
            <section className=' place-content-center max-lg:mt-[60%] '>
                <div className='flex h-[122px] py-[40px] place-content-center '>
                    <img alt="logo"
                        className='mx-[15px]'
                        data-aos="fade-right"
                        data-aos-once="true"
                        data-aos-duration="1000"
                        src="http://porto-html-v1.surge.sh/assets/images/Logo%20(2).png"/>
                    <img alt="logo"
                        className='mx-[15px]'
                        data-aos="fade-right"
                        data-aos-once="true"
                        data-aos-duration="1000"
                        src="http://porto-html-v1.surge.sh/assets/images/Logo%20(2).png"/>
                    <img alt="logo"
                        className='mx-[15px]'
                        data-aos="fade-right"
                        data-aos-once="true"
                        data-aos-duration="1000"
                        src="http://porto-html-v1.surge.sh/assets/images/Logo%20(2).png"/>
                    <img alt="logo"
                        className='mx-[15px]'
                        data-aos="fade-right"
                        data-aos-once="true"
                        data-aos-duration="1000"
                        src="http://porto-html-v1.surge.sh/assets/images/Logo%20(2).png"/>
                    <img alt="logo"
                        className='mx-[15px]'
                        data-aos="fade-right"
                        data-aos-once="true"
                        data-aos-duration="1000"
                        src="http://porto-html-v1.surge.sh/assets/images/Logo%20(2).png"/>
                </div>
            </section>
            <div className='flex place-content-center'>
                <h1 className='font-bold text-[40px] place-content-center'>What service do I provide</h1>
            </div>
            <section className='place-content-center '>

                <div
                    className=' place-content-center my-[40px] grid gap-4 grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 xl:flex xl:place-content-center'>
                    <div
                        className='w-[250px] h-[340px] bg-[#f6f6f6] rounded-xl hover:bg-[#0252CD] hover:text-white ui mr-[30px] max-lg:w-[387px] '
                        data-aos="flip-left"
                        data-aos-once="true"
                        data-aos-duration="1000"
                        data-aos-delay="400">
                        <div className='p-[26px]'>
                            <BsInstagram size="60"/>
                            <h4 className='font-bold text-[24px] mt-[100px] my-4'>UI Design</h4>
                            <h5 className='text-[#9D9D9D] text-[12px]'>Varius amet, integer tellus non eget
                                viverra. Ultrices tellus donec gravida id sed senectus dolor cursus sed.</h5>
                        </div>
                    </div>
                    <div
                        className='w-[250px] h-[340px] bg-[#f6f6f6] rounded-xl hover:bg-[#0252CD] hover:text-white ui mr-[30px] mt-[40px] max-lg:w-[387px]'
                        data-aos="flip-left"
                        data-aos-once="true"
                        data-aos-duration="1000"
                        data-aos-delay="400">
                        <div className='p-[26px]'>
                            <BsInstagram size="60"/>
                            <h4 className='font-bold text-[24px] mt-[100px] my-4'>UI Design</h4>
                            <h5 className='text-[#9D9D9D] text-[12px]'>Varius amet, integer tellus non eget
                                viverra. Ultrices tellus donec gravida id sed senectus dolor cursus sed.</h5>
                        </div>
                    </div>
                    <div
                        className='w-[250px] h-[340px] bg-[#f6f6f6] rounded-xl hover:bg-[#0252CD] hover:text-white ui mr-[30px] max-lg:w-[387px]'
                        data-aos="flip-left"
                        data-aos-once="true"
                        data-aos-duration="1000"
                        data-aos-delay="400">
                        <div className='p-[26px]'>
                            <BsInstagram size="60"/>
                            <h4 className='font-bold text-[24px] mt-[100px] my-4'>UI Design</h4>
                            <h5 className='text-[#9D9D9D] text-[12px]'>Varius amet, integer tellus non eget
                                viverra. Ultrices tellus donec gravida id sed senectus dolor cursus sed.</h5>
                        </div>
                    </div>
                    <div
                        className='w-[250px] h-[340px] bg-[#f6f6f6] rounded-xl hover:bg-[#0252CD] hover:text-white ui mt-[40px] max-lg:w-[387px]'
                        data-aos="flip-left"
                        data-aos-once="true"
                        data-aos-duration="1000"
                        data-aos-delay="400">
                        <div className='p-[26px]'>
                            <BsInstagram size="60"/>
                            <h4 className='font-bold text-[24px] mt-[100px] my-4'>UI Design</h4>
                            <h5 className='text-[#9D9D9D] text-[12px] '>Varius amet, integer tellus non eget
                                viverra. Ultrices tellus donec gravida id sed senectus dolor cursus sed.</h5>
                        </div>
                    </div>
                </div>
            </section>
            <section className='flex  place-content-center max-lg:inline-block'>
                <div
                    className='w-[620px] h-[600px] rounded-xl bg-[#151E2C] max-lg:w-max'
                    data-aos="fade-right"
                    data-aos-once="true"
                    data-aos-duration="1000"
                    data-aos-delay="400">
                    <div className='p-[160px]'>
                        <h1 className='text-white font-bold text-[40px] w-[364px] '>Working
                            <br/>experience</h1>
                        <p className='text-[#9D9D9D] w-[364px] '>Tincidunt purus lacus nascetur nunc
                            commodo. Netus at dignissim urna quam. Imperdiet proin sapien posuere egestas.
                            Tristique nam magna velit odio ullamcorper eget donec.</p>
                    </div>
                </div>
                <div
                    className='grid grid-rows-4 grid-flow-col gap-4'
                    data-aos-once="true"
                    data-aos-duration="1000"
                    data-aos="fade-up"
                    data-aos-delay="100">
                    <div className='w-[620px] h-[125px] slack border-2 ml-8 rounded-xl'>
                        <div className='p-[23px] flex '>
                            <AiOutlineSlack size="70"/>
                            <div className='pt-2'>
                                <h1 className='font-bold text-[24px] '>Slack</h1>
                                <p className='text-[#9D9D9D] font-semibold'>Product Design - 4 Years Experince</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-[620px] h-[125px] slack border-2 ml-8 rounded-xl'>
                        <div className='p-[23px] flex '>
                            <AiOutlineSlack size="70"/>
                            <div className='pt-2'>
                                <h1 className='font-bold text-[24px] '>Slack</h1>
                                <p className='text-[#9D9D9D] font-semibold'>Product Design - 4 Years Experince</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-[620px] h-[125px] slack border-2 ml-8 rounded-xl'>
                        <div className='p-[23px] flex '>
                            <AiOutlineSlack size="70"/>
                            <div className='pt-2'>
                                <h1 className='font-bold text-[24px] '>Slack</h1>
                                <p className='text-[#9D9D9D] font-semibold'>Product Design - 4 Years Experince</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-[620px] h-[125px] slack border-2 ml-8 rounded-xl'>
                        <div className='p-[23px] flex '>
                            <AiOutlineSlack size="70"/>
                            <div className='pt-2'>
                                <h1 className='font-bold text-[24px] '>Slack</h1>
                                <p className='text-[#9D9D9D] font-semibold'>Product Design - 4 Years Experince</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='text-center pt-[100px]'>

                    <span className="relative h-[159px] text-[40px] font-bold">
                        Featured Projects
                        <img src={line} alt="Logo" className='part1'/>

                    </span>
                </div>

                <div
                    className='flex place-content-center py-12'
                    data-aos="fade-left"
                    data-aos-once="true"
                    data-aos-duration="1000">
                    <div className='h-[439px] bg-[#56b0b9] w-[1270px]  rounded-3xl flex py-9 px-14'>
                        <div className='w-[500px]'>
                            <h1 className="relative h-[159px] text-[40px] font-bold text-white pt-10">Real Estate
                                <br/>
                                Agency Website</h1>
                            <div>
                                <button
                                    className='w-[125px] h-[47px] bg-[#78c0c7] rounded-md text-white font-medium text-[15px]'>UIUX Design</button>
                                <button
                                    className='w-[100px] h-[47px] bg-[#78c0c7] rounded-md text-white ml-2  font-medium text-[15px]'>Branding</button>
                            </div>
                            <div className='flex '>
                                <h1 className='relative h-[159px] text-[18px] font-bold text-white pt-12'>See Detail Project</h1>
                                <img src={line2} className='w-[50px] h-2 mt-14 ml-3' alt="logo"/>
                            </div>
                        </div>
                        <div>
                            <img src={img1} alt="logo"/>
                        </div>
                    </div>

                </div>
                <div
                    className='flex place-content-center'
                    data-aos="fade-right"
                    data-aos-once="true"
                    data-aos-duration="1000">
                    <div className='h-[439px] bg-[#56b0b9] w-[1270px]  rounded-3xl flex py-9 px-14'>
                        <div className='w-[500px]'>
                            <h1 className="relative h-[159px] text-[40px] font-bold text-white pt-10">Real Estate
                                <br/>
                                Agency Website</h1>
                            <div>
                                <button
                                    className='w-[125px] h-[47px] bg-[#78c0c7] rounded-md text-white font-medium text-[15px]'>UIUX Design</button>
                                <button
                                    className='w-[100px] h-[47px] bg-[#78c0c7] rounded-md text-white ml-2  font-medium text-[15px]'>Branding</button>
                            </div>
                            <div className='flex '>
                                <h1 className='relative h-[159px] text-[18px] font-bold text-white pt-12'>See Detail Project</h1>
                                <img src={line2} className='w-[50px] h-2 mt-14 ml-3'  alt="logo"/>
                            </div>
                        </div>
                        <div>
                            <img src={img1} alt="logo"/>
                        </div>
                    </div>

                </div>
                <div
                    className='flex place-content-center py-12'
                    data-aos="fade-left"
                    data-aos-once="true"
                    data-aos-duration="1000">
                    <div className='h-[439px] bg-[#56b0b9] w-[1270px]  rounded-3xl flex py-9 px-14'>
                        <div className='w-[500px]'>
                            <h1 className="relative h-[159px] text-[40px] font-bold text-white pt-10">Real Estate
                                <br/>
                                Agency Website</h1>
                            <div>
                                <button
                                    className='w-[125px] h-[47px] bg-[#78c0c7] rounded-md text-white font-medium text-[15px]'>UIUX Design</button>
                                <button
                                    className='w-[100px] h-[47px] bg-[#78c0c7] rounded-md text-white ml-2  font-medium text-[15px]'>Branding</button>
                            </div>
                            <div className='flex '>
                                <h1 className='relative h-[159px] text-[18px] font-bold text-white pt-12'>See Detail Project</h1>
                                <img src={line2}  alt="logo" className='w-[50px] h-2 mt-14 ml-3'/>
                            </div>
                        </div>
                        <div>
                            <img src={img1} alt="logo"/>
                        </div>
                    </div>

                </div>

            </section>
            <section
                data-aos="fade-right"
                data-aos-once="true"
                data-aos-duration="1000"
                data-aos-delay="200">
                <div>
                    <div>
                        <style
                            dangerouslySetInnerHTML={{
                                __html: "@import url('https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3" +
                                        ".45/css/materialdesignicons.min.css')"
                            }}/>
                        <div
                            className="min-w-screen min-h-screen bg-gray-50 flex items-center justify-center py-5">
                            <div
                                className="w-full bg-white border-t border-b border-gray-200 px-5 py-16 md:py-24 text-gray-800">
                                <div className="w-full max-w-6xl mx-auto">
                                    <div className="text-center max-w-xl mx-auto">
                                        <h1 className="text-6xl md:text-7xl font-bold mb-5 text-gray-600">What people
                                            <br/>are saying.</h1>
                                        <h3 className="text-xl mb-5 font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                                        <div className="text-center mb-10">
                                            <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"/>
                                            <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"/>
                                            <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"/>
                                            <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"/>
                                            <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"/>
                                        </div>
                                    </div>
                                    <div className="-mx-3 md:flex items-start">
                                        <div className="px-3 md:w-1/3">
                                            <div
                                                className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                                <div className="w-full flex mb-4 items-center">
                                                    <div
                                                        className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                                        <img src="https://i.pravatar.cc/100?img=1" alt="alt"/>
                                                    </div>
                                                    <div className="flex-grow pl-3">
                                                        <h6 className="font-bold text-sm uppercase text-gray-600">Kenzie Edgar.</h6>
                                                    </div>
                                                </div>
                                                <div className="w-full">
                                                    <p className="text-sm leading-tight">
                                                        <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Lorem
                                                        ipsum dolor sit amet consectetur adipisicing elit. Quos sunt ratione dolor
                                                        exercitationem minima quas itaque saepe quasi architecto vel! Accusantium, vero
                                                        sint recusandae cum tempora nemo commodi soluta deleniti.<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div
                                                className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                                <div className="w-full flex mb-4 items-center">
                                                    <div
                                                        className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                                        <img src="https://i.pravatar.cc/100?img=2" alt="alt"/>
                                                    </div>
                                                    <div className="flex-grow pl-3">
                                                        <h6 className="font-bold text-sm uppercase text-gray-600">Stevie Tifft.</h6>
                                                    </div>
                                                </div>
                                                <div className="w-full">
                                                    <p className="text-sm leading-tight">
                                                        <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Lorem
                                                        ipsum, dolor sit amet, consectetur adipisicing elit. Dolore quod necessitatibus,
                                                        labore sapiente, est, dignissimos ullam error ipsam sint quam tempora vel.<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-3 md:w-1/3">
                                            <div
                                                className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                                <div className="w-full flex mb-4 items-center">
                                                    <div
                                                        className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                                        <img src="https://i.pravatar.cc/100?img=3" alt="alt"/>
                                                    </div>
                                                    <div className="flex-grow pl-3">
                                                        <h6 className="font-bold text-sm uppercase text-gray-600">Tommie Ewart.</h6>
                                                    </div>
                                                </div>
                                                <div className="w-full">
                                                    <p className="text-sm leading-tight">
                                                        <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Lorem
                                                        ipsum dolor sit amet, consectetur adipisicing elit. Vitae, obcaecati ullam
                                                        excepturi dicta error deleniti sequi.<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div
                                                className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                                <div className="w-full flex mb-4 items-center">
                                                    <div
                                                        className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                                        <img src="https://i.pravatar.cc/100?img=4" alt="alt"/>
                                                    </div>
                                                    <div className="flex-grow pl-3">
                                                        <h6 className="font-bold text-sm uppercase text-gray-600">Charlie Howse.</h6>
                                                    </div>
                                                </div>
                                                <div className="w-full">
                                                    <p className="text-sm leading-tight">
                                                        <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Lorem
                                                        ipsum dolor sit amet consectetur adipisicing elit. Architecto inventore
                                                        voluptatum nostrum atque, corrupti, vitae esse id accusamus dignissimos neque
                                                        reprehenderit natus, hic sequi itaque dicta nisi voluptatem! Culpa, iusto.<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-3 md:w-1/3">
                                            <div
                                                className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                                <div className="w-full flex mb-4 items-center">
                                                    <div
                                                        className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                                        <img src="https://i.pravatar.cc/100?img=5" alt="alt"/>
                                                    </div>
                                                    <div className="flex-grow pl-3">
                                                        <h6 className="font-bold text-sm uppercase text-gray-600">Nevada Herbertson.</h6>
                                                    </div>
                                                </div>
                                                <div className="w-full">
                                                    <p className="text-sm leading-tight">
                                                        <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Lorem
                                                        ipsum dolor sit amet consectetur adipisicing elit. Nobis, voluptatem porro
                                                        obcaecati dicta, quibusdam sunt ipsum, laboriosam nostrum facere exercitationem
                                                        pariatur deserunt tempora molestiae assumenda nesciunt alias eius? Illo, autem!<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div
                                                className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                                <div className="w-full flex mb-4 items-center">
                                                    <div
                                                        className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                                        <img src="https://i.pravatar.cc/100?img=6" alt="alt"/>
                                                    </div>
                                                    <div className="flex-grow pl-3">
                                                        <h6 className="font-bold text-sm uppercase text-gray-600">Kris Stanton.</h6>
                                                    </div>
                                                </div>
                                                <div className="w-full">
                                                    <p className="text-sm leading-tight">
                                                        <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Lorem
                                                        ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iusto, explicabo,
                                                        cupiditate quas totam!<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className='place-content-center flex'>
                <div
                    className='bg-[#99e0ff] rounded-3xl relative text-[#141c2c] max-lg:h-[300px] h-[427px] w-[1270px] '
                    data-aos="fade-left"
                    data-aos-once="true"
                    data-aos-duration="1000"
                    data-aos-delay="200">
                    <img src={group7} alt="footer" className=''/>
                    <h1
                        className='text-[65px] font-bold absolute inset-y-0 left-0 mt-[100px] ml-16 max-lg:text-[50px] max-md:text-[30px]'>Have a project idea to
                        <br/>
                        <span className="relative h-[159px] text-[65px] font-bold max-lg:text-[50px] max-md:text-[30px]">
                            collaborate with?

                        </span>

                    </h1>
                    <button
                        className="bg-white text-[15px] font-bold rounded-[50px] h-[57px] w-[180px] text-black mb-[70px]  absolute inset-y-0 left-0 mt-[300px] ml-16 box max-lg:mt-[230px] ">Contact Us</button>
                </div>
            </section>
        </div>
    )
}
