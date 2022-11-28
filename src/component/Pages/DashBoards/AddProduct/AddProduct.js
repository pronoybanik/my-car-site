import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate()
    const imageHostKey = process.env.REACT_APP_imgbb;

    const handleAddItem = data => {
        const image = data.image[0]

        const formData = new FormData();
        formData.append('image', image);
        // console.log(formData);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const products = {
                        name: data.product,
                        number: data.number,
                        location: data.location,
                        price: data.price,
                        used: data.use,
                        photo: imgData.data.url

                    }

                    fetch('https://car-server-site.vercel.app/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`

                        },
                        body: JSON.stringify(products)

                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            toast.success(`product is added success`)
                            navigate('/')
                        })


                }
            })

    }

    return (
        <div className='font-serif'>
            <h1 className=' text-2xl font-bold my-4'>Add Products</h1>

            <div className='h-[600px] flex justify-center items-center'>
                <div className='w-96 p-7'>
                    <h2 className='text-xl text-center'>Add Item</h2>
                    <form onSubmit={handleSubmit(handleAddItem)}>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text font-medium">Product Name</span>
                            </label>
                            <input type="text"
                                {...register("product", {
                                    required: "not found",
                                })}
                                className="input input-bordered w-full max-w-xs" />
                            {errors.product && <p className='text-red-800'>{errors.product?.message}</p>}

                        </div>

                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text font-medium">Mobile Number</span>
                            </label>
                            <input type="text"
                                {...register("number", {
                                    required: "not found",
                                })}
                                className="input input-bordered w-full max-w-xs" />
                            {errors.name && <p className='text-red-800'>{errors.name?.message}</p>}

                        </div>

                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text font-medium">Location</span>
                            </label>



                            <input type="text"
                                {...register("location", {
                                    required: "Add location",
                                })}
                                className="input input-bordered w-full max-w-xs" />
                            {errors.location && <p className='text-red-800'>{errors.location?.message}</p>}

                        </div>

                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text font-medium">Which type of car do you want to bye?</span>
                            </label>
                            <select className="select select-bordered w-full max-w-xs"
                                {...register("use", {
                                    required: "Add time",
                                })}                        >

                                <option>New</option>
                                <option>Second Hand</option>
                                <option>Reconditioned</option>
                            </select>

                           
                            {errors.price && <p className='text-red-800'>{errors.price?.message}</p>}

                        </div>



                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text font-medium">Price</span>
                            </label>
                            <input type="text"
                                {...register("price", {
                                    required: "Add price",
                                })}
                                className="input input-bordered w-full max-w-xs" />
                            {errors.price && <p className='text-red-800'>{errors.price?.message}</p>}

                        </div>

                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text font-medium">Add images</span>
                            </label>
                            <input type="file"
                                {...register("image", {
                                    required: "photo is required",
                                })}
                                className="input " />
                            {errors.image && <p className='text-red-800'>{errors.image?.message}</p>}

                        </div>


                        <input className='btn w-full' value='submit' type="submit" />
                    </form>

                </div>
            </div>

        </div>
    );
};

export default AddProduct;