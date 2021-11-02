import { render, screen } from '@testing-library/react';
import DeliveryProcessFaq from '../../components/faq/subcomponents/DeliveryProcessFaq';

it('Delivery process faq', () => {
  render(<DeliveryProcessFaq deliveryTitle="delivery faq"/>)
  const deliveryFaqElement = screen.getByText(/delivery faq/i)
  expect(deliveryFaqElement).toBeInTheDocument();
})