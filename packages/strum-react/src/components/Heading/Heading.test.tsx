import { cleanup, render, screen } from '../../../test';
import { Heading } from './Heading';

describe('<Heading />', () => {
  afterEach(cleanup);

  it('renders', () => {
    render(<Heading>My Heading</Heading>);
    expect(screen.getByText(/heading/i)).toBeVisible();
  });

  it('defaults to a heading', () => {
    render(<Heading>My Heading</Heading>);
    expect(screen.getByRole('heading')).toBeVisible();
  });
});
