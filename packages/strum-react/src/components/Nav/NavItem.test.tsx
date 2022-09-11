import { cleanup, render, screen } from '../../../test';
import { NavItem } from './NavItem';

describe('<NavItem />', () => {
  afterEach(cleanup);

  it('renders', () => {
    render(<NavItem>Nav item</NavItem>);
    expect(screen.getByText(/nav/i)).toBeVisible();
  });
});
