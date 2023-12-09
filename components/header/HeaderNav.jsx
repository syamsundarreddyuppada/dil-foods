import Image from "next/image";
import React from "react";

import menu from "../../assets/Group 3.svg";
import appLogo from "../../assets/logoSrc.png";
import nav1 from "../../assets/nav1.svg";
import nav2 from "../../assets/nav2.svg";
import nav3 from "../../assets/nav3.svg";
import nav4 from "../../assets/nav4.svg";

const HeaderNav = () => {
  return (
    <>
      <div class="header">
        <Image src={menu} />
        <Image src={appLogo} class="logos" />
        <div class="headerRight">
          <Image src={nav4} class="Image1" />
          <div class="fav">
            <Image src={nav1} />
            <span v-show="store?.favItems?.length">
              {
                // store?.favItems?.length
                1
              }
            </span>
          </div>

          <div class="fav">
            <Image src={nav2} />
            <span v-show="store?.cartItems?.length">
              {
                // store?.cartItems?.length1
                1
              }
            </span>
          </div>

          <Image src={nav3} class="Image1" />
        </div>
      </div>
    </>
  );
};

export default HeaderNav;
