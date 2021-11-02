import { fireEvent, render, screen } from '@testing-library/react';
import PricingContainer from '../PricingContainer';

describe('pricingContainetTest',()=>{
    it('pricingContainetTest is in the dom', () => {
        render(<PricingContainer />);
        const linkElement = screen.getByTitle("select-weight");
        expect(linkElement).toBeInTheDocument();
      });
      
      it('should be able to type into input', () => {
        render(
            <PricingContainer />
        );
        const inputElement = screen.getByTitle("select-weight");
        fireEvent.change(inputElement, { target: { value: "500" } })
        expect(inputElement.value).toBe("500");
    });
})