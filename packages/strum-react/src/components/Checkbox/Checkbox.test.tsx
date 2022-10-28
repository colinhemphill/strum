import { cleanup, render, screen, userEvent } from '../../../test';
import { Checkbox } from './Checkbox';

const name = 'Test';

describe('<Checkbox />', () => {
  afterEach(cleanup);

  it('renders', () => {
    render(<Checkbox id="test-id" label={name} />);
    expect(screen.getByRole('checkbox', { checked: false })).toBeVisible();
    expect(screen.getByLabelText(name)).toBeVisible();
  });

  it('passing checked controls the input', async () => {
    render(<Checkbox checked id="test-id" label={name} />);

    const checkbox = screen.getByRole('checkbox', { checked: true });
    expect(checkbox).toBeVisible();
  });

  it('toggles checked state', async () => {
    const user = userEvent.setup();
    render(<Checkbox id="test-id" label={name} />);

    const checkbox = screen.getByRole('checkbox', { checked: false });
    expect(checkbox).toBeVisible();
    expect(screen.getByLabelText(name)).toBeVisible();

    await user.click(checkbox);

    expect(screen.getByRole('checkbox', { checked: true })).toBeVisible();
  });

  it('sets the disabled state of the input', () => {
    render(<Checkbox id="test-id" label={name} disabled />);
    expect(screen.getByRole('checkbox', { name })).toHaveAttribute('disabled');
  });
});
