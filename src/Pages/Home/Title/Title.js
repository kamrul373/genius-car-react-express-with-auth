import React from 'react';

const Title = ({ data }) => {
    return (
        <div className='section-title text-center py-12'>
            <span className='text-orange-600 font-bold'>{data.subTitle}</span>
            <h2 className='text-5xl font-bold my-5'>{data.title}</h2>
            <p>the majority have suffered alteration in some form, by injected humour,  randomised <br /> words which don't look even slightly believable.</p>
        </div>
    );
};

export default Title;