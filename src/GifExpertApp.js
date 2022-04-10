import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
    const [categories, setcategories] = useState(['Dragon Ball']);

    return (
        <>
            <h2>Gif Expert App</h2>
            <AddCategory setcategories={setcategories} />
            <hr />
            <button>Agregar</button>
            <ol>
                {categories.map((cat) => (
                    <GifGrid category={cat} key={cat} />
                ))}
            </ol>
        </>
    );
};

GifExpertApp.propTypes = {};

export default GifExpertApp;
