import React, { useContext, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider } from 'firebase/auth';
import useToken from '../../hooks/useToken';




const SignUp = () => {
    const { createUser, updateUser, googleLogin } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [signError, setSignError] = useState('');
    // const localion = useLocation()
    const [createdUserEmail, setCreatedUserEmail] = useState('')

    const [token] = useToken(createdUserEmail)
    const navigate = useNavigate()

    if(token){
        navigate('/')
    }


    const provider = new GoogleAuthProvider();

    const handleGoogle = () => {
        googleLogin(provider)
            .then(result => {
                const user = result.user;
                console.log(user);
               
            })
            .catch(err => console.error(err))
    }

    const handleRegister = data => {
        console.log(data);
        createUser(data.email, data.password, data.field)
            .then(result => {
                const user = result.user;
                setSignError('')
                console.log(user);
                toast.success('create user successfully')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email, data.field)
                    })
                    .catch(err => console.log(err))

            })
            .then(error => {
                console.error(error);
                setSignError(error.message)

            })
    }



    const saveUser = (name, email, field) => {
        const user = { name, email, field };

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCreatedUserEmail(email)
                // setCreatedUserEmail(email)

            })
    }


    return (
        <div className='h-[600px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleRegister)}>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text"  {...register("name", {
                            required: 'Name is required',
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-800'>{errors.name?.message}</p>}
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email", {
                            required: 'email is required',
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-800'>{errors.email?.message}</p>}

                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">PassWord</span>
                        </label>
                        <input type="password" {...register("password", {
                            required: 'PassWord is required',
                            minLength: { value: 6, message: 'password must be 6 characters or longer' },
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'password must have special character and number' }

                        })} className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            <span className="label-text">Forget Password</span>
                        </label>
                        {errors.password && <p className='text-red-800'>{errors.password?.message}</p>}

                    </div>
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <select className="select select-bordered w-full max-w-xs"
                            {...register("field", { required: "Email Address is required" })}
                        >

                            <option>user</option>
                            <option>Byer</option>
                            <option>seller</option>
                        </select>

                    </div>
                    <div>
                        {
                            signError && <p className='text-red-600'>{signError}</p>
                        }
                    </div>
                    <input className='btn w-full' value='sign Up' type="submit" />
                </form>
                <p>Already have a account<Link className='text-secondary' to='/login'>Please Login</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogle} className="btn btn-outline w-full">Google LogIn</button>

            </div>


        </div>
    );
};

export default SignUp;