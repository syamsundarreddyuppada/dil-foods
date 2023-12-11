const { render, screen } = require('@testing-library/react')
import '@testing-library/jest-dom'
import OfferCard from './OfferCard'
import offer1 from '@/assets/diamond.png'

describe('Offer Card ', () => {
    test('should contain Offer Card details', () => {
      render(<OfferCard offer={'60% offer'} image={offer1} style="#CCCEA7" />);
      
      const element = screen.getByText('60% offer');
      const hurry = screen.getByText('Hurry Up!');
      const Sale = screen.getByText('Sale');
      const btn = screen.getByRole("button", {
        name:"shop now"
      })

      expect(btn).toBeInTheDocument();
      expect(Sale).toBeInTheDocument();
      expect(hurry).toBeInTheDocument();
      expect(element).toBeInTheDocument();
    })
})
