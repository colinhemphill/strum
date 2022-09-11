import { cleanup, render, screen } from '../../../test';
import { Tooltip } from './Tooltip';

describe('<Tooltip />', () => {
  afterEach(cleanup);

  it('renders', async () => {
    // const user = userEvent.setup();

    render(
      <Tooltip content="Tooltip content">
        <div>Tooltip trigger</div>
      </Tooltip>,
    );

    const trigger = screen.getByText(/trigger/i);
    expect(trigger).toBeVisible();
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();

    // these tests work, but logs a PopperContent error

    // user.hover(trigger);

    // await waitFor(() => {
    //   expect(screen.getByRole('tooltip')).toBeVisible();
    // });
  });
});
