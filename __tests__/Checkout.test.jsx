import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import '@testing-library/jest-dom';
import Checkout from '@/pages/checkout';

// Mock next/router
jest.mock('next/router', () => ({
    useRouter: jest.fn(),
}));

const mockStore = configureMockStore();

describe('Checkout Page', () => {
    it('renders "Checkout Products" title', () => {
        const store = mockStore({
            productItems: {
                cartItems: [],
            },
        });

        render(
            <Provider store={store}>
                <Checkout />
            </Provider>
        );

        const title = screen.getByText(/Check Out/i);
        expect(title).toBeInTheDocument();
    });

    it('renders "No Checkout Products Available" message when there are no Checkout Products', () => {
        const store = mockStore({
            productItems: {
                cartItems: [],
            },
        });

        render(
            <Provider store={store}>
                <Checkout />
            </Provider>
        );

        const noItemsMessage = screen.getByText('No Checkout Items Available');
        expect(noItemsMessage).toBeInTheDocument();
    });
});
