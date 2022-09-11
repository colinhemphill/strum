import { cleanup, render, screen } from '../../../test';
import { Button } from './Button';

describe('<Button />', () => {
  afterEach(cleanup);

  it('renders a button component', () => {
    render(<Button>Strum a chord</Button>);
    expect(screen.getByRole('button')).toBeVisible();
  });

  it('renders a link button', () => {
    render(
      <Button as="a" href="https://test.com/">
        Strum a chord
      </Button>,
    );

    const linkButton = screen.getByRole('link');
    expect(linkButton).toBeVisible();
    expect(linkButton).toHaveProperty('href', 'https://test.com/');
  });

  it('shows a loading spinner', () => {
    render(<Button loading>Strum a chord</Button>);

    // the spinner component adds an accessible "Loading" label
    expect(screen.getByText('Loading')).toBeInTheDocument();
  });

  it('sets the disabled state of the button', () => {
    render(<Button disabled>Strum a chord</Button>);

    // the spinner component adds an accessible "Loading" label
    expect(screen.getByRole('button')).toHaveAttribute('disabled');
  });
});
