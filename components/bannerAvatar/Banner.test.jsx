const { render, screen } = require('@testing-library/react');
import cat1 from '@/assets/Group50.png';
import '@testing-library/jest-dom';
import BannerAvatar from './BannerAvatar';

describe('BannerAvatar', () => {
    test('should contain Banner Avatar titles', () => {
        render(<BannerAvatar title={'shirts'} image={cat1} />);
        const element = screen.getByText('shirts');
        expect(element).toBeInTheDocument();
    });

    test('should contain Banner Avatar  images', () => {
        render(<BannerAvatar title={'call'} image={cat1} />);
        const element = document.querySelector('img');
        expect(element).toBeInTheDocument();
    });
});
