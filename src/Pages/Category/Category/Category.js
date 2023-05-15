import React from 'react';
import {useLoaderData} from 'react-router-dom';

const Category = () => {
    const news = useLoaderData();
    return (
        <div>
            <h3>This is category wise data: {news.length}</h3>
        </div>
    );
};

export default Category;