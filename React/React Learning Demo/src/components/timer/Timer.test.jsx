import { render, screen } from '@testing-library/react';
import Timer from './Timer';

describe('Timer', () => {
    test('renders timer component', () => {
        render(<Timer />);
        const timerElement = screen.getByTestId('timer');
        expect(timerElement).toBeInTheDocument();
    });
});
