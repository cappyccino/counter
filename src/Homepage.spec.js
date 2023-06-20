import Homepage from "./Homepage";
import {render, screen} from "@testing-library/react";

describe('The Homepage', () => {
    it('displays an initial value for the counter', () => {
        render(<Homepage/>)

        expect(screen.getByText('Counter: 0')).toBeInTheDocument()
    });
});
