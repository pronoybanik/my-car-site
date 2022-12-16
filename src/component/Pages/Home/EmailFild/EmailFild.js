import React from 'react';
import { toast } from 'react-hot-toast';
import img from '../../../../images/appointment.png'

const EmailFild = () => {


    const handleFrom = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const feedback = form.bio.value;

        console.log(name, email, feedback);

        const data = {
            name,
            email,
            feedback
        }


        fetch('http://localhost:5000/feedback', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Feed Back is submit')
                }
            })
            form.reset('')


    }

    return (

        <div className='my-20'>
            <h1 className='text-4xl font-semibold text-center font-serif mb-10'>Give Your FeedBack</h1>

            <section className='py-10'
                style={{
                    background: `url(${img})`
                }}
            >
                <div className='text-center mb-10 '>
                    <h2 className='text-primary font-bold font-serif mb-2'>Contact Us</h2>
                    <h2 className='text-2xl text-white font-serif '>Help with us</h2>
                </div>

                <form onSubmit={handleFrom}>

                    <div className=' flex  items-center justify-center mb-2'>

                        <input name='name' type="text" placeholder="Name" className="input input-bordered w-full max-w-xs  " />
                    </div>
                    <div className='flex  items-center justify-center mb-2'>
                        <input name='email' type="text" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className='flex  items-center justify-center'>
                        <textarea name='bio' className="textarea textarea-bordered w-80 " placeholder="Bio"></textarea>
                    </div>
                    <div className='flex  items-center justify-center mt-4'>
                        <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white font-mono btn-sm font-bold">submit</button>
                    </div>
                </form>

            </section>
        </div>

    );
};

export default EmailFild;