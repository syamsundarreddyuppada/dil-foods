import ProductCard from '@/components/productCard/ProductCard'
import TitleDisplay from '@/components/titleDisplay/TitleDisplay'
import { trendingProductList } from '@/data/products/products'
import React from 'react';
import styles from "@/styles/main.module.scss";

const ProductsContainer = ({ titleDisplay = "Trending T-Shirts", productsList = { trendingProductList } }) => {
  return (
 <div className="container">
        <TitleDisplay title={titleDisplay} />
        <div className={styles.productsList}>
          {productsList?.map((item, index) => (
            <ProductCard key={index} productItem={item} />
          ))}
        </div>
        <div className={styles.btn_Wrap}>
          <button className={styles.btn_all}>View ALL</button>
        </div>
      </div>  )
}

export default ProductsContainer