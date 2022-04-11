import React, { useEffect, useState } from 'react';
import useFetchGifs from '../hooks/useFetchGifs';

import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
    const { data: images, loading } = useFetchGifs(category);

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            {loading && (
                <div className="sk-circle">
                    <div className="sk-circle1 sk-child"></div>
                    <div className="sk-circle2 sk-child"></div>
                    <div className="sk-circle3 sk-child"></div>
                    <div className="sk-circle4 sk-child"></div>
                    <div className="sk-circle5 sk-child"></div>
                    <div className="sk-circle6 sk-child"></div>
                    <div className="sk-circle7 sk-child"></div>
                    <div className="sk-circle8 sk-child"></div>
                    <div className="sk-circle9 sk-child"></div>
                    <div className="sk-circle10 sk-child"></div>
                    <div className="sk-circle11 sk-child"></div>
                    <div className="sk-circle12 sk-child"></div>
                </div>
            )}
            <div className="card-grid">
                {images.map((img) => (
                    <GifGridItem key={img.id} {...img} />
                ))}
            </div>
        </>
    );
};
