import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./productCard.module.scss";
import { productSizes } from "@/data/products/products";
import img1 from "@/assets/fav1.svg";
import img2 from "@/assets/fav2.svg";
import img3 from "@/assets/fav3.svg";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  addToFavorite,
  assignCartData,
  assignFavoriteData,
} from "@/store/productReducer/productReducer";

const ProductCard = ({ productItem, isCheckout, unqId, isFav }) => {
  const {  cartItems } = useSelector(
    (state) => state?.productItems
  );
  const dispatch = useDispatch();

  const [countSize, setCountSize] = useState(null);
  const [counter, setCounter] = useState(1)

  const handleSize = (ind) => {
    setCountSize(ind);
  };
  const handleFavorite = (e) => {
    dispatch(addToFavorite({ ...productItem, size: countSize }));
  };

  const handleAddToCart = (e) => {
    dispatch(addToCart({ ...productItem, size: countSize }));
  };

  const handleDelete = () => {
    const modData = [...cartItems];
    modData.splice(unqId, 1);
    dispatch(assignCartData(modData));
  };

  useEffect(() => {
    setCountSize(productItem?.size);
  }, []);

  return (
    <div
      className={[
        styles.productCard,
        isCheckout ? styles.checkoutPage : "",
      ].join(" ")}
    >
      <div className={styles.productImg}>
        <Image
          src={productItem?.image}
          alt=""
          width={283}
          height={412}
          className={styles.mainImg}
        />
        <div className={styles.hoverImg}>
          <Image src={img1} alt="" />
          {!isFav ? <Image src={img2} alt="" onClick={handleFavorite} /> : ""}
          {!isCheckout ? (
            <Image src={img3} alt="" onClick={handleAddToCart} />
          ) : (
            ""
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
              onClick={(e) => handleSize(index)}
              className={[index === countSize ? styles.active : ""].join(" ")}
            >
              {item}
            </li>
          ))}
        </ul>
        {isCheckout ? (
          <div className={styles.counter}>
            <button onClick={e => setCounter(counter - 1)} disabled={counter <= 1}>-</button>
            <input type="text" value={counter} />
            <button onClick={e => setCounter(counter + 1)}>+</button>
          </div>
        ) : (
          ""
        )}

        {isCheckout ? <button onClick={handleDelete}>Delete</button> : ""}
      </div>
    </div>
  );
};

export default ProductCard;
