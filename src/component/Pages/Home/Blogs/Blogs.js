import React from 'react';

const Blogs = () => {
    return (
        <div >
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

                <div className='border-solid border-2 border-sky-500 p-2 broder-round'>
                    <h1 className='font-bold'>3.  What is a unit test? Why should we write unit tests?</h1>
                    <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>

                </div>

                <div className='border-solid border-2 border-sky-500 p-2 broder-round'>
                    <h1 className='font-bold'>4.  React vs. Angular vs. Vue? </h1>
                    <div>Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option</div>

                </div>
            </div>
            <div className='border-solid border-2 mt-3 border-sky-500 p-2 broder-round'>
                <h1 className='font-bold'>Bullet Point</h1>
                <p>1- That is photographer site</p>
                <p>2- i am use tailwind and daisyUi</p>
                <p>3- jwt are use that site</p>
                <p>4- you have bye the photo that site</p>
                <p>5- user only note js</p>
                <h2>Live link: <strong>https://car-client-site.web.app/blogs</strong> </h2>
            </div>
        </div>
    );
};

export default Blogs;