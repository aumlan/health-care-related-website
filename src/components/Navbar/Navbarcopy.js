import { Disclosure, Menu, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import React, { Fragment } from 'react';
import { Link, useHistory } from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import avatar from './avatar.jpg';
import logo from './logo1.png';

    

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
  
  
const Navbar = () => {
    const history = useHistory();
    const { user, signOutUser } = useAuth();




    return (
        // <header className={changeHeader ? "bg-white fixed z-50 top-0 left-0 w-full shadow-md transition duration-500" : "bg-transparent fixed z-50 top-0 left-0 w-full transition duration-500"}>
        //     <nav className="flex items-center max-w-screen-xl mx-auto px-6 py-3">
        //         {/* left  */}
        //         <div className="flex flex-grow">
        //             <img className="w-36 cursor-pointer" src={logo} alt="logo" onClick={() => history.push('/')} />
        //         </div>
        //         {/* right  */}
        //         {user.displayName ? (
        //             <>
        //                 <div className="flex items-center justify-end space-x-4">
        //                 <button className="poppins" onClick={() => history.push('/home')}>Home</button>
        //                 <button className="poppins" onClick={() => history.push('/about')}>Instructor Us</button>
        //                 <button className="poppins" onClick={() => history.push('/services')}>Service</button>
        //                 <button className="poppins" onClick={() => history.push('/contact')}>Contact</button>
        //                     <div className="relative flex cursor-pointer" onClick={() => history.push('/orders')}>
        //                         <span className="bg-primary w-6 h-6 rounded-full flex items-center justify-center text-white poppins absolute -right-2 -top-2">{order.length}</span>
        //                         <BsCart2 className="cursor-pointer w-6 h-6 text-gray-700" />
        //                     </div>
        //                     <img src={user.photoURL} alt={user.displayName} className="w-10 h-10 rounded-full" />
        //                     <p className="text-gray-700 poppins hidden md:block lg:block">{user.displayName}</p>
        //                     <FiLogOut className="cursor-pointer w-6 h-6 text-gray-700" onClick={signOutUser} />
        //                 </div>
        //             </>
        //         ) : (
        //             <>
        //                 <div className="flex items-center justify-end space-x-6">
        //                 <button className="poppins" onClick={() => history.push('/home')}>Home</button>
        //                 <button className="poppins" onClick={() => history.push('/about')}>Instructor Us XXX</button>
        //                 <button className="poppins" onClick={() => history.push('/services')}>Service</button>
        //                 <button className="poppins" onClick={() => history.push('/contact')}>Contact</button>
        //                     <button className="poppins" onClick={() => history.push('/signin')}>Sign In</button>
        //                     <button className=" bg-primary px-6 py-3 text-white poppins rounded-full ring-red-300 focus:outline-none focus:ring-4 transform transition duration-700 hover:scale-105" onClick={() => history.push('/signup')}>Sign Up</button>
        //                 </div>
        //             </>
        //         )}

        //     </nav>
        // </header>

        <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src={logo}
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src={logo}
                    alt="Workflow"
                  />
                  
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">

                  <button style={{color: 'white'}} className="'text-white-400 hover:bg-gray-700 hover:text-red',
                    'block px-3 py-2 rounded-md text-base font-medium'" onClick={() => history.push('/home')}>Home</button>
                    
                    <button style={{color: 'white'}} className="'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'" onClick={() => history.push('/instructors')}>Instructors</button>

<button style={{color: 'white'}} className="'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'" onClick={() => history.push('/services')}>Service</button>

<button style={{color: 'white'}} className="'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'" onClick={() => history.push('/contact')}>Contact</button>


                
                  </div>
                </div>
              </div>
              {/* <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                  </div> */}
                  { user.displayName ? (
                        
                        <Menu as="div" className="ml-3 relative">
                            <div>
                                <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                <span className="sr-only">Open user menu</span>
                                {
                                user.photoURL ? <img src={user.photoURL} alt={user.displayName} className="w-10 h-10 rounded-full" /> 
                                :
                                <img src={avatar} alt={user.displayName} className="w-10 h-10 rounded-full" />
                            }
                                </Menu.Button>
                                    <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <Menu.Item>
                                    {({ active }) => (
                                    <p disabled
                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                    >
                                        {user.displayName}
                                    </p>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                    <Link 
                                        to='/'
                                        onClick={signOutUser} 
                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                    >
                                        Sign out
                                    </Link>
                                    )}
                                </Menu.Item>
                                </Menu.Items>


                            </Transition>
                            </div>
                        </Menu>
                  
                   
                    ) : (
                       <>
                       <button style={{color: 'white'}} className="'text-white-400 hover:bg-gray-700 hover:text-red',
                    'block px-3 py-2 rounded-md text-base font-medium'" onClick={() => history.push('/signin')}>Sign In</button>
                    
                    <button style={{color: 'white'}} className="'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'" onClick={() => history.push('/signup')}>Sign Up</button>
                       </>
                     
                    )}
                  
                
              
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              

              
            <button style={{color: 'white'}} className="'text-white-400 hover:bg-gray-700 hover:text-red',
                    'block px-3 py-2 rounded-md text-base font-medium'" onClick={() => history.push('/home')}>Home</button>
                    
                    <button style={{color: 'white'}} className="'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'" onClick={() => history.push('/instructors')}>Instructors</button>

<button style={{color: 'white'}} className="'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'" onClick={() => history.push('/services')}>Service</button>

<button style={{color: 'white'}} className="'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'" onClick={() => history.push('/contact')}>Contact</button>








            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    )
}

export default Navbar




/* This example requires Tailwind CSS v2.0+ */




