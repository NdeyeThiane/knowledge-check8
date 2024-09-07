import { expect} from "vitest";
import Form from "./form";
import {screen} from '@testing-library/react';

test("On click", () => {
    const buttonSubmit = screen.queryByText('submit')
    expect(buttonSubmit).toBeNull();


})
