import { cleanup, render, screen } from '../../../test';
import { Box } from './Box';

describe('<Box />', () => {
  afterEach(cleanup);

  it('renders', () => {
    render(<Box>Reach into the box</Box>);
    expect(screen.getByText(/reach/i)).toBeVisible();
  });
});
