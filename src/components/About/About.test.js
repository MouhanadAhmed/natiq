import { render, screen } from '@testing-library/react'
import About from './About.jsx';

test("Main section render successfuly", () => {
    render(<About/>);
    const element1 = screen.getByTestId('MainImg');
    expect(element1).toBeInTheDocument();
    const element2 = screen.getByTestId('mainSec');
    expect(element2).toBeInTheDocument();
    const element3 = screen.getByTestId('Maintext');
    expect(element3).toBeInTheDocument();
})
test("Description section render successfuly", () => {
    render(<About/>);
    const element1 = screen.getByTestId('descSec');
    expect(element1).toBeInTheDocument();
    const element2 = screen.getByTestId('descRow');
    expect(element2).toBeInTheDocument();
    const element3 = screen.getByTestId('descTxt');
    expect(element3).toBeInTheDocument();
})
test("MainFeatures section render successfuly", () => {
    render(<About/>);
    expect(screen.getByTestId('featureSec')).toBeInTheDocument();
    expect(screen.getByTestId('featureTitle')).toBeInTheDocument();
    expect(screen.getByTestId('descTxt')).toBeInTheDocument();
    
    expect(screen.getByTestId('AccurateSec')).toBeInTheDocument();
    expect(screen.getByTestId('AccurateIco')).toBeInTheDocument();
    expect(screen.getByTestId('Accurate')).toBeInTheDocument();
    expect(screen.getByTestId('AccurateP')).toBeInTheDocument();
    
    expect(screen.getByTestId('smartSec')).toBeInTheDocument();
    expect(screen.getByTestId('smartIco')).toBeInTheDocument();
    expect(screen.getByTestId('smart')).toBeInTheDocument();
    expect(screen.getByTestId('smartP')).toBeInTheDocument();
})






