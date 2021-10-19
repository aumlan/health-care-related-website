import { useEffect, useState } from 'react';

const useFetch = (route) => {
    const [foods, setFoods] = useState([])
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data =>route==='home' ? setFoods(data.slice(0,6)) : setFoods(data) )
    }, [])
    return [foods]
}

export default useFetch
