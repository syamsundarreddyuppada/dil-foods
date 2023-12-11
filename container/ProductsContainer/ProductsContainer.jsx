import ProductCard from '@/components/productCard/ProductCard'
import TitleDisplay from '@/components/titleDisplay/TitleDisplay'
import { trendingProductList } from '@/data/products/products'
import React, { useState } from 'react';
import styles from "@/styles/main.module.scss";

const ProductsContainer = ({ titleDisplay = "Trending T-Shirts", productsList = { trendingProductList } }) => {
  const [productDataList, setProductDataList] = useState(productsList)
  const handleViewAll = () => { 
    setProductDataList([...productDataList,...productsList])
   }
  return (
 <div className="container">
        <TitleDisplay title={titleDisplay} />
        <div className={styles.productsList}>
          {productDataList?.map((item, index) => (
            <ProductCard key={index} productItem={item} />
          ))}
        </div>
        <div className={styles.btn_Wrap}>
          <button className={styles.btn_all} onClick={handleViewAll}>View ALL</button>
        </div>
      </div>  )
}

export default ProductsContainer