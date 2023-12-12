import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Favorite from '@/pages/favorites';
import '@testing-library/jest-dom';
import img1 from '@/assets/pro1.png';

const mockStore = configureMockStore();

describe('Favorite Component', () => {
    it('renders "Favorite Products" title', () => {
        const store = mockStore({
            productItems: {
                favoriteItems: [],
            },
        });

        render(
            <Provider store={store}>
                <Favorite />
            </Provider>
        );

        const title = screen.getByText(/Favorite Products/i);
        expect(title).toBeInTheDocument();
    });

    it('renders "No Favorite Items Available" message when there are no favorite items', () => {
        const store = mockStore({
            productItems: {
                favoriteItems: [],
            },
        });

        render(
            <Provider store={store}>
                <Favorite />
            </Provider>
        );

        const noItemsMessage = screen.getByText('No Favorite Items Available');
        expect(noItemsMessage).toBeInTheDocument();
    });

    it('renders favorite items when there are items in the store', () => {
        const store = mockStore({
            productItems: {
                favoriteItems: [
                    {
                        title: 'Men Henley Neck Full Sleeve Red Wine',
                        price: '399',
                        image: img1,
                    },
                    {
                        title: 'Sleeve Red Wine',
                        price: '399',
                        image: img1,
                    },
                ],
            },
        });

        render(
            <Provider store={store}>
                <Favorite />
            </Provider>
        );

        const product1 = screen.getByText('Men Henley Neck Full Sleeve Red Wine');
        const product2 = screen.getByText('Sleeve Red Wine');

        expect(product1).toBeInTheDocument();
        expect(product2).toBeInTheDocument();
    });
});
