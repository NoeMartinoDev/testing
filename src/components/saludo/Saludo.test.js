import { render, screen } from "@testing-library/react";
import Saludo from "./Saludo"

test("Renderiza el texto correcto", () => {
    render(<Saludo/>)
    expect(screen.getByText("Hola")).toBeInTheDocument;
})

test("Renderiza el texto correcto", () => {
    render(<Saludo name="Juan"/>)
    expect(screen.getByText("Hola Juan")).toBeInTheDocument;
})