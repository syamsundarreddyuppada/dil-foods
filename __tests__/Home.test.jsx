const { render, screen } = require('@testing-library/react');
import Home from '@/pages';
import store from '@/store/store';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';

describe('Home ', () => {
    test('should contain Home details', () => {
        render(
            <Provider store={store}>
                <Home />
            </Provider>
        );

        const bannerMain = screen.getByRole('bannerMain');
        const bannerSecondary = screen.getByRole('bannerSecondary');

        expect(bannerMain).toBeInTheDocument();
        expect(bannerSecondary).toBeInTheDocument();
    });
});
