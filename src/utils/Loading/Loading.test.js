import { render, screen } from '@testing-library/react'
import Loading from './Loading.jsx';

test("Main section render successfuly", () => {
    render(<Loading/>);

    const element2 = screen.getByTestId('overlay');
    expect(element2).toBeInTheDocument();
    const element3 = screen.getByTestId('loader');
    expect(element3).toBeInTheDocument();

})