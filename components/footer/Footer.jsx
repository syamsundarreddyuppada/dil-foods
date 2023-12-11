import React from 'react';
import styles from './footer.module.scss';
import {
    footerApps,
    footerOnlineShopping,
    footerPolicy,
    footerStore,
} from '@/data/footer/footer';
import Image from 'next/image';
const Footer = () => {
    return (
        <>
            <div
                className={[
                    'container flex flex-wrap gap-9',
                    styles.footer,
                ].join(' ')}
            >
                <div className={styles.one}>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries....
                    </p>
                    <div className={styles.imgWrap}>
                        {footerApps.map((item, index) => (
                            <Image src={item} alt="social media" key={index} />
                        ))}
                    </div>
                </div>
                <div className={styles.two}>
                    <p className={styles.title}>ONLINE SHOPPING</p>
                    <ul>
                        {footerOnlineShopping.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles.three}>
                    <p className={styles.title}>CUSTOMER POLICIES</p>
                    <ul>
                        {footerPolicy.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles.four}>
                    <p className={styles.title}>STORE INFORMATION</p>
                    <ul>
                        {footerStore.map((item, index) => (
                            <li key={index}>
                                <div>
                                    <Image src={item.img} alt="" />
                                    <span>{item.name}</span>
                                </div>{' '}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Footer;
