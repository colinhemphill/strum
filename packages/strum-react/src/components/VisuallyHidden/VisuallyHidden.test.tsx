import { cleanup, render, screen } from '../../../test';
import { VisuallyHidden } from './VisuallyHidden';

describe('<VisuallyHidden />', () => {
  afterEach(cleanup);

  it('renders', () => {
    render(<VisuallyHidden>Hidden element</VisuallyHidden>);
    expect(screen.getByText(/hidden/i)).toBeInTheDocument();
  });
});
