import React, { useMemo } from "react";
import styles from "./checkout.module.scss";
import TitleDisplay from "@/components/titleDisplay/TitleDisplay";
import { useSelector } from "react-redux";
import ProductCard from "@/components/productCard/ProductCard";
const index = () => {
  const { cartItems } = useSelector((state) => state?.productItems);

  const calculatePrice = useMemo(() => {
    return cartItems?.reduce((pre, cur) => pre + Number(cur.price), 0);
  }, [cartItems?.length]);
  console.log(calculatePrice);
  return (
    <div className={["container", styles.paySection].join(" ")}>
      <TitleDisplay title="Check Out" />
      <div className={styles.productsList}>
        {cartItems?.map((item, index) => (
          <ProductCard
            key={index}
            productItem={item}
            isCheckout={true}
            unqId={index}
          />
        ))}
      </div>
      {cartItems?.length ? (
        <div className={styles.payment}>
          {calculatePrice <= 1000 ? (
            <span v-show="calculatePrice <= 1000">
              Add ₹{calculatePrice < 1000 ? 1000 - calculatePrice : " "}
                 of eligible items to your order to qualify for FREE Delivery.
            </span>
          ) : (
            ""
          )}
          <p>
            Subtotal ({cartItems.length} item): ₹{calculatePrice}.00
          </p>
          <button>Proceed to Buy</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default index;
