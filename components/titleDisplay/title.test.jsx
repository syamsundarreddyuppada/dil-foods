const { render, screen } = require('@testing-library/react');
import '@testing-library/jest-dom';

import TitleDisplay from './TitleDisplay';

describe('Title Display ', () => {
    test('should contain Title Display details', () => {
        render(<TitleDisplay title={'new products'} />);

        const element = screen.getByText('new products');
        expect(element).toBeInTheDocument();
    });
});
