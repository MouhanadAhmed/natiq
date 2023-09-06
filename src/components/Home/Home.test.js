import { render, screen } from '@testing-library/react'
import Home from './Home.jsx';

test("Main section render successfuly", () => {
    render(<Home/>);

    const element2 = screen.getByTestId('mainSec');
    expect(element2).toBeInTheDocument();
    const element3 = screen.getByTestId('Maintext');
    expect(element3).toBeInTheDocument();
    const element1 = screen.getByTestId('MainImg');
    expect(element1).toBeInTheDocument();
})