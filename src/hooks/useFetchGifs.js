import React, { useEffect, useState } from 'react';
import { getGif } from '../helpers/getGifs';

const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true,
    });

    useEffect(() => {
        getGif(category).then((img) =>
            setState({
                data: img,
                loading: false,
            })
        );
    }, [category]);

    // setTimeout(() => {
    //     () => {
    //         setState({
    //             data: [1, 2, 3, 4, 5, 6, 7],
    //             loading: false,
    //         });
    //     };
    // }, 3000);

    return state;
};

export default useFetchGifs;
