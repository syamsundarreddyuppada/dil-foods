import Image from 'next/image';
import React from 'react';
import styles from './categoryCard.module.scss';

const CategoryCard = ({ image, title }) => {
    return (
        <div className={styles.cardWrap + ' ' + 'cursor-pointer relative w-full'}>
            <Image src={image} alt="" />
            <p>{title}</p>
        </div>
    );
};

export default CategoryCard;
