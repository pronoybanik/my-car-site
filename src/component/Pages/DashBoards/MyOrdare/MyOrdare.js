import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Loading from '../../Loading/Loading';

const MyOrdare = () => {

    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    const { data: bookings = [], isLoading , refetch} = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    });

    if (isLoading) {
        return <Loading></Loading>
    }

    const handleDelete = bookings => {
        fetch(`http://localhost:5000/bookings/${bookings._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch();
                toast.success(`Delete doctors ${bookings?.name}`)
            })
    }


    return (
        <div >
            <h2 className='text-1x2 font-bold'>All Order</h2>

            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>productName</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Location</th>
                            <th>Button</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            bookings?.map((booking, i) => <tr key={booking._id}>
                                <th>{i + 1}</th>
                                <th>{booking.productName}</th>
                                <td>{booking.name}</td>
                                <td>{booking.email}</td>
                                <td>{booking.mobile}</td>
                                <td>{booking.location}</td>
                                <td>
                                    <button  onClick={() => handleDelete(booking)} className='btn btn-error btn-sm text-white'>cancel</button>
                                </td>
                            </tr>) 
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrdare; <h2>All Order</h2>