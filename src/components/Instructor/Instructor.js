import React, { useEffect, useState } from 'react'
import InstructorItem from './InstructorItem'

const Instructor = () => {
    const [aboutData, setAboutData] = useState([])

    //fetching about us data
    useEffect(() => {
        fetch('/instructors.json')
        .then(res => res.json())
            .then(data => setAboutData(data))
    },[])
    return (
        <div className="max-w-screen-xl mx-auto my-12 px-6 mt-10">
            <h1 style={{ fontFamily: 'playfair-display'}}  className="text-4xl poppins pb-4 text-center font-semibold">Our Instructors</h1>
            <hr class="border-blueGrey-900 w-80 m-auto mb-3"/>
            <p className="text-gray-500 text-sm poppins text-center">We currently have the best Instructors in the town avaialable 24/7. <br/>
            All these dedicated, hard-working trainers will guide you to achive your goal mentally and emotionally.
            </p>

            {/* about us cards  */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
                {aboutData.map(item => (
                    <InstructorItem key={item.id} {...item} />
                ))}
            </div>
        </div>
    )
}

export default Instructor
