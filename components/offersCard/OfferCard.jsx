import Image from 'next/image'
import React from 'react';
import styles from "./offer.module.scss"

const OfferCard = ({offer,image}) => {
  return (
    <div className={["flex justify-center flex-col",styles.offer].join(" ")} style={ {background: styles }}>
        <Image src={image} alt="" />
        <span>Hurry Up!</span>
        <p>{ offer }</p>
        <p class="sale">Sale</p>
        <button>shop now</button>
    </div>  )
}

export default OfferCard