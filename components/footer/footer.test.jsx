const { render, screen } = require('@testing-library/react');
import '@testing-library/jest-dom';
import Footer from './Footer';

describe('Footer ', () => {
    test('should contain Footer details', () => {
        render(<Footer />);
        const element = screen.getByText(
            /Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries..../i
        );
        const shopping = screen.getByText('ONLINE SHOPPING');
        const customer = screen.getByText('CUSTOMER POLICIES');
        const store = screen.getByText('STORE INFORMATION');

        expect(element).toBeInTheDocument();
        expect(shopping).toBeInTheDocument();
        expect(customer).toBeInTheDocument();
        expect(store).toBeInTheDocument();
    });

    test('should show social media', () => {
        render(<Footer />);

        const socialMedia = screen.getAllByAltText('social media');
        expect(socialMedia.length).toBe(5);
    });
});
