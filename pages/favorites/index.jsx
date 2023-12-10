import React from 'react'
import styles from "./favorites.module.scss"
import TitleDisplay from '@/components/titleDisplay/TitleDisplay'
import { useSelector } from 'react-redux';
import ProductCard from '@/components/productCard/ProductCard';
const index = () => {
      const { favoriteItems } = useSelector(
    (state) => state?.productItems
  );
  return (
    <div className="container">
        <TitleDisplay title="Favorite Products" />
          <div className={styles.productsList}>
              {favoriteItems?.map((item,index)=>     <ProductCard
                key={index}
                productItem={item}
                isFav={true}
            /> )}
        
        </div>
    </div>  )
}

export default index