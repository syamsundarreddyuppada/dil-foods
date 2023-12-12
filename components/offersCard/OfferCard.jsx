import Image from 'next/image';
import React from 'react';
import styles from './offer.module.scss';
import Link from 'next/link';

const OfferCard = ({ offer, image, style }) => {
    return (
        <div
            className={['flex justify-center flex-col', styles.offer].join(' ')}
            style={{ background: style }}
        >
            <Image src={image} alt="" />
            <span>Hurry Up!</span>
            <p>{offer}</p>
            <p className="sale">Sale</p>
            <Link href={'/category/Chrismas-Sale'}>
                <button>shop now</button>
            </Link>
        </div>
    );
};

export default OfferCard;
