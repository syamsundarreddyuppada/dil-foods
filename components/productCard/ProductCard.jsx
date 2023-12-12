import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styles from './productCard.module.scss';
import { productSizes } from '@/data/products/products';
import img1 from '@/assets/fav1.svg';
import img2 from '@/assets/fav2.svg';
import img3 from '@/assets/fav3.svg';
import { useSelector, useDispatch } from 'react-redux';
import {
    addToCart,
    addToFavorite,
    assignCartData,
} from '@/store/productReducer/productReducer';

const ProductCard = ({ productItem, isCheckout, unqId, isFav }) => {
    const { cartItems } = useSelector((state) => state?.productItems);
    const dispatch = useDispatch();
    const [cartIcon, setCartIcon] = useState(true);
    const [favoIcon, setFavoIcon] = useState(true);

    const [countSize, setCountSize] = useState(null);
    const [counter, setCounter] = useState(1);

    const handleSize = (ind) => {
        setCountSize(ind);
    };
    const handleFavorite = () => {
        dispatch(addToFavorite({ ...productItem, size: countSize }));
        setFavoIcon(false);
    };

    const handleAddToCart = () => {
        dispatch(addToCart({ ...productItem, size: countSize, quantity: 1 }));
        setCartIcon(false);
    };

    const handleDelete = () => {
        const modData = [...cartItems];
        modData.splice(unqId, 1);
        dispatch(assignCartData(modData));
    };

    const handleIncrement = () => {
        const cartMod = [...cartItems];
        cartMod.splice(unqId, 1, { ...cartMod[unqId], quantity: counter + 1 });
        dispatch(assignCartData(cartMod));
        setCounter(counter + 1);
    };

    const handleDecrement = () => {
        const cartMod = [...cartItems];
        cartMod.splice(unqId, 1, { ...cartMod[unqId], quantity: counter - 1 });
        dispatch(assignCartData(cartMod));
        setCounter(counter - 1);
    };

    useEffect(() => {
        setCountSize(productItem?.size);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div
            className={[
                styles.productCard,
                isCheckout ? styles.checkoutPage : '',
            ].join(' ')}
        >
            <div className={styles.productImg}>
                <Image
                    src={productItem?.image}
                    alt="mainImg"
                    width={283}
                    height={412}
                    className={styles.mainImg}
                />
                <div className={styles.hoverImg} role="hoverImg">
                    <Image src={img1} alt="" role="Share" />

                    {!isFav && favoIcon ? (
                        <Image
                            src={img2}
                            alt=""
                            onClick={handleFavorite}
                            role="favIcon"
                        />
                    ) : (
                        ''
                    )}

                    {!isCheckout && cartIcon ? (
                        <Image
                            src={img3}
                            alt=""
                            onClick={handleAddToCart}
                            role="cartIcon"
                        />
                    ) : (
                        ''
                    )}
                </div>
            </div>
            <div className={styles.desc}>
                <p>{productItem?.title}</p>
                <p className={styles.price}>
                    ₹{productItem?.price}
                    <span>₹1299 </span>
                </p>
                <ul>
                    {productSizes.map((item, index) => (
                        <li
                            key={index}
                            onClick={() => handleSize(index)}
                            className={[
                                index === countSize ? styles.active : '',
                            ].join(' ')}
                            role="sizes"
                        >
                            {item}
                        </li>
                    ))}
                </ul>
                {isCheckout ? (
                    <div className={styles.counter} role="counterWrap">
                        <button
                            onClick={handleDecrement}
                            role="decrement"
                            disabled={counter <= 1}
                        >
                            -
                        </button>
                        <input
                            type="text"
                            value={counter}
                            role="inputCounter"
                            readOnly
                        />
                        <button onClick={handleIncrement} role="increment">
                            +
                        </button>
                    </div>
                ) : (
                    ''
                )}

                {isCheckout ? (
                    <button onClick={handleDelete} role="deleteBtn">
                        Delete
                    </button>
                ) : (
                    ''
                )}
            </div>
        </div>
    );
};

export default ProductCard;
