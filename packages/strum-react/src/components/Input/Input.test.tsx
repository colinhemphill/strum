import { cleanup, render, screen } from '../../../test';
import { Input } from './Input';

describe('<Input />', () => {
  afterEach(cleanup);

  it('renders', () => {
    const name = 'Test';
    render(<Input id="test-id" label={name} />);
    expect(screen.getByRole('label', { name })).toBeVisible();
    expect(screen.getByRole('textbox', { name })).toBeVisible();
  });

  it('sets the error state of the input', () => {
    const name = 'Test';
    const errorMessage = 'Error';
    render(<Input id="test-id" label={name} error={errorMessage} />);
    expect(screen.getByRole('textbox', { name })).toHaveErrorMessage(
      errorMessage,
    );
  });

  it('sets the disabled state of the input', () => {
    const name = 'Test';
    render(<Input id="test-id" label={name} disabled />);
    expect(screen.getByRole('textbox', { name })).toHaveAttribute('disabled');
  });
});
