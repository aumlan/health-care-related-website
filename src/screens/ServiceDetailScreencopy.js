import {  useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Back from '../routes/Back';

const FoodDetailScreen = () => {
    const { title } = useParams();
    const [foods] = useFetch();



    return (
        <main className="max-w-screen-xl mx-auto px-6 my-16">

            <Back />
            {foods?.filter(item => item.title === title)?.map((food) => (
                <div class="items-center flex flex-wrap">
                <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
                    <img alt="..." class="max-w-full rounded-lg shadow-lg" src={`../../${food.image}`} />
                </div>
                <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
                    <div class="md:pr-12">
                    <div class="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
                        <i class="fas fa-dumbbell text-xl"></i>
                    </div>
                    <h3 class="text-3xl font-semibold">{food.title}</h3>
                    <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
                    {food.description}
                    </p>
                    <ul class="list-none mt-4">
                    <li class="py-2">
                        <div class="flex items-center">
                            <div>
                            <span class="text-md font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                            <i class="fas fa-money-bill-wave"></i>
                            </span>
                            </div>
                            <div>
                            <h4 class="text-red-600 font-semibold text-2xl text-blueGray-500">
                                ${ food.price }
                            </h4>
                            </div>
                        </div>
                        </li>

                        <li class="py-2">
                        <div class="flex items-center">
                            <div>
                            <span class="text-md font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                            <i class="fas fa-layer-group"></i>
                            </span>
                            </div>
                            <div>
                            <h4 class="font-semibold text-xl text-blueGray-500">
                                { food.type }
                            </h4>
                            </div>
                        </div>
                        </li>
                        
                    </ul>
                    </div>
                </div>
            </div>
            ))}

        </main>
    )
}

export default FoodDetailScreen
