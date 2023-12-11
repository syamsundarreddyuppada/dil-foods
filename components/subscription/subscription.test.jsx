const { render, screen } = require('@testing-library/react');
import '@testing-library/jest-dom';
import Subscription from './Subscription';

describe('Offer Card ', () => {
    test('should contain Offer Card details', () => {
        render(<Subscription />);

        const element = screen.getByText(
            /Subscribe to get updates on exciting offers & deals/i
        );
        const input = screen.getByRole('emailField');
        const btn = screen.getByRole('button', {
            name: 'Subscribe',
        });

        expect(btn).toBeInTheDocument();
        expect(input).toBeInTheDocument();
        expect(element).toBeInTheDocument();
    });
});
