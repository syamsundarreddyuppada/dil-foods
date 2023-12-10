import Image from 'next/image'
import React from 'react';
import styles from "./bannerAvatar.module.scss";

const BannerAvatar = ({image,title}) => {
  return (
    <div className={styles.avatar}>
        <Image src={image} width={170} height={170} alt="bannerImage" />
        <p>{ title }</p>
    </div>  )
}

export default BannerAvatar