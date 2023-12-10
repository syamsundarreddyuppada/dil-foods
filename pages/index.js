import Image from "next/image";
import { Inter } from "next/font/google";
import banner from "../assets/banner.png";
import banner2 from "../assets/banner2.png";
import banner3 from "../assets/banner3.png";

import bannerimg1 from "../assets/image2.png";
import bannerimg2 from "../assets/image3.png";
import bannerimg3 from "../assets/image4.png";
import bannerimg4 from "../assets/image5.png";
import bannerimg5 from "../assets/image6.png";
import { bannerList } from "@/data/banners/bannerAvatar";
import BannerAvatar from "@/components/bannerAvatar/BannerAvatar";
import styles from "@/styles/main.module.scss";
import {
  featureProductList,
  trendingProductList,
} from "@/data/products/products";
import TitleDisplay from "@/components/titleDisplay/TitleDisplay";
import ProductCard from "@/components/productCard/ProductCard";
import ProductsContainer from "@/container/ProductsContainer/ProductsContainer";
import { categoryList } from "@/data/category/category";
import CategoryCard from "@/components/categoryCard/CategoryCard";
import OfferCard from "@/components/offersCard/OfferCard";
import offer1 from "@/assets/diamond.png";
import offer2 from "@/assets/discount.png";
import Subscription from "@/components/subscription/Subscription";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Image
        src={banner}
        className={"w-full h-full object-contain cursor-pointer block"}
      />
      <div className={`container ${styles.bannerList}`}>
        {bannerList.map((item, index) => (
          <BannerAvatar key={index} title={item?.title} image={item?.image} />
        ))}
      </div>
      <div
        className={`container flex justify-between flex-wrap gap-5 ${styles.WrapFlex}`}
      >
        <div className={`${styles.Wrap} ${styles.wrapOne}`}>
          <Image
            src={bannerimg1}
            alt=""
            width="588"
            height="295"
            loading="lazy"
          />
          <Image
            src={bannerimg2}
            alt=""
            width="588"
            height="295"
            loading="lazy"
          />
        </div>
        <div className={`${styles.Wrap} ${styles.wrapTwo}`}>
          <Image
            src={bannerimg3}
            width="384"
            height="176"
            alt=""
            loading="lazy"
          />
          <Image
            src={bannerimg4}
            width="384"
            height="176"
            alt=""
            loading="lazy"
          />
          <Image
            src={bannerimg5}
            width="384"
            height="176"
            alt=""
            loading="lazy"
          />
        </div>
      </div>
      <ProductsContainer
        titleDisplay="Trending T-Shirts"
        productsList={trendingProductList}
      />
      <ProductsContainer
        titleDisplay="Featured Products"
        productsList={featureProductList}
      />
      <Image
        src={banner2}
        className={"w-full h-full object-contain cursor-pointer block pt-16"}
        height={500}
      />
      <ProductsContainer
        titleDisplay="New Products"
        productsList={featureProductList}
      />
      <ProductsContainer
        titleDisplay="Best Selling Products"
        productsList={featureProductList}
      />
      <div
        className={`container flex flex-wrap justify-between gap-5  ${styles.categoryWrap}`}
      >
        {categoryList.map((item, index) => (
          <CategoryCard key={index} title={item.title} image={item.image} />
        ))}
      </div>
      <div className={["container", styles.offerWrap].join(" ")}>
        <OfferCard image={offer1} offer="85% OFF" styles="#CCCEA7" />
        <OfferCard image={offer2} offer="75% OFF" styles="#D6BEBE" />
      </div>

      <div className={["container", styles.subs].join(" ")}>
        <Subscription />
      </div>

      <div className={styles.divider}></div>
    </>
  );
}
