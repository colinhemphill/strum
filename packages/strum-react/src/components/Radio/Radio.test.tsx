import { cleanup, render, screen, userEvent } from '../../../test';
import { RadioGroup, RadioItem } from './Radio';

const label = 'Test item 1';
const value = 'test-item-1';

describe('<Radio />', () => {
  afterEach(cleanup);

  it('renders', () => {
    render(
      <>
        <RadioGroup>
          <RadioItem label={label} value={value} />
        </RadioGroup>
      </>,
    );
    expect(screen.getByRole('radiogroup')).toBeVisible();
    expect(screen.getByRole('radio', { name: label })).toBeVisible();
    expect(screen.getByRole('label', { name: label })).toBeVisible();
  });

  it('passing value controls the input', async () => {
    const label1 = 'radio-1';
    const label2 = 'radio-2';
    const value1 = 'value-1';
    const value2 = 'value-2';

    render(
      <RadioGroup value={value2}>
        <RadioItem label={label1} value={value1} />
        <RadioItem label={label2} value={value2} />
      </RadioGroup>,
    );

    const radio1 = screen.getByRole('radio', { name: label1 });
    const radio2 = screen.getByRole('radio', { name: label2 });
    expect(radio1).not.toBeChecked();
    expect(radio2).toBeChecked();
  });

  it('changes selected radio item', async () => {
    const user = userEvent.setup();
    const label1 = 'radio-1';
    const label2 = 'radio-2';
    const value1 = 'value-1';
    const value2 = 'value-2';

    render(
      <RadioGroup>
        <RadioItem label={label1} value={value1} />
        <RadioItem label={label2} value={value2} />
      </RadioGroup>,
    );

    const radio1 = screen.getByRole('radio', { name: label1 });
    const radio2 = screen.getByRole('radio', { name: label2 });

    await user.click(radio2);

    expect(radio1).not.toBeChecked();
    expect(radio2).toBeChecked();
  });

  it('sets the disabled state of the input', () => {
    render(
      <RadioGroup>
        <RadioItem disabled label={label} value={value} />
      </RadioGroup>,
    );
    expect(screen.getByRole('radio', { name: label })).toHaveAttribute(
      'disabled',
    );
  });
});
