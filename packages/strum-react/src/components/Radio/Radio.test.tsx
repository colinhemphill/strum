import { cleanup, render, screen } from '../../../test';
import { RadioGroup, RadioItem } from './Radio';

describe('<Radio />', () => {
  afterEach(cleanup);

  it('renders', () => {
    const label = 'Test item 1';
    const value = 'test-item-1';

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
});
