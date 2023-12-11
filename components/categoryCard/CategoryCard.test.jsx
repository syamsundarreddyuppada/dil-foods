const { render, screen } = require('@testing-library/react');
const { default: CategoryCard } = require('./CategoryCard');
import cat1 from '@/assets/Group50.png';
import '@testing-library/jest-dom';

describe('categoryCard', () => {
    test('should contain category card titles', () => {
        render(<CategoryCard title={'New product'} image={cat1} />);
        const element = screen.getByText('New product');
        expect(element).toBeInTheDocument();
    });

    test('should contain category card  images', () => {
        render(<CategoryCard title={'call'} image={cat1} />);
        const element = document.querySelector('img');
        expect(element).toBeInTheDocument();
    });
});
