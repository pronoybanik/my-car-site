import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='grid grid-cols-2 gap-4'>
                <div className='border-solid border-2 border-sky-500 p-2 broder-round'>
                    <h1 className=' font-bold '>1. What are the different ways to manage a state in a React application?</h1>
                 <ul>
                    <li>1. Local state</li>
                    <li>2. Global state</li>
                    <li>3. Server state</li>
                    <li>4. URL state</li>
                 </ul>
                </div>
                <div className='border-solid border-2 border-sky-500 p-2 broder-round'>
                    <div className="font-bold">2.  How does prototypical inheritance work?</div>
                 <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the  of an object, we use Object.</p>
                </div>

                
            </div>
        </div>
    );
};

export default Blogs;