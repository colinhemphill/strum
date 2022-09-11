import { cleanup, render, screen } from '../../../test';
import { Skeleton } from './Skeleton';

describe('<Skeleton />', () => {
  afterEach(cleanup);

  it('renders', () => {
    render(<Skeleton accessibilityLabel="Loading" />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });
});
