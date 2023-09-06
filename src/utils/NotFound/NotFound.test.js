import { render, screen } from '@testing-library/react'
import NotFound from './NotFound.jsx';

test("Main section render successfuly", () => {
    render(<NotFound/>);

    const element1 = screen.getByTestId('overlay');
    expect(element1).toBeInTheDocument();
    const element2 = screen.getByTestId('row');
    expect(element2).toBeInTheDocument();
    const element3 = screen.getByTestId('img');
    expect(element3).toBeInTheDocument();
    const element4 = screen.getByTestId('head');
    expect(element4).toBeInTheDocument();
    const element5 = screen.getByTestId('txt');
    expect(element5).toBeInTheDocument();

})