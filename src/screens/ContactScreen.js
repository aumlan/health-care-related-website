import React from 'react';

const HomeScreen = () => {
    return (
        <>
           
            
            <div style={{ 'text-align':'-webkit-center','marginTop': '30px'}}>
            <p style={{ fontFamily: 'playfair-display'}}  className="text-3xl mb-3 font-semibold"> Contact Us</p>
            <hr class="border-blueGrey-900 w-60 m-auto mb-8"/>
            
            <div style={{
                  backgroundColor: '#3b3e8d24',
                  padding: '5px',
                  borderRadius: '10px'
                }}  className="border-gray-600 w-full max-w-lg mb-3 sm:px-6">
            <form className="w-full max-w-lg my-10 sm:px-6">
              <div className="flex flex-wrap mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                    First Name
                  </label>
                  <input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Full Name"/>
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                    Last Name
                  </label>
                  <input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Full Name"/>
                </div>
              </div>
              <div className="flex flex-wrap  mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                    E-mail
                  </label>
                  <input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Full Name"/>
                </div>
              </div>
              <div className="flex flex-wrap mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                    Message
                  </label>
                  <textarea rows="4" cols="80" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" placeholder="Type a message..."></textarea>
                
                </div>
              </div>
              <div className="md:flex md:items-center">
                <div className="md:w-1/3">
                  <button className="shadow bg-blue-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded" type="button">
                    Send
                  </button>
                </div>
                <div className="md:w-2/3"></div>
              </div>
          </form>
            </div>
            </div>

            
           
        </>
    )
}

export default HomeScreen
