import React from 'react';
import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";
const About = () => {
    return (
        <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className='relative lg:w-1/2'>
                    <img src={person} alt="person" className=" w-4/5 rounded-lg shadow-2xl" />
                    <img src={parts} alt="parts" className="absolute right-5 top-1/2 w-3/5 border-[8px] border-white rounded-lg shadow-2xl" />
                </div>
                <div className='lg:w-1/2 p-4'>
                    <span className='font-bold text-orange-500'>About Us</span>
                    <h1 className="text-5xl font-bold my-5">We are qualified <br /> & of experience <br /> in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className="pb-6">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
                    <button className="btn  bg-regal-orange border-none hover:bg-orange-600">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;