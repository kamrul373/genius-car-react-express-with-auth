import React from 'react';
import "./BannerItem.css";
const BannerItem = ({ slide }) => {
    const { id, next, prev, img } = slide;
    return (

        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='banner-img '>
                <img src={img} className="w-full rounded-xl" alt="" />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2  right-5 bottom-5">
                <a href={`#slide${prev}`} className="btn btn-circle bg-[#FF3811] hover:bg-orange-700 border-none mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle bg-[#FF3811] border-none hover:bg-orange-700">❯</a>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2  left-5 top-1/2">
                <h1 className='text-5xl font-bold text-white'>Affordable <br /> Price For Car <br />Servicing </h1>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2  left-5 top-[65%]">
                <p className='text-white w-96'>There are many variations of passages of  available, but the majority have suffered alteration in some form </p>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2  left-5 top-3/4">
                <button className="btn btn-active bg-[#FF3811] border-none mr-5 hover:bg-orange-600">Discover More</button>
                <button className="btn hover:bg-regal-orange hover:border-regal-orange">Latest Project</button>
            </div>
        </div>

    );
};

export default BannerItem;