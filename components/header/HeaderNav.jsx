import Image from "next/image";
import React from "react";

import menu from "../../assets/Group 3.svg";
import appLogo from "../../assets/logoSrc.png";
import nav1 from "../../assets/nav1.svg";
import nav2 from "../../assets/nav2.svg";
import nav3 from "../../assets/nav3.svg";
import nav4 from "../../assets/nav4.svg";

import styles from "./header.module.scss";
import Link from "next/link";
import { useSelector } from "react-redux";

const HeaderNav = () => {
  const { favoriteItems, cartItems } = useSelector(
    (state) => state?.productItems
  );

  return (
    <>
      <div className={`${styles.header}  flex justify-around py-2 px-5 `} >
        <Image src={menu} />
        <Link href={"/"} role="homePage">
          {" "}
          <Image src={appLogo} className={styles.logos} width={160} height={70}  />
        </Link>
        <div className="flex align-middle justify-center gap-6">
          <Image src={nav4} className={styles.Image1} />
          <Link href={"/favorites"} role="favorite">
            {" "}
            <div className={styles.fav}>
              <Image src={nav1} alt="Favorite Icon" />
              {favoriteItems?.length ? <span>{favoriteItems?.length}</span> : ""}
            </div>
          </Link>

          <Link href={"/checkout"} role="checkout">
            <div className={styles.fav}>
              <Image src={nav2} alt="Checkout Icon" />
              {cartItems?.length ? <span>{cartItems?.length}</span> : ""}
            </div>
          </Link>

          <Image src={nav3} className={styles.Image1} />
        </div>
      </div>
    </>
  );
};

export default HeaderNav;
