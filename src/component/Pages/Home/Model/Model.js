import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Model = ({ carBooking,setCarBooking }) => {
    const { user } = useContext(AuthContext)
   const navigate = useNavigate()
    const { sellprice, title } = carBooking


    const handleBooking = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const productName = form.productName.value;
        const mobile = form.number.value;
        const location = form.location.value;

        const list = {
            name,
            email,
            productName,
            sellprice,
            mobile,
            location
        }
        console.log(list);

        fetch('https://car-server-site.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(list)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    setCarBooking(null)
                    toast.success('Booking confirmed')
                    // refetch()
                    navigate('/dashboard')
                    
                }
                else{
                  toast.error(data.message)
                }

            })

       
    }



    return (
        <div>

            <input type="checkbox" id="car-booking" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="car-booking" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleBooking}>

                        <h3 className="font-bold text-lg">{title}</h3>
                        <input name='name' defaultValue={user?.displayName} disabled type="text" placeholder="Type here" className="input input-bordered w-full mt-2" />
                        <input name='email' defaultValue={user?.email} disabled type="text" placeholder="Type here" className="input input-bordered w-full mt-2 " />
                        <input name='productName' defaultValue={title} disabled type="text" placeholder="Type here" className="input input-bordered w-full mt-2 " />
                        <input name='price' defaultValue={sellprice} disabled type="text" placeholder="Type here" className="input input-bordered w-full mt-2 " />
                        <input name='number' type="text" placeholder="Mobile Number" className="input input-bordered w-full mt-2 " />
                        <input name='location' type="text" placeholder="Location" className="input input-bordered w-full mt-2 " />
                        <input type="Submit" className='btn w-full mt-6' value="submit" />
                    </form>
                </div>
            </div>



        </div>
    );
};

export default Model;       