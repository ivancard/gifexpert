import React, { useEffect } from 'react';

export const GifGrid = ({ category }) => {
    useEffect(() => {
        getGif();
    }, []);

    const getGif = async () => {
        const url = `http://api.giphy.com/v1/gifs/search?api_key=eLMEMKV5EGubC9WLrIcH401M1bkps7fZ&q=%09cheeseburgers&limit=10`;
        const resp = await fetch(url);

        const { data } = await resp.json();
        const gifs = data.map((img) => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url,
            };
        });

        console.log(gifs);
    };

    return (
        <>
            <h3>{category}</h3>
        </>
    );
};
