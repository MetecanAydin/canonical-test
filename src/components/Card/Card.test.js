import { render, screen } from '@testing-library/react';
import { Card } from './Card';
import rawdata from '../../test/rawdata.json'

test('renders <Card/> component', () => {
    render(<Card data={rawdata[0]} />);
    const linkElement = screen.getByRole('listitem');
    expect(linkElement).toBeInTheDocument();
});
