import ProductsContainer from '@/container/ProductsContainer/ProductsContainer';
import { categoryTitleObject } from '@/data/category/category';

import React from 'react';

const CategoryPage = ({ productList }) => {
    console.log('router', productList);

    return (
        <div className="pb-9">
            <ProductsContainer
                titleDisplay={productList?.title}
                productsList={productList?.productsList}
            />
        </div>
    );
};

export default CategoryPage;

export async function getStaticPaths() {
    const paths = Object.entries(categoryTitleObject).map(([key]) => ({
        params: { category: key },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const productList = await categoryTitleObject[params.category];

    return {
        props: {
            productList,
        },
    };
}
