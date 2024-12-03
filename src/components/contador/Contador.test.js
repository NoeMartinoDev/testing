import Contador from "./Contador";
import { render, fireEvent, screen } from "@testing-library/react";

test("Incrementa el contador cuando clickeo el botón", () => {
    render(<Contador/>)
    fireEvent.click(screen.getByText("Incrementar"))
    expect(screen.getByText("Contador: 1")).toBeInTheDocument;
})