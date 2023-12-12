import cat1 from '@/assets/Group50.png';
import cat2 from '@/assets/Group51.png';
import cat3 from '@/assets/Group52.png';
import cat4 from '@/assets/Group53.png';
import cat5 from '@/assets/Group54.png';
import cat6 from '@/assets/Group55.png';

import mens1 from '@/assets/tshirts2.jpg';
import mens2 from '@/assets/tshirts3.jpg';
import mens3 from '@/assets/pro3.png';
import mens4 from '@/assets/tshirts4.jpg';

import women1 from '@/assets/women1.webp';
import women2 from '@/assets/women2.webp';
import women3 from '@/assets/women3.webp';
import women4 from '@/assets/women4.webp';

import winter1 from '@/assets/winter1.webp';
import winter2 from '@/assets/winter2.webp';
import winter3 from '@/assets/winter3.webp';
import winter4 from '@/assets/winter4.webp';

import hoodie1 from '@/assets/hoodie1.webp';
import hoodie2 from '@/assets/hoodie2.webp';
import hoodie3 from '@/assets/hoodie3.webp';
import hoodie4 from '@/assets/hoodie4.webp';

export const categoryList = [
    {
        title: 'Streetwear Collections',
        image: cat1,
        route: '/category/HoodedT-Shirts',
    },
    {
        title: 'Striped T-Shirts',
        image: cat2,
        route: '/category/MensT-Shirts',
    },
    {
        title: 'Round Neck T-Shirts',
        image: cat3,
        route: '/category/PoloNeckT-Shirts',
    },
    {
        title: 'Printed T-Shirts',
        image: cat6,
        route: '/category/WinterCollections',
    },
    {
        title: 'Oversized T-Shirts',
        image: cat5,
        route: '/category/WomensWear',
    },
    {
        title: 'Half Sleeves T-Shirts',
        image: cat4,
        route: '/category/FullSleevesT-Shirts',
    },
];

export const mensCategory = [
    {
        title: 'Men Tom Henley T shirts',
        price: '399',
        image: mens1,
    },
    {
        title: 'Men Henley T shirts Red Wine',
        price: '399',
        image: mens2,
    },
    {
        title: 'Men Henley T shirts Full Sleeve Red Wine',
        price: '399',
        image: mens3,
    },
    {
        title: 'Men Henley T shirts Full Sleeve Red Wine',
        price: '399',
        image: mens4,
    },
];

export const womensCategory = [
    {
        title: 'women Henley shirts',
        price: '399',
        image: women1,
    },
    {
        title: 'women Henley sweater',
        price: '399',
        image: women2,
    },
    {
        title: 'women Henley sweat shirt',
        price: '399',
        image: women3,
    },
    {
        title: 'women Henley  Red Wine',
        price: '399',
        image: women4,
    },
];

export const winterCategory = [
    {
        title: 'women Henley shirts',
        price: '399',
        image: winter1,
    },
    {
        title: 'women Henley sweater',
        price: '399',
        image: winter2,
    },
    {
        title: 'men Henley sweat shirt',
        price: '399',
        image: winter3,
    },
    {
        title: 'men Henley sweater jacket',
        price: '399',
        image: winter4,
    },
];

export const hoodieCategory = [
    {
        title: 'men Henley black panther shirts',
        price: '399',
        image: hoodie1,
    },
    {
        title: 'men Henley smooth sweater',
        price: '399',
        image: hoodie2,
    },
    {
        title: 'men Henley sweat shirt',
        price: '399',
        image: hoodie3,
    },
    {
        title: 'men Henley black panther sweater',
        price: '399',
        image: hoodie4,
    },
];

export const poloNeckCategory = [
    {
        title: 'men Henley black panther shirts',
        price: '399',
        image: hoodie1,
    },
    {
        title: 'men Henley smooth sweater',
        price: '399',
        image: hoodie2,
    },
    {
        title: 'men Henley sweat shirt',
        price: '399',
        image: winter3,
    },
    {
        title: 'men Henley winter jacket',
        price: '399',
        image: winter4,
    },
];

export const fullSleevesCategory = [
    {
        title: 'men Henley winter jacket',
        price: '399',
        image: winter4,
    },
    {
        title: 'men Henley hot sweater',
        price: '399',
        image: winter3,
    },
    {
        title: 'men Henley sweat shirt',
        price: '399',
        image: hoodie3,
    },
    {
        title: 'men Henley black panther sweater',
        price: '399',
        image: hoodie4,
    },
];

export const categoryTitleObject = {
    'MensT-Shirts': {
        title: 'Mens T-Shirts',
        productsList: mensCategory,
    },
    WomensWear: {
        title: 'Womens Wear',
        productsList: womensCategory,
    },
    WinterCollections: {
        title: 'Winter Collections',
        productsList: winterCategory,
    },
    'HoodedT-Shirts': {
        title: 'Hooded T-Shirts',
        productsList: hoodieCategory,
    },
    'PoloNeckT-Shirts': {
        title: 'Polo Neck T-Shirts',
        productsList: poloNeckCategory,
    },
    'FullSleevesT-Shirts': {
        title: 'Full Sleeves T-Shirts',
        productsList: fullSleevesCategory,
    },
    'Chrismas-Sale': {
        title: 'Chrismas Sale',
        productsList: [
            ...mensCategory,
            ...womensCategory,
            ...winterCategory,
            ...hoodieCategory,
            ...poloNeckCategory,
            ...fullSleevesCategory,
        ],
    },
};
