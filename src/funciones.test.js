import { suma, multiplicar, obj } from "./funciones";


describe("Test de operaciones matemáticas", () => {
    test('sumar 1 + 2 es igual a 3', () => {
        expect(suma(1, 2)).toBe(3);
      });
    
    test("Debe retornar el resultado de la multiplicación de dos parámetros", () => {
        expect(multiplicar(5, 4)).toBe(20);
    })
})

describe("Test de objetos", () => {
    it("Retorna un objeto", () => {
        expect(obj()).toEqual({ name: "Juan", lastname: "Ruiz"})
    })
    test("Debe retornar un objeto con las propiedades name y lastname", () => {
        let propiedades = [ "name", "lastname"]
        expect(Object.keys(obj())).toEqual(propiedades)
    }
)
})