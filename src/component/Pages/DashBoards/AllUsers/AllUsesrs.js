import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllUsesrs = () => {
    const { data: users, refetch } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await fetch('https://car-server-site.vercel.app/users', {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`

                }
            });
            const data = await res.json()
            return data
        }
    })

    const handleAdmin = id => {
        fetch(`https://car-server-site.vercel.app/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Make admin successful')
                    refetch()
                }
            })
    }

    const handleSeller = id => {
        fetch(`https://car-server-site.vercel.app/users/sellers/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Make admin successful')
                    refetch()
                }
            })
    }

   

    const handleDelete = users => {
        fetch(`https://car-server-site.vercel.app/users/${users?._id}`, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch();
                toast.success(`Delete Product ${users?.name}`)
            })
    }

    return (
        <div className='font-serif'>
            <h2 className='text-2xl font-bold my-4'>All Users</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specialty</th>
                            <th>Action</th>
                            <th>Sellers</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td className='font-bold'>{user.field}</td>
                                <td>
                                    {user?.role !== 'admin' && <button onClick={() => handleAdmin(user._id)} className="btn btn-outline btn-info text-white btn-sm" >Add Admin</button>}
                                </td>
                                <td>
                                    { 
                                     user?.roles !== 'seller' &&
                                    <button onClick={() => handleSeller(user._id)} className="btn btn-outline btn-success text-white btn-sm" >Add Sellers</button>
                                    }
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(user)} className="btn btn-error text-white btn-sm" >Delete</button>
                                </td>
                            </tr>)
                        }




                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllUsesrs;