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
            <div className='bg-black text-white flex min-h-screen'>

                <div className="w-1/4 bg-gray-900 p-8 flex flex-col items-center gap-8 fixed h-screen overflow-y-auto shadow-lg">
                    <img className='w-32 h-32 rounded-full object-cover border-2 border-[#60bd55]' src={logo} alt="Profile" />
                    <h2 className="text-3xl font-bold mt-4">elroumaissaa aalam</h2>
                    <p className='text-gray-400 text-center text-sm'>  frontend developer</p>

                    <p className='text-gray-400 text-center text-sm mt-2'>Based in <br /> casablanca, moroco</p>

                    <div className='flex gap-5 mt-6'>
                        <a href="#" className='text-gray-400 hover:text-[#60bd55] transition-colors duration-300'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334\" />
                        </svg></a>
                        <a href="#" className='text-gray-400 hover:text-[#60bd55] transition-colors duration-300'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8\" />
                        </svg></a>
                        <a href="#" className='text-gray-400 hover:text-[#60bd55] transition-colors duration-300'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951\" />
                        </svg></a>
                        <a href="#" className='text-gray-400 hover:text-[#60bd55] transition-colors duration-300'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z\" />
                        </svg></a>
                    </div>
                    <a href="#contact" className="mt-6">
                        <button className='px-8 py-3 bg-[#60bd55] text-white rounded-md hover:bg-white hover:text-black transition-colors duration-300 shadow-md text-sm'>
                            Let's Work Together
                        </button>
                    </a>
                </div>

                <div className='flex flex-col gap-[15vh] flex-grow p-8 ml-[25%] pt-20'>

                    <header className="flex justify-between items-center w-[75%] py-4 fixed top-0 left-[25%] bg-black z-10 px-8">
                        <nav>
                            <ul className="flex gap-6 text-sm">
                                <li><a href="#home" className="hover:text-[#60bd55] transition-colors duration-300">Home</a></li>
                                <li><a href="#project" className="hover:text-[#60bd55] transition-colors duration-300">Portfolio</a></li>
                                <li><a href="#about" className="hover:text-[#60bd55] transition-colors duration-300">About Me</a></li>
                                <li><a href="#contact" className="hover:text-[#60bd55] transition-colors duration-300">Contact</a></li>
                            </ul>
                        </nav>
                        <a href="#contact">
                            <button className='px-6 py-2 bg-[#60bd55] text-white rounded-md hover:bg-white hover:text-black transition-colors duration-300 shadow-md flex items-center gap-2 text-sm'>
                                Let's Talk <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-dots" viewBox="0 0 16 16">
                                    <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2\"/>
                                    <path d="M2.165 15.803l.02-.004c1.83-.363 2.948-.842 3.468-1.188.38-.25.961-.566 1.653-.789C8.223 13.38 9.306 13 10 13c1.466 0 2.476.497 3.168 1.068.579.473 1.11 1.145 1.522 1.89.057.101.1.17.119.197m.425-1 -.004-.02a1.03 1.03 0 0 0-.215-.41c-.16-.192-.373-.366-.607-.515C4.78 13.273 3.875 13 3 13c-1.133 0-2.046.288-2.725.691-.34.207-.647.463-.918.797-.008.02-.008.026-.008.047m.429 1L.8 14.1A2 2 0 0 1 0 12.4V1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v11.4a2 2 0 0 1-2 2h-3.19Z"/>
                                </svg>
                            </button>
                        </a>
                    </header>

                    <div id='home' className='flex flex-col justify-center h-screen animated-fade-in pt-20'>
                        <p className='text-gray-400 text-lg mb-4'>Let's meet</p>
                        <h1 className='text-6xl md:text-8xl font-bold leading-tight'>
                            I'm elroumaissaa aalam <br />
                          frontend developer <br />
                          and designer
                        </h1>
                        <div className="flex gap-4 mt-8">
                            <button className='px-8 py-3 bg-[#60bd55] text-white rounded-md hover:bg-white hover:text-black transition-colors duration-300 shadow-md'>
                                My Works
                            </button>
                            <button className='px-8 py-3 border border-[#60bd55] text-[#60bd55] rounded-md hover:bg-[#60bd55] hover:text-white transition-colors duration-300 shadow-md'>
                                Download CV
                            </button>
                        </div>
                    </div>

                    <div id='about' className='flex flex-col md:flex-row items-center justify-between min-h-screen animated-fade-in py-16'>
                        <div className='flex flex-col gap-6 w-full md:w-1/2 pr-8'>
                            <h2 className='text-4xl md:text-5xl font-bold mb-4'>About Me</h2>
                            <p className='text-base md:text-lg text-gray-300 leading-relaxed'>
                                Je m'appelle Roumaissaa Aalam, j'ai 20 ans et je suis actuellement en formation dans le domaine du développement web.
                                Durant cette formation, j'ai appris les bases du HTML, CSS, JavaScript, ainsi que des outils plus avancés comme SASS et React.
                            </p>
                            <p className='text-base md:text-lg text-gray-300 leading-relaxed'>
                                Avant cela, j'ai obtenu un baccalauréat en physique, suivi de deux années d'études en gestion commerciale et marketing.
                                Aujourd'hui, je combine mes connaissances en commerce avec mes compétences techniques pour construire des projets web modernes et interactifs.
                            </p>
                            <p className='text-base md:text-lg text-gray-300 leading-relaxed'>
                                Je suis passionnée par la technologie, le design, et l'apprentissage continu.
                                Mon objectif est de continuer à me perfectionner dans le développement web et de participer à des projets innovants, que ce soit en équipe ou en freelance.
                            </p>
                            <a href="#project" className="mt-6 self-start">
                                <button className='px-8 py-3 bg-white text-black rounded-md self-start hover:bg-[#60bd55] hover:text-white transition-colors duration-300 shadow-md'>
                                    Discover my work <span className='ml-2'>&darr;</span>
                                </button>
                            </a>
                        </div>
                        <div className='w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0'>
                            <img className='w-[80%] md:w-[30vw] h-auto rounded-lg object-cover shadow-lg border border-gray-700' src={logo} alt="About Me" />
                        </div>
                    </div>

                    <div id='skills' className='flex flex-col gap-10 animated-fade-in py-16'>
                        <h2 className='text-4xl md:text-5xl font-bold mb-6 text-center'>Technologies</h2>
                        <p className='text-gray-400 text-center text-lg mb-8'>My tech stack that powers every project.</p>
                        
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center'>
                            <div className='flex flex-col items-center gap-4 p-6 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition-colors duration-300 cursor-pointer w-40 h-40 justify-center transform hover:scale-105'>
                                <span className="text-white text-4xl font-bold">HTML</span>
                                <span className='text-sm font-medium text-gray-400'>HTML</span>
                            </div>
                            <div className='flex flex-col items-center gap-4 p-6 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition-colors duration-300 cursor-pointer w-40 h-40 justify-center transform hover:scale-105'>
                                <span className="text-white text-4xl font-bold">CSS</span>
                                <span className='text-sm font-medium text-gray-400'>CSS</span>
                            </div>
                            <div className='flex flex-col items-center gap-4 p-6 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition-colors duration-300 cursor-pointer w-40 h-40 justify-center transform hover:scale-105'>
                                <span className="text-white text-4xl font-bold">Sass</span>
                                <span className='text-sm font-medium text-gray-400'>Sass</span>
                            </div>
                            <div className='flex flex-col items-center gap-4 p-6 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition-colors duration-300 cursor-pointer w-40 h-40 justify-center transform hover:scale-105'>
                                <span className="text-white text-4xl font-bold">React</span>
                                <span className='text-sm font-medium text-gray-400'>React</span>
                            </div>
                            <div className='flex flex-col items-center gap-4 p-6 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition-colors duration-300 cursor-pointer w-40 h-40 justify-center transform hover:scale-105'>
                                <span className="text-white text-4xl font-bold">JS</span>
                                <span className='text-sm font-medium text-gray-400'>JavaScript</span>
                            </div>
                            <div className='flex flex-col items-center gap-4 p-6 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition-colors duration-300 cursor-pointer w-40 h-40 justify-center transform hover:scale-105'>
                                <span className="text-white text-4xl font-bold">Tailwind</span>
                                <span className='text-sm font-medium text-gray-400'>Tailwind</span>
                            </div>
                        </div>
                    </div>

                    <div id='project' className='flex flex-col gap-10 animated-fade-in py-16'>
                        <h2 className='text-4xl md:text-5xl font-bold mb-6'>My Projects</h2>

                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                            <div className='flex flex-col gap-4 border border-gray-700 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 bg-gray-800'>
                                <a className='block' href="https://elroumaissaa-aalam.github.io/-projet_fenal_js/">
                                    <img className='h-[30vh] w-full object-cover' src={resto} alt="Restaurantly" />
                                    <p className='p-4 text-lg font-semibold'>Restaurantly</p>
                                </a>
                            </div>
                            <div className='flex flex-col gap-4 border border-gray-700 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 bg-gray-800'>
                                <a className='block' href=" https://elroumaissaa-aalam.github.io/elroumaissaa-aalam-project-final/">
                                    <img className='h-[30vh] w-full object-cover' src={EasyFolio} alt="EasyFolio" />
                                    <p className='p-4 text-lg font-semibold'>EasyFolio</p>
                                </a>
                            </div>
                            <div className='flex flex-col gap-4 border border-gray-700 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 bg-gray-800'>
                                <a className='block' href="https://elroumaissaa-aalam.github.io/QuickStart/">
                                    <img className='h-[30vh] w-full object-cover' src={quickstart} alt="quickstart" />
                                    <p className='p-4 text-lg font-semibold'>quickstart</p>
                                </a>
                            </div>
                            <div className='flex flex-col gap-4 border border-gray-700 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 bg-gray-800'>
                                <a className='block' href=" https://elroumaissaa-aalam.github.io/tic_tac_toc/">
                                    <img className='h-[30vh] w-full object-cover' src={tic} alt="tic-tac-toe" />
                                    <p className='p-4 text-lg font-semibold'>tic-tac-toe</p>
                                </a>
                            </div>
                            <div className='flex flex-col gap-4 border border-gray-700 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 bg-gray-800'>
                                <a className='block' href=" https://elroumaissaa-aalam.github.io/calcule/">
                                    <img className='h-[30vh] w-full object-cover' src={calcule} alt="calcul" />
                                    <p className='p-4 text-lg font-semibold'>calcul</p>
                                </a>
                            </div>
                            <div className='flex flex-col gap-4 border border-gray-700 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 bg-gray-800'>
                                <a className='block' href="https://elroumaissaa-aalam.github.io/game/">
                                    <img className='h-[30vh] w-full object-cover' src={resto} alt="Restaurantly" />
                                    <p className='p-4 text-lg font-semibold'>Restaurantly</p>
                                </a>
                            </div>
                        </div>
                    </div>

                    <form ref={form} onSubmit={sendEmail} id='contact' className='flex flex-col items-center justify-center min-h-screen animated-fade-in py-16'>
                        <h2 className='text-4xl md:text-5xl font-bold mb-8'>Get in Touch</h2>
                        <div className='w-full max-w-lg bg-gray-800 shadow-2xl rounded-xl p-8 flex flex-col gap-6'>
                            <div className='flex flex-col md:flex-row gap-6 w-full'>
                                <div className='flex flex-col gap-2 w-full'>
                                    <label htmlFor="user_name" className='text-gray-400 text-sm'>Name:</label>
                                    <input id="user_name" className='w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-[#60bd55]' required type="text" name="user_name" />
                                </div>
                                <div className='flex flex-col gap-2 w-full'>
                                    <label htmlFor="user_email" className='text-gray-400 text-sm'>Email:</label>
                                    <input id="user_email" className='w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-[#60bd55]' type="email" required name="user_email" />
                                </div>
                            </div>
                            <div className='flex flex-col gap-2 w-full'>
                                <label htmlFor="message" className='text-gray-400 text-sm'>Message:</label>
                                <textarea id="message" name="message" className='w-full h-32 rounded-md p-3 bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-[#60bd55]' required />
                            </div>
                            <div className='flex justify-center mt-4'>
                                <input className='border border-[#60bd55] px-14 py-3 hover:bg-[#60bd55] hover:text-white transition-colors duration-300 rounded-md text-lg cursor-pointer' type="submit" value="Send Message" />
                            </div>
                        </div>
                    </form>

                </div>

            </div>
        </>
    );
};

export default Home;