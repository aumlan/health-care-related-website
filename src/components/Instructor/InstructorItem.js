import React from 'react';

const InstructorItem = ({ id, image, icon, title, description}) => {
    return (
        <>
<div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg mt-20 transform transition duration-700 hover:scale-105">
  <div className="flex justify-center md:justify-end -mt-20">
    <img className="w-30 h-32 object-cover rounded-full border-2 border-indigo-500" src={image} alt={title} />
  </div>
  <div>
  
    <h2 className="text-gray-800 text-3xl font-semibold ">{title}</h2>
    <p className=" text-justify	mt-3 text-gray-600">{description}</p>
  </div>
  {/*<div className="flex justify-end mt-4">*/}
  {/*  <a href="#" className="text-xl font-medium text-indigo-500">John Doe</a>*/}
  {/*</div>*/}
</div>

        </>
        
    );
}

export default InstructorItem
