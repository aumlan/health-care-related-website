import React, { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import ServiceItem from './ServiceItem';
import Skeleton from './Skeleton';

const Service = ({route}) => {
    const [loading, setLoading] = useState(false)
    const [foods] = useFetch(route);
    console.log(foods);
    

    //loading 
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        },1000)
    },[])



    
    return (
        <section className="my-12 max-w-screen-xl mx-auto px-6 mt-10">

            <div className="flex items-center justify-center space-x-6">
                <p style={{ fontFamily: 'playfair-display'}}  class="text-4xl font-semibold mb-5">Services We Offer</p>
                
            </div>
            <hr class="border-blueGrey-900 w-80 m-auto"/>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
                {foods.map(item => (
                    loading ? <Skeleton key={item.id} /> : <ServiceItem key={item.id} {...item} />
                ))}
            </div>
        </section>
    )
}

export default Service
