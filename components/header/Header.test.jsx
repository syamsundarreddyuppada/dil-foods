const { render, screen } = require('@testing-library/react');
import cat1 from '@/assets/Group50.png';
import '@testing-library/jest-dom';
import HeaderNav from './HeaderNav';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import img1 from '@/assets/pro1.png';

// Mock next/router
jest.mock('next/router', () => ({
    useRouter: jest.fn(),
}));
const mockStore = configureMockStore();

const altTexts = [
    'menu',
    'brandLogo',
    'search',
    'Favorite Icon',
    'Checkout Icon',
    'user',
];

describe('Header ', () => {
    test('should contain Header items details', () => {
        const store = mockStore({
            productItems: {
                favoriteItems: [],
                cartItems: [],
            },
        });

        render(
            <Provider store={store}>
                <HeaderNav />
            </Provider>
        );

        // Check each element with the expected alt text
        altTexts.forEach((altText, index) => {
            const element = screen.getByAltText(altText);
            expect(element).toBeInTheDocument();
        });
    });

    test('should show inactive products in favorite and cart by circle', () => {
        const store = mockStore({
            productItems: {
                favoriteItems: [],
                cartItems: [],
            },
        });

        render(
            <Provider store={store}>
                <HeaderNav />
            </Provider>
        );

        const favCount = screen.queryByRole('favoriteCount');
        const cartCount = screen.queryByRole('cartCount');

        //before products added
        expect(favCount).not.toBeInTheDocument();
        expect(cartCount).not.toBeInTheDocument();
    });

    test('should show active products in favorite and cart by circle', () => {
        const store = mockStore({
            productItems: {
                favoriteItems: [
                    {
                        title: 'Men Henley Neck Full Sleeve Red Wine',
                        price: '399',
                        image: img1,
                    },
                ],
                cartItems: [
                    {
                        title: 'Men Henley Neck Full Sleeve Red Wine',
                        price: '399',
                        image: img1,
                    },
                ],
            },
        });

        render(
            <Provider store={store}>
                <HeaderNav />
            </Provider>
        );

        const favCount = screen.queryByRole('favoriteCount');
        const cartCount = screen.queryByRole('cartCount');

        //after products added
        expect(favCount).toBeInTheDocument();
        expect(cartCount).toBeInTheDocument();
    });
});
