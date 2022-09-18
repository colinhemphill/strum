import { cleanup, render, screen } from '../../../test';
import { Badge } from './Badge';

describe('<Badge />', () => {
  afterEach(cleanup);

  it('renders', () => {
    render(<Badge>Badge</Badge>);
    expect(screen.getByText(/badge/i)).toBeVisible();
  });
});
