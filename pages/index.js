import Image from 'next/image';
import banner from '../assets/chrismos.webp';
import banner2 from '../assets/banner2.png';

import bannerimg1 from '../assets/image2.png';
import bannerimg2 from '../assets/image3.png';
import bannerimg3 from '../assets/image4.png';
import bannerimg4 from '../assets/image5.png';
import bannerimg5 from '../assets/image6.png';
import { bannerList } from '@/data/banners/bannerAvatar';
import BannerAvatar from '@/components/bannerAvatar/BannerAvatar';
import styles from '@/styles/main.module.scss';
import {
    bestSellerProductList,
    featureProductList,
    newProductList,
    trendingProductList,
} from '@/data/products/products';
import ProductsContainer from '@/container/ProductsContainer/ProductsContainer';
import { categoryList } from '@/data/category/category';
import CategoryCard from '@/components/categoryCard/CategoryCard';
import OfferCard from '@/components/offersCard/OfferCard';
import offer1 from '@/assets/diamond.png';
import offer2 from '@/assets/discount.png';
import Subscription from '@/components/subscription/Subscription';
import { Fragment } from 'react';
import SEO from '@/components/Seo/Seo';
import Link from 'next/link';

export default function Home() {
    return (
        <Fragment>
            <SEO
                title="Home"
                description="Landing page of products"
                keywords="products, offers, subscription"
            />
            <Link href={'/category/Chrismas-Sale'}>
                <Image
                    src={banner}
                    className={'w-full h-full object-contain cursor-pointer block'}
                    role="bannerMain"
                    alt="bannerMain"
                    priority
                />
            </Link>
            <div
                className={`container flex justify-between gap-5 flex-wrap content-center md:pt-16 pt-7 ${styles.bannerList}`}
            >
                {bannerList.map((item, index) => (
                    <Link key={index} href={item.route}>
                        {' '}
                        <BannerAvatar title={item?.title} image={item?.image} />
                    </Link>
                ))}
            </div>
            <div
                className={`container flex justify-center content-center flex-col flex-wrap gap-5 ${styles.WrapFlex}`}
            >
                <div className={`${styles.Wrap} ${styles.wrapOne}`}>
                    <Link href={'/category/HoodedT-Shirts'} className="contents">
                        <Image
                            src={bannerimg1}
                            alt="bannerimg1"
                            width={588}
                            height={295}
                            priority
                        />
                    </Link>
                    <Link href={'/category/WinterCollections'} className="contents">
                        {' '}
                        <Image
                            src={bannerimg2}
                            alt="bannerimg2"
                            width="588"
                            height="295"
                            priority
                        />
                    </Link>
                </div>
                <div className={`${styles.Wrap} ${styles.wrapTwo}`}>
                    <Link href={'/category/WomensWear'} className="contents">
                        <Image
                            src={bannerimg3}
                            width="384"
                            height="176"
                            alt="bannerimg3"
                            priority
                        />
                    </Link>
                    <Link
                        href={'/category/FullSleevesT-Shirts'}
                        className="contents"
                    >
                        <Image
                            src={bannerimg4}
                            width="384"
                            height="176"
                            alt="bannerimg4"
                            priority
                        />
                    </Link>
                    <Link href={'/category/Chrismas-Sale'} className="contents">
                        <Image
                            src={bannerimg5}
                            width="384"
                            height="176"
                            alt="bannerimg5"
                            priority
                        />
                    </Link>
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
            <Link href={'/category/Chrismas-Sale'}>
                <Image
                    src={banner2}
                    className={
                        'w-full h-full object-contain cursor-pointer block pt-16'
                    }
                    height={500}
                    role="bannerSecondary"
                    alt="bannerSecondary"
                />
            </Link>
            <ProductsContainer
                titleDisplay="New Products"
                productsList={newProductList}
            />
            <ProductsContainer
                titleDisplay="Best Selling Products"
                productsList={bestSellerProductList}
            />
            <div
                className={`container flex flex-wrap justify-between gap-5  ${styles.categoryWrap}`}
            >
                {categoryList.map((item, index) => (
                    <Link href={item?.route} key={index}>
                        {' '}
                        <CategoryCard title={item.title} image={item.image} />
                    </Link>
                ))}
            </div>
            <div
                className={
                    'container flex justify-center content-center flex-wrap gap-6 !pt-16'
                }
            >
                <OfferCard image={offer1} offer="85% OFF" style="#CCCEA7" />
                <OfferCard image={offer2} offer="75% OFF" style="#D6BEBE" />
            </div>
            <div className={'container !pt-12 lg:!pt-16'}>
                <Subscription />
            </div>
            <div className={'w-full h-px bg-gray-300 !my-12 lg:!my-16'}></div>
        </Fragment>
    );
}
