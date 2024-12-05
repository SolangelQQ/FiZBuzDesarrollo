import { fizzBuzz } from "../fizzbuzz";

describe("FizzBuzz Function", () => {
    it("Debe devolver 'Fizz' al ingresar 3", () => {
        expect(fizzBuzz(3)).to.equal("Fizz");
    });

});