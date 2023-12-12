import React, { useEffect, useState } from "react";
import styles from "./checkout.module.scss";
import TitleDisplay from "@/components/titleDisplay/TitleDisplay";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "@/components/productCard/ProductCard";
  import {  toast } from 'react-toastify';
import { useRouter } from "next/router";
import { assignCartData } from "@/store/productReducer/productReducer";
import SEO from "@/components/Seo/Seo";

const Checkout = () => {
  const router = useRouter();
  const dispatch = useDispatch()
  const { cartItems } = useSelector((state) => state?.productItems);
  const [calculatePrice, setCalculatePrice] = useState(null);
  const [itemsAddedQuantity, setItemsAddedQuantity] = useState(null)

  const handleSubmit = () => {
    dispatch(assignCartData([]))
    router.push("/")
    toast.success("Order Placed Successfully")
   }

  useEffect(() => {
    const result = cartItems?.reduce((pre, cur) => pre + Number(cur.price) * cur.quantity, 0);
         const itemsQuantity =  cartItems?.reduce((pre, cur) => pre + cur.quantity, 0);
setItemsAddedQuantity(itemsQuantity)
     setCalculatePrice(result)
  }, [cartItems])
  
  
   return (
     <div className={["container", styles.paySection].join(" ")}>
          <SEO
                title="Checkout"
                description="Landing page of Checkout Page"
                keywords="Checkout products, buy"
            />
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
           <p className="!font-serif text-center w-full"> order summary</p>
          {calculatePrice <= 1000 ? (
            <span >
              Add ₹ {calculatePrice < 1000 ? 1000 - calculatePrice : " "}
              {" "}of eligible items to your order to qualify for FREE Delivery.
            </span>
          ) : (
            ""
           )}
           {calculatePrice > 1000 ? <div> <b className={"!text-green-600"}>Your order is eligible for FREE Delivery.</b> <span className="block !text-gray-700"> Select this option at checkout. <span className="!text-gray-700 hover:!text-red-600 hover:underline cursor-pointer">Details</span></span></div> :"" }
          <p>
            Subtotal ({itemsAddedQuantity} item): ₹{calculatePrice}.00
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
