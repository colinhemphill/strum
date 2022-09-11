import { cleanup, render, screen } from '../../../test';
import { Text } from './Text';

describe('<Text />', () => {
  afterEach(cleanup);

  it('renders', () => {
    render(<Text>My text block</Text>);
    expect(screen.getByText(/text/i)).toBeVisible();
  });
});
