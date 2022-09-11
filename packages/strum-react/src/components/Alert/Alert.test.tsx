import { cleanup, render, screen } from '../../../test';
import { Alert } from './Alert';

describe('<Alert />', () => {
  afterEach(cleanup);

  it('renders', () => {
    render(<Alert>Alert</Alert>);
    expect(screen.getByRole('alert')).toBeVisible();
  });
});
