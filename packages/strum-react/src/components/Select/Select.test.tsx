import { cleanup, render, screen, userEvent } from '../../../test';
import { Select, SelectGroup, SelectItem, SelectLabel } from './Select';

describe('<Select />', () => {
  afterEach(cleanup);

  it('renders', () => {
    render(<Select />);
    expect(screen.getByRole('combobox')).toBeVisible();
  });

  it('passing value controls the input', async () => {
    const user = userEvent.setup();

    render(
      <Select placeholder="Select an instrument" value="piano">
        <SelectItem text="Guitar" value="guitar" />
        <SelectItem text="Piano" value="piano" />
      </Select>,
    );

    await user.click(screen.getByRole('combobox'));

    expect(screen.getByRole('option', { name: 'Guitar' })).toHaveAttribute(
      'aria-selected',
      'false',
    );
    expect(screen.getByRole('option', { name: 'Piano' })).toHaveAttribute(
      'aria-selected',
      'true',
    );
  });

  it('clicking the select shows options', async () => {
    const user = userEvent.setup();

    render(
      <Select placeholder="Select an instrument">
        <SelectGroup>
          <SelectLabel text="Strings" />
          <SelectItem text="Violin" value="violin" />
          <SelectItem text="Cello" value="cello" />
        </SelectGroup>
        <SelectGroup>
          <SelectLabel text="Woodwinds" />
          <SelectItem text="Clarinet" value="clarinet" />
        </SelectGroup>
      </Select>,
    );

    await user.click(screen.getByRole('combobox'));

    expect(screen.getByRole('listbox')).toBeVisible();
    expect(screen.getByText('Strings')).toBeVisible();
    expect(screen.getByText('Woodwinds')).toBeVisible();
    expect(screen.getByText('Violin')).toBeVisible();
    expect(screen.getByText('Clarinet')).toBeVisible();
  });
});
