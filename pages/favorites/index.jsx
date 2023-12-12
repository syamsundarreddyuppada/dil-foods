import React from 'react';
import styles from './favorites.module.scss';
import TitleDisplay from '@/components/titleDisplay/TitleDisplay';
import { useSelector } from 'react-redux';
import ProductCard from '@/components/productCard/ProductCard';
import SEO from '@/components/Seo/Seo';
const Favorite = () => {
    const { favoriteItems } = useSelector((state) => state?.productItems);
    return (
        <div className="container">
            <SEO
                title="Favorite"
                description="Landing page of favorite products"
                keywords="favorite products"
            />
            <TitleDisplay title="Favorite Products" />
            <div className={styles.productsList}>
                {!favoriteItems?.length ? (
                    <p className="flex justify-center w-full text-3xl">
                        {' '}
                        No Favorite Items Available
                    </p>
                ) : (
                    ''
                )}

                {favoriteItems?.map((item, index) => (
                    <ProductCard key={index} productItem={item} isFav={true} />
                ))}
            </div>
        </div>
    );
};

export default Favorite;
