import { expect } from "vitest";
import Item from "./item";
import {render} from "@testing-library/react"

test("if items in the list (Item component) are rendered correctly", () => {
    render(Item)
})