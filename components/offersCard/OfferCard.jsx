import Image from 'next/image'
import React from 'react';
import styles from "./offer.module.scss"

const OfferCard = ({offer,image,style}) => {
  return (
    <div className={["flex justify-center flex-col",styles.offer].join(" ")} style={ {background: style }}>
        <Image src={image} alt="" />
        <span>Hurry Up!</span>
        <p>{ offer }</p>
        <p className="sale">Sale</p>
        <button>shop now</button>
    </div>  )
}

export default OfferCard