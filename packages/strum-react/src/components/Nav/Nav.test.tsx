import { cleanup, render, screen } from '../../../test';
import { Nav } from './Nav';

describe('<Nav />', () => {
  afterEach(cleanup);

  it('renders', () => {
    render(<Nav>Nav menu</Nav>);
    expect(screen.getByText(/nav/i)).toBeVisible();
  });
});
