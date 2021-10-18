import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { AiOutlineCloudUpload } from 'react-icons/ai';

const AddReview = () => {
    const [error, setError] = useState(false);
    const [photo, setPhoto] = useState("");
    const history = useHistory()
    const { handleSubmit, register } = useForm();

    const onSubmit = async (data) => {
        const reviewData = {
            name: data.name,
            city: data.city,
            description: data.description,
            photo: photo,
        }
        console.log(reviewData);
        try {
            const res = await axios({
                method: 'post',
                url: 'https://fastexpress.herokuapp.com/api/reviews/addreview',
                data: reviewData
            });
            console.log('server side response', res)
            res && history.push("/dashboard")


        } catch (err) {
            setError(true);
            console.log(err);
        }
    }

    const handleImageUpload = (event) => {
        event.preventDefault();
        const imageData = new FormData();
        imageData.set('key', '2cb6728a169bdab0acf628bc5d829c2b');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then((response) => {

                setPhoto(response.data.data.display_url);
            })
            .catch((error) => {

            });

    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} class="flex w-full max-w-sm m-auto space-x-3">
                <div class="w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-white rounded-lg shadow dark:bg-gray-800">
                    <div class="mb-6 text-3xl font-light text-center text-gray-800 dark:text-white">
                        Give Feedback!
                    </div>
                    <div class="grid max-w-xl grid-cols-2 gap-4 m-auto">
                        <div class="col-span-2 lg:col-span-1">
                            <div class=" relative ">
                                <input type="text" id="contact-form-name" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Name"
                                    {...register("name")} />
                            </div>
                        </div>
                        <div class="col-span-2 lg:col-span-1">
                            <div class=" relative ">
                                <input type="text" id="contact-form-city" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="City"
                                    {...register("city")} />
                            </div>
                        </div>
                        <div class="col-span-2">
                            <label class="text-gray-700" for="name">
                                <textarea class="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" id="comment" placeholder="Enter your comment" rows="5" cols="40"
                                    {...register("description")} />
                            </label>
                        </div>
                        <div class="col-span-2">
                            <label
                                class="w-32 p-1 flex items-center justify-center rounded-lg shadow tracking-wide border border-blue cursor-pointer bg-red-500 hover:bg-red-600 text-white ease-linear transition-all duration-150">
                                <AiOutlineCloudUpload class="text-4xl" />
                                <span class="ml-3 text-center text-base font-semibold">Upload</span>
                                <input onChange={handleImageUpload} type='file' class="hidden" />
                            </label>
                        </div>
                        <div class="col-span-2 text-right">
                            <button type="submit" class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddReview;