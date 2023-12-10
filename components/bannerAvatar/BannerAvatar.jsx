import Image from 'next/image'
import React from 'react';
import styles from "./bannerAvatar.module.scss";

const BannerAvatar = ({image,title}) => {
  return (
    <div className={styles.avatar}>
        <Image src={image} width={170} height={170} className="cursor-pointer" alt="bannerImage" />
        <p className="pt-2 text-center font-semibold ">{ title }</p>
    </div>  )
}

export default BannerAvatar