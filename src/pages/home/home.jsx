import React, { useState, useEffect, useRef } from 'react';
import logo from "../../assets/images/logo.jpg"
import resto from "../../assets/images/resto.png"
import EasyFolio from "../../assets/images/EasyFolio.png"
import quickstart from "../../assets/images/quickstart.png"
import tic from "../../assets/images/tic.png"
import calcule from "../../assets/images/calcule.png"
import emailjs from '@emailjs/browser';

const Home = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_pa6xizh', 'template_pca88xe', form.current, {
                publicKey: '5aiP8-7AKantcQvGa',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <>
            <div className='bg-black w-[100%] h-[500vh] text-white  absolute  ' >

                <div className='absolute top-[55vh] left-[50vh] flex flex-col gap-[45vh]'>

                    <div className='text-[4vh]'>
                        <p>I'm elroumaissaa aalam</p>
                        <p>devloper</p>
                    </div>

                    <div className='flex justify-between h-[55vh]  w-[70vw]  '>
                        <div>
                            <img className='w-[20vw] h-[43vh] rounded-lg border border-black' src={logo} alt="" />
                        </div>
                        <div className=' text-[4vh] '>
                            <h1>about me</h1>
                            <p className=' w-[65vh] flex justify-end '>I am in my second year of management at the faculty of legal, economic, and social sciences in Ain Chock, and I am undergoing coding training.</p>
                        </div>
                    </div>

                    <div className='text-[4vh] flex flex-col gap-10 '>
                        <h1>My Projects</h1>


                        <div className='text-white  grid grid-cols-[repeat(3,1fr)] gap-[4vh]'>
                            <div className=' flex flex-col gap-6 border rounded-lg  w-[23vw]'>
                                <a className=' p-2 ' href="https://elroumaissaa-aalam.github.io/-projet_fenal_js/">
                                    <img className=' h-[35vh]  rounded-lg' src={resto} alt="" />Restaurantly</a>
                            </div>
                            <div className=' flex flex-col gap-6 border rounded-lg  w-[23vw]'>
                                <a className=' p-2 ' href=" https://elroumaissaa-aalam.github.io/elroumaissaa-aalam-project-final/">
                                    <img className=' h-[35vh]   rounded-lg' src={EasyFolio} alt="" />EasyFolio</a>
                            </div>
                            <div className=' flex flex-col gap-6 border rounded-lg  w-[23vw]'>
                                <a className=' p-2 ' href="https://elroumaissaa-aalam.github.io/QuickStart/">
                                    <img className=' h-[35vh]  rounded-lg' src={quickstart} alt="" />quickstart</a>
                            </div>
                            <div className=' flex flex-col gap-6 border rounded-lg  w-[23vw]'>
                                <a className=' p-2 ' href=" https://elroumaissaa-aalam.github.io/tic_tac_toc/">
                                    <img className=' h-[35vh]  rounded-lg' src={tic} alt="" />tic-tac-toe</a>
                            </div>
                            <div className=' flex flex-col gap-6 border rounded-lg  w-[23vw]'>
                                <a className=' p-2 ' href=" https://elroumaissaa-aalam.github.io/calcule/">
                                    <img className=' h-[35vh]  rounded-lg' src={calcule} alt="" />calcul</a>
                            </div>
                            <div className=' flex flex-col gap-6 border rounded-lg  w-[23vw]'>
                                <a className=' p-2 ' href="https://elroumaissaa-aalam.github.io/game/">
                                    <img className=' h-[35vh]  rounded-lg' src={resto} alt="" />Restaurantly</a>
                            </div>




                        </div>
                    
                    
                    
                    </div>
                    
                    
                    
                    <form ref={form} onSubmit={sendEmail} className='flex flex-col items-center justify-center h-[100vh] ' >
                    <div className=' w-[55vw]  h-[50vh] bg-white/30  shadow-2xl  rounded-xl p-4 '>
                        <div className='flex  flex-col  items-center justify-center  gap-[10vh] '>
                      <div className='flex gap-10' >
                              <label >Name : </label>
                            <input className='w-[35vh]  rounded-sm' required type="text" name="user_name" />
                            <label>Email : </label>
                            <input className='w-[35vh]  rounded-sm' type="email" required name="user_email" />
                      </div>
                      <div className='flex flex-col gap-7'>
                        <label >Message : </label>
                            <div className='flex flex-col gap-7 items-center'>

                            
                            <textarea name="message" className='w-[99vh]  h-[10vh] rounded-sm' required />
                            <input className='border border-[#60bd55] px-14 hover:bg-white hover:text-black rounded-md w-[35vh] ' type="submit" value="Send" />
                      </div>
                      </div>
                  
                        </div>
                    </div>
                </form>
                
                </div>

                


            </div>
        </>
    );
};

export default Home;