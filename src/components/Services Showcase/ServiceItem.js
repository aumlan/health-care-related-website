import React from 'react';
import { useHistory } from 'react-router-dom';

const ServiceItem = ({ image, title, description, price , type}) => {
    const history = useHistory()

    const handleRoute = () => {
        history.push(`/services/${title}`);
    }
    const wrapper = {
        display: "flex",
        // height: "100vh",
        placeItems: "center",
      };

    return (
        // <div className="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative">
        //     <span className="bg-red-100 border border-red-500 rounded-full text-primary text-sm poppins px-4 py-1 inline-block mb-4 ">{type}</span>
        //     <img className="w-64 mx-auto transform transition duration-300 hover:scale-105" src={image} alt="" />
        //     <div className="flex flex-col items-center my-3 space-y-2">
        //         <h1 className="text-gray-900 poppins text-lg">{title}</h1>
        //         <p className="text-gray-500 poppins text-sm text-center">{description.slice(0,50)}</p>
        //         <h2 className="text-gray-900 poppins text-2xl font-bold">${price}</h2>
        //         <button className="bg-primary text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105" onClick={handleRoute}>Order Now</button>
        //     </div>
        // </div>

        <>
            
            <div className="antialiased text-gray-900" style={wrapper} >
                <div>
                    
                    <img src={image} alt=" random imgee" className="w-full object-cover object-center rounded-lg shadow-md" />    
                    
                <div className="relative px-4 -mt-12  ">
                <div className="bg-white p-5 rounded-lg shadow-2xl">
                    {/* <div className="flex items-baseline">
                    <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                        New
                    </span>
                    <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                    2 baths  &bull; 3 rooms
                </div>  
                    </div> */}
                    
                    <h4 className="text-xl font-bold uppercase leading-tight truncate">{title}</h4>
                
                <div className="mt-2 font-bold">
                    <span style={{ color: 'crimson'}} class="text-4xl text-grey-darkest">${price}<span class="text-lg">/week</span></span>
                </div>
                <div className="mt-3 mb-3">
                    <span className="text-sm text-gray-600">{description.slice(0,80)} ...</span>
                </div> 
               
                <button class="w-full justify-center bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center focus:outline-none transform transition duration-200 hover:scale-105" onClick={handleRoute}>
                    <i className="fas fa-shopping-basket"></i>
                    <span>&nbsp; Book Service</span>
                </button>
                </div>
                </div>
                
                </div>
            </div>

        </>
        
    )
}

export default ServiceItem
