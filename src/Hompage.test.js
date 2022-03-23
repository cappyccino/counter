import Homepage from "./Homepage";
import {fireEvent, render, screen} from "@testing-library/react";

describe('The Homepage', () => {
    it('displays an initial value for the counter', () => {
        render(<Homepage/>)

        expect(screen.getByText('Counter: 0')).toBeInTheDocument()
    });

    it('can increment the counter by one', () => {
        render(<Homepage/>)

        fireEvent.click(screen.getByText('increment'))
        expect(screen.getByText('Counter: 1')).toBeInTheDocument()

        fireEvent.click(screen.getByText('increment'))
        expect(screen.getByText('Counter: 2')).toBeInTheDocument()

        fireEvent.click(screen.getByText('increment'))
        expect(screen.getByText('Counter: 3')).toBeInTheDocument()
    });

    it('can decrement the counter by one', () => {
        render(<Homepage/>)
        fireEvent.click(screen.getByText('increment'))
        fireEvent.click(screen.getByText('increment'))
        fireEvent.click(screen.getByText('increment'))

        fireEvent.click(screen.getByText('decrement'))
        expect(screen.getByText('Counter: 2')).toBeInTheDocument()

        fireEvent.click(screen.getByText('decrement'))
        expect(screen.getByText('Counter: 1')).toBeInTheDocument()

        fireEvent.click(screen.getByText('decrement'))
        expect(screen.getByText('Counter: 0')).toBeInTheDocument()
    });

    it('cannot decrement the counter below zero', () => {
        render(<Homepage/>)

        fireEvent.click(screen.getByText('decrement'))
        expect(screen.getByText('Counter: 0')).toBeInTheDocument()
    });
});






