const { render, screen, fireEvent } = require('@testing-library/react');
import '@testing-library/jest-dom';
import ProductCard from './ProductCard';
import img1 from '@/assets/pro1.png';
import { Provider } from 'react-redux';
import store from '@/store/store';
import userEvent from '@testing-library/user-event';

const productData = {
    title: 'Men Henley Neck Full Sleeve Red Wine',
    price: '399',
    image: img1,
};

describe('Product Card ', () => {
    test('should contain product Card details', () => {
        render(
            <Provider store={store}>
                <ProductCard
                    productItem={productData}
                    isCheckout={false}
                    isFav={false}
                    unqId={1}
                />
            </Provider>
        );
        const element = screen.getByText(
            /Men Henley Neck Full Sleeve Red Wine/i
        );
        const price = screen.getByText(/399/i);
        const mainProductImg = screen.getByAltText('mainImg');

        //access only on checkout
        const counterWrap = screen.queryByRole('counterWrap');
        const deleteBtn = screen.queryByRole('deleteBtn');
        const favIcon = screen.queryByRole('favIcon');
        const cartIcon = screen.queryByRole('cartIcon');

        expect(element).toBeInTheDocument();
        expect(price).toBeInTheDocument();
        expect(mainProductImg).toBeInTheDocument();

        //access only on checkout
        expect(counterWrap).not.toBeInTheDocument();
        expect(deleteBtn).not.toBeInTheDocument();

        //onClick fav and cart icons before
        expect(cartIcon).toBeInTheDocument();
        expect(favIcon).toBeInTheDocument();

        // after clicking fav and cart icon
        fireEvent.click(cartIcon);
        expect(cartIcon).not.toBeInTheDocument();

        fireEvent.click(favIcon);
        expect(favIcon).not.toBeInTheDocument();
    });

    test('should show the sizes', () => {
        render(
            <Provider store={store}>
                <ProductCard
                    productItem={productData}
                    isCheckout={false}
                    isFav={false}
                    unqId={1}
                />
            </Provider>
        );

        const sizes = screen.getAllByRole('sizes');
        expect(sizes.length).toBe(5);
    });

    test('should be checkout and favorite props true with hover', () => {
        render(
            <Provider store={store}>
                <ProductCard
                    productItem={productData}
                    isCheckout={true}
                    isFav={true}
                    unqId={1}
                />
            </Provider>
        );

        const counterWrap = screen.queryByRole('counterWrap');
        const deleteBtn = screen.queryByRole('deleteBtn');
        const input = screen.getByRole('inputCounter');
        const decrement = screen.getByRole('decrement');
        const increment = screen.getByRole('increment');
        const share = screen.queryByRole('Share');

        //onhover product
        fireEvent.mouseEnter(screen.getByRole('hoverImg'));
        expect(share).toBeInTheDocument();

        //access only on checkout
        expect(counterWrap).toBeInTheDocument();
        expect(deleteBtn).toBeInTheDocument();
        expect(input).toBeInTheDocument();
        expect(decrement).toBeInTheDocument();
        expect(increment).toBeInTheDocument();

        //onClick counters
        expect(input).toHaveValue('1');

        fireEvent.click(increment);
        expect(input).toHaveValue('2');

        fireEvent.click(increment);
        expect(input).toHaveValue('3');
    });
});
