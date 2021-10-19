import React from 'react'
import { Link } from 'react-router-dom'
import Brand from '../Form/Brand'

const Footer = () => {
    return (
        // <footer className="bg-gray-800 px-6 py-12">
        //     <div className=" max-w-screen-xl mx-auto px-6">
        //         <MainFooter />
        //         <BottomFooter />
        //     </div>
        // </footer>
        <footer style={{backgroundColor: '#818cd952'}} class="relative pt-8 pb-3">
            <div class="container mx-auto px-4">
                <div class="flex flex-wrap text-left lg:text-left">
                <div class="w-full lg:w-6/12 px-4">
                    <Brand/>
                    <h4 class="text-3xl fonat-semibold text-blueGray-700">Let's keep in touch!</h4>
                    <h5 class="text-lg mt-0 mb-2 text-blueGray-600">
                    Best Yoga Service in Town.
                    </h5>
                    <div class="mt-3 lg:mb-0 mb-6">
                    <button class="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                        <i class="fab fa-twitter"></i></button><button class="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                        <i class="fab fa-facebook-square"></i></button><button class="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                        <i class="fab fa-dribbble"></i></button><button class="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                        <i class="fab fa-github"></i>
                    </button>
                    </div>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                    <div class="flex flex-wrap items-top mb-2">
                    <div class="w-full lg:w-6/12 px-4 ml-auto">
                        <span class="block uppercase text-blueGray-500 text-xl font-bold mb-4">Menu</span>
                        <ul class="list-unstyled">
                        <li>
                            <Link class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-md" to='/home'>Home</Link>
                        </li>
                        <li>
                            <Link class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-md" to='/home'>About Us</Link>
                        </li>
                        <li>
                            <Link class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-md" to='/services'>Services</Link>
                        </li>
                        <li>
                            <Link class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-md" to='/about'>Instructors</Link>
                        </li>
                        <li>
                            <Link class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-md" to='/contact'>Contacts</Link>
                        </li>
                        </ul>
                    </div>
                    <div class="w-full lg:w-6/12 px-4 ml-auto">
                        <span class="block uppercase text-blueGray-500 text-xl font-bold mb-4">Other Resources</span>
                        <ul class="list-unstyled">
                        <li>
                            <Link class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-md" to="/">MIT License</Link>
                        </li>
                        <li>
                            <Link class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-md" to="/">Terms &amp; Conditions</Link>
                        </li>
                        <li>
                            <Link class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-md" to="/">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-md" to='/contact'>Contact Us</Link>
                        </li>
                        
                        </ul>
                    </div>
                    
                    </div>
                </div>
                </div>
                <hr class="my-2 border-blueGray-300"/>
                <div class="flex flex-wrap items-center md:justify-between justify-center">
                <div class="w-full md:w-4/12 px-4 mx-auto text-center">
                    <div class="text-sm text-blueGray-500 font-semibold py-1">
                        Copyright © <span id="get-current-year">2021</span> Clifton Hill Yoga By
                        <a href="https://www.facebook.com/abrar.aumlan" class="text-blueGray-500 hover:text-blueGray-800"> Aumlan</a>
                    </div>
                </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
