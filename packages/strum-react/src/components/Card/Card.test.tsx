import { cleanup, render, screen } from '../../../test';
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardSubtitle,
  CardText,
  CardTitle,
} from './Card';

describe('<Card />', () => {
  afterEach(cleanup);

  it('renders', () => {
    render(
      <Card>
        <CardHeader>Header</CardHeader>
        <CardBody>
          <CardTitle as="h1">Title</CardTitle>
          <CardSubtitle as="h2">Subtitle</CardSubtitle>
          <CardText>Text</CardText>
        </CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>,
    );

    expect(screen.getByText('Header')).toBeVisible();
    expect(screen.getByRole('heading', { level: 1 })).toBeVisible();
    expect(screen.getByRole('heading', { level: 2 })).toBeVisible();
    expect(screen.getByText('Text')).toBeVisible();
    expect(screen.getByText('Footer')).toBeVisible();
  });
});
