import { fizzBuzz } from "../fizzbuzz";

describe("FizzBuzz Function", () => {
    it("Debe devolver 'Fizz' al ingresar 3", () => {
        expect(fizzBuzz(3)).to.equal("Fizz");
    });

    it("debe devolver 'Buzz' al ingresar 5", () => {
        expect(fizzBuzz(5)).to.equal("Buzz");
    });

    it("Debe retornar 'FizzBuzz' para multiplos de 3 y 5", () => {
        expect(fizzBuzz(15)).to.equal("FizzBuzz");
        expect(fizzBuzz(30)).to.equal("FizzBuzz");
    });

});