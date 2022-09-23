import { cleanup, render, screen } from '../../../test';
import { Container } from './Container';

describe('<Container />', () => {
  afterEach(cleanup);

  it('renders', () => {
    render(<Container>Container</Container>);
    expect(screen.getByText(/container/i)).toBeVisible();
  });

  it('renders a fluid container', () => {
    render(<Container fluid>Container fluid</Container>);
    expect(screen.getByText(/container/i)).toBeVisible();
  });
});
