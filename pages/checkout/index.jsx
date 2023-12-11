import React, { useEffect, useState } from "react";
import styles from "./checkout.module.scss";
import TitleDisplay from "@/components/titleDisplay/TitleDisplay";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "@/components/productCard/ProductCard";
  import {  toast } from 'react-toastify';
import { useRouter } from "next/router";
import { assignCartData } from "@/store/productReducer/productReducer";

const Checkout = () => {
  const router = useRouter();
  const dispatch = useDispatch()
  const { cartItems } = useSelector((state) => state?.productItems);
  const [calculatePrice, setCalculatePrice] = useState(null)

  const handleSubmit = () => {
    dispatch(assignCartData([]))
    router.push("/")
    toast.success("Order Placed Successfully")
   }

  useEffect(() => {
     const result =  cartItems?.reduce((pre, cur) => pre + Number(cur.price) * cur.quantity, 0);
setCalculatePrice(result)
  }, [cartItems])
  
  
   return (
    <div className={["container", styles.paySection].join(" ")}>
      <TitleDisplay title="Check Out" />
      <div className={styles.productsList}>

  {!cartItems?.length ?       <p className="flex justify-center w-full text-3xl">        No Checkout Items Available
</p> :""}

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
              Add ₹ {calculatePrice < 1000 ? 1000 - calculatePrice : " "}
              {" "}of eligible items to your order to qualify for FREE Delivery.
            </span>
          ) : (
            ""
          )}
          <p>
            Subtotal ({cartItems.length} item): ₹{calculatePrice}.00
          </p>
          <button onClick={handleSubmit}>Proceed to Buy</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Checkout;
